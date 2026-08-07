export type FeedbackSeverity =
  "info" | "success" | "warning" | "danger" | "neutral";

export type FeedbackAnnouncement = "none" | "polite" | "assertive";

export type FeedbackSize = "sm" | "md" | "lg";

export interface FeedbackAnnouncementAttributes {
  role?: "status" | "alert";
  "aria-live"?: "polite" | "assertive";
  "aria-atomic"?: true;
}
