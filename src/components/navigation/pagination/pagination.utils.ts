import type { PaginationItem } from "./Pagination.types";

export const clampPage = (page: number, totalPages: number): number => {
  const safeTotalPages = Math.max(1, Math.floor(totalPages));

  return Math.min(Math.max(1, Math.floor(page)), safeTotalPages);
};

const createRange = (start: number, end: number): number[] => {
  if (end < start) {
    return [];
  }

  return Array.from(
    {
      length: end - start + 1,
    },
    (_, index) => start + index,
  );
};

export const getPaginationItems = ({
  page,
  totalPages,
  siblingCount,
  boundaryCount,
}: {
  page: number;
  totalPages: number;
  siblingCount: number;
  boundaryCount: number;
}): PaginationItem[] => {
  const safeTotalPages = Math.max(1, Math.floor(totalPages));
  const safePage = clampPage(page, safeTotalPages);

  const safeSiblingCount = Math.max(0, Math.floor(siblingCount));

  const safeBoundaryCount = Math.max(0, Math.floor(boundaryCount));

  const totalVisibleNumbers = safeBoundaryCount * 2 + safeSiblingCount * 2 + 3;

  if (safeTotalPages <= totalVisibleNumbers) {
    return createRange(1, safeTotalPages).map((itemPage) => ({
      type: "page",
      page: itemPage,
    }));
  }

  const startBoundary = createRange(
    1,
    Math.min(safeBoundaryCount, safeTotalPages),
  );

  const endBoundary = createRange(
    Math.max(safeTotalPages - safeBoundaryCount + 1, safeBoundaryCount + 1),
    safeTotalPages,
  );

  const siblingStart = Math.max(
    Math.min(
      safePage - safeSiblingCount,
      safeTotalPages - safeBoundaryCount - safeSiblingCount * 2 - 1,
    ),
    safeBoundaryCount + 2,
  );

  const siblingEnd = Math.min(
    Math.max(
      safePage + safeSiblingCount,
      safeBoundaryCount + safeSiblingCount * 2 + 2,
    ),
    endBoundary[0] - 2,
  );

  const items: PaginationItem[] = [];

  startBoundary.forEach((itemPage) => {
    items.push({
      type: "page",
      page: itemPage,
    });
  });

  if (siblingStart > safeBoundaryCount + 2) {
    items.push({
      type: "ellipsis",
      key: "start-ellipsis",
    });
  } else if (safeBoundaryCount + 1 < safeTotalPages - safeBoundaryCount) {
    items.push({
      type: "page",
      page: safeBoundaryCount + 1,
    });
  }

  createRange(siblingStart, siblingEnd).forEach((itemPage) => {
    items.push({
      type: "page",
      page: itemPage,
    });
  });

  if (siblingEnd < safeTotalPages - safeBoundaryCount - 1) {
    items.push({
      type: "ellipsis",
      key: "end-ellipsis",
    });
  } else if (safeTotalPages - safeBoundaryCount > safeBoundaryCount) {
    items.push({
      type: "page",
      page: safeTotalPages - safeBoundaryCount,
    });
  }

  endBoundary.forEach((itemPage) => {
    if (!items.some((item) => item.type === "page" && item.page === itemPage)) {
      items.push({
        type: "page",
        page: itemPage,
      });
    }
  });

  return items;
};
