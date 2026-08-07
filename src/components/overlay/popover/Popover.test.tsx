import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "./Popover";

const ExamplePopover = ({
  closeOnEscape = true,
  closeOnOutsidePress = true,
}: {
  closeOnEscape?: boolean;
  closeOnOutsidePress?: boolean;
}) => (
  <div>
    <Popover
      closeOnEscape={closeOnEscape}
      closeOnOutsidePress={closeOnOutsidePress}
      placement="bottom-start"
    >
      <PopoverTrigger>Open participant summary</PopoverTrigger>

      <PopoverContent data-testid="popover-content">
        <PopoverArrow />

        <p>Participant summary content</p>

        <button type="button">Review participant</button>
      </PopoverContent>
    </Popover>

    <button type="button">Outside action</button>
  </div>
);

describe("Popover", () => {
  it("opens from its trigger", async () => {
    const user = userEvent.setup();

    render(<ExamplePopover />);

    const trigger = screen.getByRole("button", {
      name: "Open participant summary",
    });

    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await user.click(trigger);

    expect(screen.getByTestId("popover-content")).toBeInTheDocument();

    expect(trigger).toHaveAttribute("aria-expanded", "true");

    expect(trigger).toHaveAttribute(
      "aria-controls",
      screen.getByTestId("popover-content").id,
    );
  });

  it("does not assign dialog semantics automatically", async () => {
    const user = userEvent.setup();

    render(<ExamplePopover />);

    await user.click(
      screen.getByRole("button", {
        name: "Open participant summary",
      }),
    );

    expect(screen.getByTestId("popover-content")).not.toHaveAttribute(
      "role",
      "dialog",
    );
  });

  it("allows interactive content", async () => {
    const user = userEvent.setup();

    render(<ExamplePopover />);

    await user.click(
      screen.getByRole("button", {
        name: "Open participant summary",
      }),
    );

    expect(
      screen.getByRole("button", {
        name: "Review participant",
      }),
    ).toBeInTheDocument();
  });

  it("keeps focus on the trigger when opened", async () => {
    const user = userEvent.setup();

    render(<ExamplePopover />);

    const trigger = screen.getByRole("button", {
      name: "Open participant summary",
    });

    await user.click(trigger);

    await waitFor(() => {
      expect(trigger).toHaveFocus();
    });
  });

  it("closes with Escape by default", async () => {
    const user = userEvent.setup();

    render(<ExamplePopover />);

    const trigger = screen.getByRole("button", {
      name: "Open participant summary",
    });

    await user.click(trigger);

    await user.keyboard("{Escape}");

    expect(screen.queryByTestId("popover-content")).not.toBeInTheDocument();

    await waitFor(() => {
      expect(trigger).toHaveFocus();
    });
  });

  it("can prevent Escape dismissal", async () => {
    const user = userEvent.setup();

    render(<ExamplePopover closeOnEscape={false} />);

    await user.click(
      screen.getByRole("button", {
        name: "Open participant summary",
      }),
    );

    await user.keyboard("{Escape}");

    expect(screen.getByTestId("popover-content")).toBeInTheDocument();
  });

  it("closes through outside pointer interaction", async () => {
    const user = userEvent.setup();

    render(<ExamplePopover />);

    await user.click(
      screen.getByRole("button", {
        name: "Open participant summary",
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: "Outside action",
      }),
    );

    expect(screen.queryByTestId("popover-content")).not.toBeInTheDocument();
  });

  it("can prevent outside pointer dismissal", async () => {
    const user = userEvent.setup();

    render(<ExamplePopover closeOnOutsidePress={false} />);

    await user.click(
      screen.getByRole("button", {
        name: "Open participant summary",
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: "Outside action",
      }),
    );

    expect(screen.getByTestId("popover-content")).toBeInTheDocument();
  });

  it("reports controlled state reasons", async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();

    const { rerender } = render(
      <Popover open={false} onOpenChange={onOpenChange}>
        <PopoverTrigger>Open controlled</PopoverTrigger>

        <PopoverContent>Controlled content</PopoverContent>
      </Popover>,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Open controlled",
      }),
    );

    expect(onOpenChange).toHaveBeenCalledWith(true, {
      reason: "trigger-toggle",
    });

    rerender(
      <Popover open onOpenChange={onOpenChange}>
        <PopoverTrigger>Open controlled</PopoverTrigger>

        <PopoverContent>Controlled content</PopoverContent>
      </Popover>,
    );

    await user.keyboard("{Escape}");

    expect(onOpenChange).toHaveBeenCalledWith(false, {
      reason: "escape-key",
    });
  });
});
