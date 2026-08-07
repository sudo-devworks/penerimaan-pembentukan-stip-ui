import { describe, expect, it } from "vitest";

import * as compositePublicApi from "./index";

describe("Composite public API", () => {
  it("exports header components", () => {
    expect(compositePublicApi.PageHeader).toBeDefined();
    expect(compositePublicApi.SectionHeader).toBeDefined();
  });

  it("exports toolbar components", () => {
    expect(compositePublicApi.FilterToolbar).toBeDefined();
    expect(compositePublicApi.TableToolbar).toBeDefined();
    expect(compositePublicApi.BulkActionBar).toBeDefined();
  });

  it("exports summary components", () => {
    expect(compositePublicApi.DescriptionList).toBeDefined();
    expect(compositePublicApi.DescriptionListItem).toBeDefined();
    expect(compositePublicApi.StatGroup).toBeDefined();
    expect(compositePublicApi.StatItem).toBeDefined();
    expect(compositePublicApi.DetailSummary).toBeDefined();
  });

  it("exports content item components", () => {
    expect(compositePublicApi.ActivityItem).toBeDefined();
    expect(compositePublicApi.TimelineEvent).toBeDefined();
    expect(compositePublicApi.NotificationItem).toBeDefined();
    expect(compositePublicApi.FileItem).toBeDefined();
  });

  it("does not export story-only pattern components", () => {
    expect("CompositePatterns" in compositePublicApi).toBe(false);

    expect("CompositeCrossPortal" in compositePublicApi).toBe(false);
  });
});
