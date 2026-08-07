import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./index";

const DialogWithPopover = () => (
  <Dialog>
    <DialogTrigger>Open participant dialog</DialogTrigger>

    <DialogContent>
      <DialogTitle>Participant detail</DialogTitle>

      <Popover>
        <PopoverTrigger variant="outline">Open metadata</PopoverTrigger>

        <PopoverContent data-testid="dialog-popover">
          Participant metadata
        </PopoverContent>
      </Popover>

      <DialogFooter>
        <DialogClose>Close participant dialog</DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

const DrawerWithMenu = () => (
  <Drawer>
    <DrawerTrigger>Open participant drawer</DrawerTrigger>

    <DrawerContent>
      <DrawerTitle>Participant filters</DrawerTitle>

      <DrawerBody>
        <Menu>
          <MenuTrigger variant="outline">Open filter actions</MenuTrigger>

          <MenuContent aria-label="Filter actions">
            <MenuItem textValue="Reset filters">Reset filters</MenuItem>

            <MenuItem textValue="Save filters">Save filters</MenuItem>
          </MenuContent>
        </Menu>
      </DrawerBody>

      <DrawerFooter>
        <DrawerClose>Close participant drawer</DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

const DialogWithAlertDialog = () => (
  <Dialog>
    <DialogTrigger>Open edit dialog</DialogTrigger>

    <DialogContent>
      <DialogTitle>Edit participant</DialogTitle>

      <AlertDialog>
        <AlertDialogTrigger variant="destructive">
          Delete participant
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete participant?</AlertDialogTitle>

            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel delete</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <DialogFooter>
        <DialogClose>Close edit dialog</DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

describe("Overlay cross-portal integration", () => {
  it("keeps a Dialog open when its nested Popover closes", async () => {
    const user = userEvent.setup();

    render(<DialogWithPopover />);

    await user.click(
      screen.getByRole("button", {
        name: "Open participant dialog",
      }),
    );

    const popoverTrigger = screen.getByRole("button", {
      name: "Open metadata",
    });

    await user.click(popoverTrigger);

    expect(screen.getByTestId("dialog-popover")).toBeInTheDocument();

    await user.keyboard("{Escape}");

    expect(screen.queryByTestId("dialog-popover")).not.toBeInTheDocument();

    expect(
      screen.getByRole("dialog", {
        name: "Participant detail",
      }),
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(popoverTrigger).toHaveFocus();
    });
  });

  it("keeps Drawer scroll lock active after its nested Menu closes", async () => {
    const user = userEvent.setup();

    render(<DrawerWithMenu />);

    await user.click(
      screen.getByRole("button", {
        name: "Open participant drawer",
      }),
    );

    expect(document.body.style.overflow).toBe("hidden");

    const menuTrigger = screen.getByRole("button", {
      name: "Open filter actions",
    });

    await user.click(menuTrigger);

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();

    expect(
      screen.getByRole("dialog", {
        name: "Participant filters",
      }),
    ).toBeInTheDocument();

    expect(document.body.style.overflow).toBe("hidden");

    await waitFor(() => {
      expect(menuTrigger).toHaveFocus();
    });
  });

  it("restores focus from AlertDialog to its trigger inside Dialog", async () => {
    const user = userEvent.setup();

    render(<DialogWithAlertDialog />);

    await user.click(
      screen.getByRole("button", {
        name: "Open edit dialog",
      }),
    );

    const alertTrigger = screen.getByRole("button", {
      name: "Delete participant",
    });

    await user.click(alertTrigger);

    expect(
      screen.getByRole("alertdialog", {
        name: "Delete participant?",
      }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: "Cancel delete",
      }),
    );

    await waitFor(() => {
      expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();

      expect(alertTrigger).toHaveFocus();
    });

    expect(
      screen.getByRole("dialog", {
        name: "Edit participant",
      }),
    ).toBeInTheDocument();

    expect(document.body.style.overflow).toBe("hidden");
  });

  it("shows Tooltip inside a modal without moving focus", async () => {
    const user = userEvent.setup();

    render(
      <Dialog>
        <DialogTrigger>Open help dialog</DialogTrigger>

        <DialogContent>
          <DialogTitle>Help information</DialogTitle>

          <Tooltip openDelay={0}>
            <TooltipTrigger variant="outline">
              Participant identifier
            </TooltipTrigger>

            <TooltipContent>Main process identifier</TooltipContent>
          </Tooltip>

          <DialogFooter>
            <DialogClose>Close help dialog</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Open help dialog",
      }),
    );

    const tooltipTrigger = screen.getByRole("button", {
      name: "Participant identifier",
    });

    tooltipTrigger.focus();

    expect(await screen.findByRole("tooltip")).toBeInTheDocument();

    expect(tooltipTrigger).toHaveFocus();

    expect(
      screen.getByRole("dialog", {
        name: "Help information",
      }),
    ).toBeInTheDocument();
  });
});
