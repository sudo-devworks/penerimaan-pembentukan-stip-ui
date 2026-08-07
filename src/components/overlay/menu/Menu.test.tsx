import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { useState } from "react";

import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuTrigger,
} from "./Menu";

const ExampleMenu = ({
  closeOnEscape = true,
  closeOnOutsidePress = true,
}: {
  closeOnEscape?: boolean;
  closeOnOutsidePress?: boolean;
}) => (
  <div>
    <Menu
      closeOnEscape={closeOnEscape}
      closeOnOutsidePress={closeOnOutsidePress}
    >
      <MenuTrigger variant="outline">Participant actions</MenuTrigger>

      <MenuContent aria-label="Participant actions">
        <MenuGroup>
          <MenuItem textValue="Edit participant">Edit participant</MenuItem>

          <MenuItem textValue="Download document">Download document</MenuItem>

          <MenuItem textValue="Disabled action" disabled>
            Disabled action
          </MenuItem>
        </MenuGroup>

        <MenuSeparator />

        <MenuItem textValue="Delete participant" destructive>
          Delete participant
        </MenuItem>
      </MenuContent>
    </Menu>

    <button type="button">Outside action</button>
  </div>
);

const SelectionMenu = () => {
  const [showArchived, setShowArchived] = useState(false);

  const [density, setDensity] = useState("comfortable");

  return (
    <Menu>
      <MenuTrigger>View options</MenuTrigger>

      <MenuContent aria-label="View options">
        <MenuGroup>
          <MenuGroupLabel>Visibility</MenuGroupLabel>

          <MenuCheckboxItem
            textValue="Show archived"
            checked={showArchived}
            onCheckedChange={setShowArchived}
          >
            Show archived
          </MenuCheckboxItem>
        </MenuGroup>

        <MenuSeparator />

        <MenuRadioGroup value={density} onValueChange={setDensity}>
          <MenuGroupLabel>Density</MenuGroupLabel>

          <MenuRadioItem textValue="Comfortable" value="comfortable">
            Comfortable
          </MenuRadioItem>

          <MenuRadioItem textValue="Compact" value="compact">
            Compact
          </MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  );
};

