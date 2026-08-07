import type {
  FeedbackAnnouncement,
  FeedbackAnnouncementAttributes,
} from "./feedback.types";

export const joinFeedbackClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

export const getFeedbackAnnouncementAttributes = (
  announcement: FeedbackAnnouncement,
): FeedbackAnnouncementAttributes => {
  switch (announcement) {
    case "polite":
      return {
        role: "status",
        "aria-live": "polite",
        "aria-atomic": true,
      };

    case "assertive":
      return {
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": true,
      };

    case "none":
    default:
      return {};
  }
};
