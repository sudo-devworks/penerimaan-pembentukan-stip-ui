import { describe, expect, it } from "vitest";

import {
  findPublicActivity,
  findPublicProgram,
  getActivityPrograms,
  publicActivities,
  publicPrograms,
} from "./publicCatalog";

describe("public catalog", () => {
  it("uses unique activity slugs", () => {
    const slugs = publicActivities.map((activity) => activity.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("uses unique program slugs", () => {
    const slugs = publicPrograms.map((program) => program.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("references existing programs from every activity", () => {
    for (const activity of publicActivities) {
      for (const activityProgram of activity.programs) {
        expect(
          findPublicProgram(activityProgram.programSlug),
        ).toBeDefined();
      }
    }
  });

  it("maps activity programs with quota and availability", () => {
    const activity = findPublicActivity(
      "diklat-pembentukan-cma-cgm-2026",
    );

    expect(activity).toBeDefined();

    if (!activity) {
      throw new Error("Expected the CMA CGM activity to exist.");
    }

    const programs = getActivityPrograms(activity);

    expect(programs).toHaveLength(3);
    expect(programs[0]).toMatchObject({
      slug: "nautika",
      quota: 30,
      availabilityLabel: "Tersedia",
    });
  });

  it("returns undefined for unknown slugs", () => {
    expect(findPublicActivity("tidak-tersedia")).toBeUndefined();
    expect(findPublicProgram("tidak-tersedia")).toBeUndefined();
  });
});