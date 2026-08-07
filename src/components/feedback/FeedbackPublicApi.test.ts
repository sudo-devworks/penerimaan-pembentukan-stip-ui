import { describe, expect, it } from "vitest";

import * as Feedback from "./index";

describe("Feedback public API", () => {
  it("exports all public feedback components", () => {
    expect(Feedback.Alert).toBeDefined();
    expect(Feedback.InlineAlert).toBeDefined();

    expect(Feedback.LoadingIndicator).toBeDefined();
    expect(Feedback.LoadingMessage).toBeDefined();

    expect(Feedback.Skeleton).toBeDefined();
    expect(Feedback.SkeletonText).toBeDefined();
    expect(Feedback.SkeletonBlock).toBeDefined();

    expect(Feedback.ProgressIndicator).toBeDefined();

    expect(Feedback.EmptyState).toBeDefined();
    expect(Feedback.ErrorState).toBeDefined();
    expect(Feedback.SuccessState).toBeDefined();

    expect(Feedback.Toast).toBeDefined();
    expect(Feedback.ToastRegion).toBeDefined();

    expect(Feedback.FeedbackIcon).toBeDefined();
    expect(Feedback.getFeedbackAnnouncementAttributes).toBeDefined();
  });

  it("does not expose internal utility functions", () => {
    expect("joinFeedbackClassNames" in Feedback).toBe(false);
  });
});