describe("Menu", () => {
  it("opens from its trigger", async () => {
    const user = userEvent.setup();

    render(<ExampleMenu />);

    const trigger = screen.getByRole("button", {
      name: "Participant actions",
    });

    expect(trigger).toHaveAttribute("aria-haspopup", "menu");

    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await user.click(trigger);

    expect(
      screen.getByRole("menu", {
        name: "Participant actions",
      }),
    ).toBeInTheDocument();

    expect(trigger).toHaveAttribute("aria-expanded", "true");
  });

  it("opens with ArrowDown and focuses the first item", async () => {
    const user = userEvent.setup();

    render(<ExampleMenu />);

    const trigger = screen.getByRole("button", {
      name: "Participant actions",
    });

    trigger.focus();

    await user.keyboard("{ArrowDown}");

    await waitFor(() => {
      expect(
        screen.getByRole("menuitem", {
          name: "Edit participant",
        }),
      ).toHaveFocus();
    });
  });

  it("opens with ArrowUp and focuses the last item", async () => {
    const user = userEvent.setup();

    render(<ExampleMenu />);

    const trigger = screen.getByRole("button", {
      name: "Participant actions",
    });

    trigger.focus();

    await user.keyboard("{ArrowUp}");

    await waitFor(() => {
      expect(
        screen.getByRole("menuitem", {
          name: "Delete participant",
        }),
      ).toHaveFocus();
    });
  });

  it("moves focus with arrow keys and skips disabled items", async () => {
    const user = userEvent.setup();

    render(<ExampleMenu />);

    await user.click(
      screen.getByRole("button", {
        name: "Participant actions",
      }),
    );

    const editItem = screen.getByRole("menuitem", {
      name: "Edit participant",
    });

    const downloadItem = screen.getByRole("menuitem", {
      name: "Download document",
    });

    const deleteItem = screen.getByRole("menuitem", {
      name: "Delete participant",
    });

    await waitFor(() => {
      expect(editItem).toHaveFocus();
    });

    await user.keyboard("{ArrowDown}");

    expect(downloadItem).toHaveFocus();

    await user.keyboard("{ArrowDown}");

    expect(deleteItem).toHaveFocus();
  });

  it("supports Home and End navigation", async () => {
    const user = userEvent.setup();

    render(<ExampleMenu />);

    await user.click(
      screen.getByRole("button", {
        name: "Participant actions",
      }),
    );

    const firstItem = screen.getByRole("menuitem", {
      name: "Edit participant",
    });

    const lastItem = screen.getByRole("menuitem", {
      name: "Delete participant",
    });

    await waitFor(() => {
      expect(firstItem).toHaveFocus();
    });

    await user.keyboard("{End}");

    await waitFor(() => {
      expect(lastItem).toHaveFocus();
    });

    await user.keyboard("{Home}");

    await waitFor(() => {
      expect(firstItem).toHaveFocus();
    });
  });

  it("supports typeahead navigation", async () => {
    const user = userEvent.setup();

    render(<ExampleMenu />);

    await user.click(
      screen.getByRole("button", {
        name: "Participant actions",
      }),
    );

    await user.keyboard("d");

    await waitFor(() => {
      expect(
        screen.getByRole("menuitem", {
          name: "Download document",
        }),
      ).toHaveFocus();
    });
  });

  it("runs an action and closes the menu", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    render(
      <Menu>
        <MenuTrigger>Open menu</MenuTrigger>

        <MenuContent aria-label="Example menu">
          <MenuItem textValue="Run action" onSelect={onSelect}>
            Run action
          </MenuItem>
        </MenuContent>
      </Menu>,
    );

    const trigger = screen.getByRole("button", {
      name: "Open menu",
    });

    await user.click(trigger);

    await user.click(
      screen.getByRole("menuitem", {
        name: "Run action",
      }),
    );

    expect(onSelect).toHaveBeenCalledTimes(1);

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();

    await waitFor(() => {
      expect(trigger).toHaveFocus();
    });
  });

  it("can keep the menu open after selection", async () => {
    const user = userEvent.setup();

    render(
      <Menu>
        <MenuTrigger>Open menu</MenuTrigger>

        <MenuContent aria-label="Example menu">
          <MenuItem textValue="Persistent action" keepOpenOnSelect>
            Persistent action
          </MenuItem>
        </MenuContent>
      </Menu>,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Open menu",
      }),
    );

    await user.click(
      screen.getByRole("menuitem", {
        name: "Persistent action",
      }),
    );

    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  it("closes with Escape and restores trigger focus", async () => {
    const user = userEvent.setup();

    render(<ExampleMenu />);

    const trigger = screen.getByRole("button", {
      name: "Participant actions",
    });

    await user.click(trigger);

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();

    await waitFor(() => {
      expect(trigger).toHaveFocus();
    });
  });

  it("can prevent Escape dismissal", async () => {
    const user = userEvent.setup();

    render(<ExampleMenu closeOnEscape={false} />);

    await user.click(
      screen.getByRole("button", {
        name: "Participant actions",
      }),
    );

    await user.keyboard("{Escape}");

    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  it("closes through outside pointer interaction", async () => {
    const user = userEvent.setup();

    render(<ExampleMenu />);

    await user.click(
      screen.getByRole("button", {
        name: "Participant actions",
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: "Outside action",
      }),
    );

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("renders groups, separators, and destructive state", async () => {
    const user = userEvent.setup();

    render(<ExampleMenu />);

    await user.click(
      screen.getByRole("button", {
        name: "Participant actions",
      }),
    );

    expect(screen.getByRole("group")).toBeInTheDocument();

    expect(screen.getByRole("separator")).toBeInTheDocument();

    expect(
      screen.getByRole("menuitem", {
        name: "Delete participant",
      }),
    ).toHaveAttribute("data-destructive", "true");
  });

  it("toggles a checkbox item without closing by default", async () => {
    const user = userEvent.setup();

    render(<SelectionMenu />);

    await user.click(
      screen.getByRole("button", {
        name: "View options",
      }),
    );

    const checkboxItem = screen.getByRole("menuitemcheckbox", {
      name: "Show archived",
    });

    expect(checkboxItem).toHaveAttribute("aria-checked", "false");

    await user.click(checkboxItem);

    expect(checkboxItem).toHaveAttribute("aria-checked", "true");

    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  it("changes radio selection without closing by default", async () => {
    const user = userEvent.setup();

    render(<SelectionMenu />);

    await user.click(
      screen.getByRole("button", {
        name: "View options",
      }),
    );

    const comfortable = screen.getByRole("menuitemradio", {
      name: "Comfortable",
    });

    const compact = screen.getByRole("menuitemradio", {
      name: "Compact",
    });

    expect(comfortable).toHaveAttribute("aria-checked", "true");

    expect(compact).toHaveAttribute("aria-checked", "false");

    await user.click(compact);

    expect(comfortable).toHaveAttribute("aria-checked", "false");

    expect(compact).toHaveAttribute("aria-checked", "true");

    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  it("includes checkbox and radio items in keyboard navigation", async () => {
    const user = userEvent.setup();

    render(<SelectionMenu />);

    await user.click(
      screen.getByRole("button", {
        name: "View options",
      }),
    );

    const checkboxItem = screen.getByRole("menuitemcheckbox", {
      name: "Show archived",
    });

    const comfortable = screen.getByRole("menuitemradio", {
      name: "Comfortable",
    });

    await waitFor(() => {
      expect(checkboxItem).toHaveFocus();
    });

    await user.keyboard("{ArrowDown}");

    await waitFor(() => {
      expect(comfortable).toHaveFocus();
    });
  });

  it("can close after checkbox selection when requested", async () => {
    const user = userEvent.setup();

    render(
      <Menu>
        <MenuTrigger>Open options</MenuTrigger>

        <MenuContent aria-label="Options">
          <MenuCheckboxItem
            textValue="Persistent filter"
            checked={false}
            keepOpenOnSelect={false}
          >
            Persistent filter
          </MenuCheckboxItem>
        </MenuContent>
      </Menu>,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Open options",
      }),
    );

    await user.click(
      screen.getByRole("menuitemcheckbox", {
        name: "Persistent filter",
      }),
    );

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });
});
