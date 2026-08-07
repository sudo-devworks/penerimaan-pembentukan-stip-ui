import { describe, expect, it } from "vitest";

import * as Navigation from "./index";

describe("Navigation public API", () => {
  it("exports all public navigation components", () => {
    expect(Navigation.Breadcrumb).toBeDefined();
    expect(Navigation.BreadcrumbItem).toBeDefined();
    expect(Navigation.BackNavigation).toBeDefined();
    expect(Navigation.SkipLink).toBeDefined();

    expect(Navigation.Tabs).toBeDefined();
    expect(Navigation.TabList).toBeDefined();
    expect(Navigation.Tab).toBeDefined();
    expect(Navigation.TabPanel).toBeDefined();

    expect(Navigation.Pagination).toBeDefined();

    expect(Navigation.Stepper).toBeDefined();
    expect(Navigation.StepperItem).toBeDefined();

    expect(Navigation.SideNavigation).toBeDefined();
    expect(Navigation.SideNavigationGroup).toBeDefined();
    expect(Navigation.SideNavigationItem).toBeDefined();

    expect(Navigation.TopNavigation).toBeDefined();
    expect(Navigation.TopNavigationItem).toBeDefined();

    expect(Navigation.BottomNavigation).toBeDefined();
    expect(Navigation.BottomNavigationItem).toBeDefined();
  });

  it("does not expose internal navigation utilities", () => {
    expect("joinNavigationClassNames" in Navigation).toBe(false);

    expect("TabsContext" in Navigation).toBe(false);

    expect("getPaginationItems" in Navigation).toBe(false);

    expect("clampPage" in Navigation).toBe(false);
  });
});
