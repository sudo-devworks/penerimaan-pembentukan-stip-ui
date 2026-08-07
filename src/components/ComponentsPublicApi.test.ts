import { describe, expect, it } from "vitest";

import * as componentsPublicApi from "./index";

describe("Components root public API", () => {
  it("exports action components", () => {
    expect(componentsPublicApi.Button).toBeDefined();
    expect(componentsPublicApi.IconButton).toBeDefined();
    expect(componentsPublicApi.ButtonGroup).toBeDefined();
  });

  it("exports feedback components", () => {
    expect(componentsPublicApi.Alert).toBeDefined();
    expect(componentsPublicApi.EmptyState).toBeDefined();
    expect(componentsPublicApi.ErrorState).toBeDefined();
    expect(componentsPublicApi.LoadingMessage).toBeDefined();
  });

  it("exports form components", () => {
    expect(componentsPublicApi.TextInput).toBeDefined();
    expect(componentsPublicApi.SearchInput).toBeDefined();
    expect(componentsPublicApi.Select).toBeDefined();
    expect(componentsPublicApi.FormSection).toBeDefined();
  });

  it("exports navigation components", () => {
    expect(componentsPublicApi.Breadcrumb).toBeDefined();
    expect(componentsPublicApi.Tabs).toBeDefined();
    expect(componentsPublicApi.Pagination).toBeDefined();
    expect(componentsPublicApi.Stepper).toBeDefined();
  });

  it("exports overlay components", () => {
    expect(componentsPublicApi.Dialog).toBeDefined();
    expect(componentsPublicApi.Drawer).toBeDefined();
    expect(componentsPublicApi.Popover).toBeDefined();
    expect(componentsPublicApi.Tooltip).toBeDefined();
    expect(componentsPublicApi.Menu).toBeDefined();
  });

  it("exports composite components", () => {
    expect(componentsPublicApi.PageHeader).toBeDefined();
    expect(componentsPublicApi.FilterToolbar).toBeDefined();
    expect(componentsPublicApi.DescriptionList).toBeDefined();
    expect(componentsPublicApi.TimelineEvent).toBeDefined();
    expect(componentsPublicApi.FileItem).toBeDefined();
  });
});
