import { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Tab, TabList, TabPanel, Tabs } from "./index";

const ControlledTabs = ({
  activationMode = "automatic",
}: {
  activationMode?: "automatic" | "manual";
}) => {
  const [value, setValue] = useState("summary");

  return (
    <Tabs
      value={value}
      onValueChange={setValue}
      activationMode={activationMode}
    >
      <TabList aria-label="Detail peserta">
        <Tab value="summary">Ringkasan</Tab>

        <Tab value="profile">Biodata</Tab>

        <Tab value="documents" disabled>
          Dokumen
        </Tab>
      </TabList>

      <TabPanel value="summary">Isi ringkasan</TabPanel>

      <TabPanel value="profile">Isi biodata</TabPanel>

      <TabPanel value="documents">Isi dokumen</TabPanel>
    </Tabs>
  );
};

describe("Tabs", () => {
  it("renders complete tab semantics", () => {
    render(<ControlledTabs />);

    const tabList = screen.getByRole("tablist", {
      name: "Detail peserta",
    });

    const summaryTab = screen.getByRole("tab", {
      name: "Ringkasan",
    });

    const panel = screen.getByRole("tabpanel");

    expect(tabList).toHaveAttribute("aria-orientation", "horizontal");

    expect(summaryTab).toHaveAttribute("aria-selected", "true");

    expect(summaryTab).toHaveAttribute("aria-controls", panel.id);

    expect(panel).toHaveAttribute("aria-labelledby", summaryTab.id);
  });

  it("changes selected tab through click", () => {
    render(<ControlledTabs />);

    fireEvent.click(
      screen.getByRole("tab", {
        name: "Biodata",
      }),
    );

    expect(
      screen.getByRole("tab", {
        name: "Biodata",
      }),
    ).toHaveAttribute("aria-selected", "true");

    expect(screen.getByText("Isi biodata")).toBeInTheDocument();

    expect(screen.queryByText("Isi ringkasan")).not.toBeInTheDocument();
  });

  it("skips disabled tabs during automatic keyboard navigation", () => {
    render(<ControlledTabs />);

    const summaryTab = screen.getByRole("tab", {
      name: "Ringkasan",
    });

    summaryTab.focus();

    fireEvent.keyDown(summaryTab, {
      key: "ArrowLeft",
    });

    expect(
      screen.getByRole("tab", {
        name: "Biodata",
      }),
    ).toHaveFocus();

    expect(
      screen.getByRole("tab", {
        name: "Biodata",
      }),
    ).toHaveAttribute("aria-selected", "true");
  });

  it("supports Home and End keyboard navigation", () => {
    render(<ControlledTabs />);

    const summaryTab = screen.getByRole("tab", {
      name: "Ringkasan",
    });

    summaryTab.focus();

    fireEvent.keyDown(summaryTab, {
      key: "End",
    });

    expect(
      screen.getByRole("tab", {
        name: "Biodata",
      }),
    ).toHaveFocus();

    fireEvent.keyDown(
      screen.getByRole("tab", {
        name: "Biodata",
      }),
      {
        key: "Home",
      },
    );

    expect(summaryTab).toHaveFocus();
  });

  it("uses manual activation when configured", () => {
    render(<ControlledTabs activationMode="manual" />);

    const summaryTab = screen.getByRole("tab", {
      name: "Ringkasan",
    });

    const profileTab = screen.getByRole("tab", {
      name: "Biodata",
    });

    summaryTab.focus();

    fireEvent.keyDown(summaryTab, {
      key: "ArrowRight",
    });

    expect(profileTab).toHaveFocus();
    expect(profileTab).toHaveAttribute("aria-selected", "false");

    fireEvent.keyDown(profileTab, {
      key: "Enter",
    });

    expect(profileTab).toHaveAttribute("aria-selected", "true");
  });

  it("supports Space in manual activation", () => {
    render(<ControlledTabs activationMode="manual" />);

    const profileTab = screen.getByRole("tab", {
      name: "Biodata",
    });

    profileTab.focus();

    fireEvent.keyDown(profileTab, {
      key: " ",
    });

    expect(profileTab).toHaveAttribute("aria-selected", "true");
  });

  it("does not activate disabled tab", () => {
    const onValueChange = vi.fn();

    render(
      <Tabs value="summary" onValueChange={onValueChange}>
        <TabList aria-label="Tab">
          <Tab value="summary">Ringkasan</Tab>

          <Tab value="documents" disabled>
            Dokumen
          </Tab>
        </TabList>

        <TabPanel value="summary">Ringkasan</TabPanel>
      </Tabs>,
    );

    fireEvent.click(
      screen.getByRole("tab", {
        name: "Dokumen",
      }),
    );

    expect(onValueChange).not.toHaveBeenCalled();
  });

  it("supports vertical orientation", () => {
    render(
      <Tabs
        value="summary"
        onValueChange={() => undefined}
        orientation="vertical"
      >
        <TabList aria-label="Detail">
          <Tab value="summary">Ringkasan</Tab>
        </TabList>

        <TabPanel value="summary">Isi</TabPanel>
      </Tabs>,
    );

    expect(screen.getByRole("tablist")).toHaveAttribute(
      "aria-orientation",
      "vertical",
    );
  });

  it("keeps inactive panel mounted when forceMount is enabled", () => {
    render(
      <Tabs value="summary" onValueChange={() => undefined}>
        <TabList aria-label="Detail">
          <Tab value="summary">Ringkasan</Tab>

          <Tab value="profile">Biodata</Tab>
        </TabList>

        <TabPanel value="summary">Isi ringkasan</TabPanel>

        <TabPanel value="profile" forceMount data-testid="profile-panel">
          Isi biodata
        </TabPanel>
      </Tabs>,
    );

    expect(screen.getByTestId("profile-panel")).toHaveAttribute("hidden");
  });

  it("requires Tabs composition context", () => {
    expect(() => render(<Tab value="summary">Ringkasan</Tab>)).toThrow(
      "Tabs components must be rendered inside <Tabs>.",
    );
  });
});
