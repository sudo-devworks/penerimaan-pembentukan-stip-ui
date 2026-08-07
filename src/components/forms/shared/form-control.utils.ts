import type { FormFieldMessageIds } from "./form-control.types";

export function joinClassNames(
  ...classNames: Array<string | false | null | undefined>
): string {
  return classNames.filter(Boolean).join(" ");
}

export function createFormFieldMessageIds(
  controlId?: string,
): FormFieldMessageIds {
  if (!controlId) {
    return {};
  }

  return {
    helperId: `${controlId}-helper`,
    requirementId: `${controlId}-requirement`,
    errorId: `${controlId}-error`,
    characterCountId: `${controlId}-count`,
  };
}

export function createDescribedBy(
  ids: Array<string | false | null | undefined>,
): string | undefined {
  const value = ids.filter(Boolean).join(" ");

  return value || undefined;
}
