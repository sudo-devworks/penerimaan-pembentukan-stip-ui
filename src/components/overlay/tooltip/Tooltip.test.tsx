import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

afterEach(() => {
  vi.clearAllTimers();
  vi.useRealTimers();
});

import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "./Tooltip";

const ExampleTooltip = ({
  openDelay = 0,
  closeOnEscape = true,
}: {
  openDelay?: number;
  closeOnEscape?: boolean;
}) => (
  <Tooltip openDelay={openDelay} closeDelay={0} closeOnEscape={closeOnEscape}>
    <TooltipTrigger variant="outline">Participant status</TooltipTrigger>

    <TooltipContent>
      <TooltipArrow />
      Verification is pending
    </TooltipContent>
  </Tooltip>
);

describe("Tooltip", () => {
  it("opens through pointer hover", async () => {
    render(<ExampleTooltip />);

    const trigger = screen.getByRole("button", {
      name: "Participant status",
    });

    fireEvent.mouseEnter(trigger);

    expect(await screen.findByRole("tooltip")).toHaveTextContent(
      "Verification is pending",
    );
  });

  it("opens through keyboard focus", async () => {
    const user = userEvent.setup();

    render(<ExampleTooltip />);

    const trigger = screen.getByRole("button", {
      name: "Participant status",
    });

    await user.tab();

    expect(trigger).toHaveFocus();

    expect(await screen.findByRole("tooltip")).toBeInTheDocument();
  });

  it("connects the trigger through aria-describedby", async () => {
    const user = userEvent.setup();

    render(<ExampleTooltip />);

    const trigger = screen.getByRole("button", {
      name: "Participant status",
    });

    await user.tab();

    const tooltip = await screen.findByRole("tooltip");

    expect(trigger).toHaveAttribute("aria-describedby", tooltip.id);
  });

  it("does not move focus into the tooltip", async () => {
    const user = userEvent.setup();

    render(<ExampleTooltip />);

    const trigger = screen.getByRole("button", {
      name: "Participant status",
    });

    await user.tab();

    await screen.findByRole("tooltip");

    expect(trigger).toHaveFocus();
  });

  it("closes when focus leaves the trigger", async () => {
    const user = userEvent.setup();

    render(
      <>
        <ExampleTooltip />

        <button type="button">Next action</button>
      </>,
    );

    await user.tab();

    expect(await screen.findByRole("tooltip")).toBeInTheDocument();

    await user.tab();

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });

  it("closes with Escape", async () => {
    const user = userEvent.setup();

    render(<ExampleTooltip />);

    await user.tab();

    await screen.findByRole("tooltip");

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Participant status",
      }),
    ).toHaveFocus();
  });

  it("can prevent Escape dismissal", async () => {
    const user = userEvent.setup();

    render(<ExampleTooltip closeOnEscape={false} />);

    await user.tab();

    await screen.findByRole("tooltip");

    await user.keyboard("{Escape}");

    expect(screen.getByRole("tooltip")).toBeInTheDocument();
  });

  it("closes when its trigger is activated", async () => {
    const user = userEvent.setup();

    render(<ExampleTooltip />);

    const trigger = screen.getByRole("button", {
      name: "Participant status",
    });

    await user.tab();

    await screen.findByRole("tooltip");

    await user.click(trigger);

    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("supports an opening delay", async () => {
    vi.useFakeTimers();

    try {
      render(<ExampleTooltip openDelay={500} />);

      const trigger = screen.getByRole("button", {
        name: "Participant status",
      });

      fireEvent.mouseEnter(trigger);

      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

      await act(async () => {
        await vi.advanceTimersByTimeAsync(500);
      });

      expect(screen.getByRole("tooltip")).toBeInTheDocument();
    } finally {
      vi.clearAllTimers();
      vi.useRealTimers();
    }
  });

  it("reports controlled state reasons", async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();

    const { rerender } = render(
      <Tooltip open={false} openDelay={0} onOpenChange={onOpenChange}>
        <TooltipTrigger>Controlled tooltip</TooltipTrigger>

        <TooltipContent>Controlled content</TooltipContent>
      </Tooltip>,
    );

    const trigger = screen.getByRole("button", {
      name: "Controlled tooltip",
    });

    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      expect(onOpenChange).toHaveBeenCalledWith(true, {
        reason: "programmatic",
      });
    });

    rerender(
      <Tooltip open openDelay={0} onOpenChange={onOpenChange}>
        <TooltipTrigger>Controlled tooltip</TooltipTrigger>

        <TooltipContent>Controlled content</TooltipContent>
      </Tooltip>,
    );

    await user.keyboard("{Escape}");

    expect(onOpenChange).toHaveBeenCalledWith(false, {
      reason: "escape-key",
    });
  });
});
