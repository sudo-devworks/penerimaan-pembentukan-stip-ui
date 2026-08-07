import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./index";

const NestedPopoverMenu = () => (
  <Popover>
    <PopoverTrigger>Open participant options</PopoverTrigger>

    <PopoverContent data-testid="parent-popover">
      <p>Participant summary</p>

      <Menu>
        <MenuTrigger variant="outline">More actions</MenuTrigger>

        <MenuContent aria-label="More actions">
          <MenuItem textValue="Download document">Download document</MenuItem>

          <MenuItem textValue="Archive participant">
            Archive participant
          </MenuItem>
        </MenuContent>
      </Menu>
    </PopoverContent>
  </Popover>
);

describe("Nested overlay integration", () => {
  it("opens a Menu inside a Popover", async () => {
    const user = userEvent.setup();

    render(<NestedPopoverMenu />);

    await user.click(
      screen.getByRole("button", {
        name: "Open participant options",
      }),
    );

    expect(screen.getByTestId("parent-popover")).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: "More actions",
      }),
    );

    expect(
      screen.getByRole("menu", {
        name: "More actions",
      }),
    ).toBeInTheDocument();

    expect(screen.getByTestId("parent-popover")).toBeInTheDocument();
  });

  it("closes only the child on the first Escape", async () => {
    const user = userEvent.setup();

    render(<NestedPopoverMenu />);

    await user.click(
      screen.getByRole("button", {
        name: "Open participant options",
      }),
    );

    const menuTrigger = screen.getByRole("button", {
      name: "More actions",
    });

    await user.click(menuTrigger);

    await waitFor(() => {
      expect(
        screen.getByRole("menuitem", {
          name: "Download document",
        }),
      ).toHaveFocus();
    });

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();

    expect(screen.getByTestId("parent-popover")).toBeInTheDocument();

    await waitFor(() => {
      expect(menuTrigger).toHaveFocus();
    });
  });

  it("closes the parent on the second Escape", async () => {
    const user = userEvent.setup();

    render(<NestedPopoverMenu />);

    const parentTrigger = screen.getByRole("button", {
      name: "Open participant options",
    });

    await user.click(parentTrigger);

    await user.click(
      screen.getByRole("button", {
        name: "More actions",
      }),
    );

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();

    expect(screen.getByTestId("parent-popover")).toBeInTheDocument();

    await user.keyboard("{Escape}");

    expect(screen.queryByTestId("parent-popover")).not.toBeInTheDocument();

    await waitFor(() => {
      expect(parentTrigger).toHaveFocus();
    });
  });

  it("does not treat child interaction as outside press for the parent", async () => {
    const user = userEvent.setup();

    render(<NestedPopoverMenu />);

    await user.click(
      screen.getByRole("button", {
        name: "Open participant options",
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: "More actions",
      }),
    );

    await user.click(
      screen.getByRole("menuitem", {
        name: "Download document",
      }),
    );

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();

    expect(screen.getByTestId("parent-popover")).toBeInTheDocument();
  });
});
