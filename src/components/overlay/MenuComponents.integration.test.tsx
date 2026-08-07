import { useState } from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from "./index";

const MenuFixture = () => {
  const [showInactive, setShowInactive] = useState(false);

  const [ordering, setOrdering] = useState("newest");

  return (
    <Menu>
      <MenuTrigger>Open participant options</MenuTrigger>

      <MenuContent aria-label="Participant options">
        <MenuItem textValue="Open participant">Open participant</MenuItem>

        <MenuCheckboxItem
          textValue="Show inactive"
          checked={showInactive}
          onCheckedChange={setShowInactive}
        >
          Show inactive
        </MenuCheckboxItem>

        <MenuRadioGroup value={ordering} onValueChange={setOrdering}>
          <MenuRadioItem textValue="Newest first" value="newest">
            Newest first
          </MenuRadioItem>

          <MenuRadioItem textValue="Oldest first" value="oldest">
            Oldest first
          </MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  );
};

describe("Menu family integration", () => {
  it("combines actions and stateful options in one keyboard model", async () => {
    const user = userEvent.setup();

    render(<MenuFixture />);

    await user.click(
      screen.getByRole("button", {
        name: "Open participant options",
      }),
    );

    const action = screen.getByRole("menuitem", {
      name: "Open participant",
    });

    const checkbox = screen.getByRole("menuitemcheckbox", {
      name: "Show inactive",
    });

    const newest = screen.getByRole("menuitemradio", {
      name: "Newest first",
    });

    await waitFor(() => {
      expect(action).toHaveFocus();
    });

    await user.keyboard("{ArrowDown}");

    expect(checkbox).toHaveFocus();

    await user.keyboard("{ArrowDown}");

    expect(newest).toHaveFocus();

    await user.keyboard("{ArrowDown}");

    expect(
      screen.getByRole("menuitemradio", {
        name: "Oldest first",
      }),
    ).toHaveFocus();
  });
});
