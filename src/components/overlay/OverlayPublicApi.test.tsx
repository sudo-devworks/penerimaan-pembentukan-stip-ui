import { describe, expect, it } from "vitest";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuTrigger,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "../index";

describe("Overlay public API", () => {
  it("exports the complete Dialog family", () => {
    expect(Dialog).toBeDefined();
    expect(DialogTrigger).toBeDefined();
    expect(DialogContent).toBeDefined();
    expect(DialogHeader).toBeDefined();
    expect(DialogTitle).toBeDefined();
    expect(DialogDescription).toBeDefined();
    expect(DialogBody).toBeDefined();
    expect(DialogFooter).toBeDefined();
    expect(DialogClose).toBeDefined();
  });

  it("exports the complete AlertDialog family", () => {
    expect(AlertDialog).toBeDefined();
    expect(AlertDialogTrigger).toBeDefined();
    expect(AlertDialogContent).toBeDefined();
    expect(AlertDialogHeader).toBeDefined();
    expect(AlertDialogTitle).toBeDefined();
    expect(AlertDialogDescription).toBeDefined();
    expect(AlertDialogFooter).toBeDefined();
    expect(AlertDialogCancel).toBeDefined();
  });

  it("exports the complete Drawer family", () => {
    expect(Drawer).toBeDefined();
    expect(DrawerTrigger).toBeDefined();
    expect(DrawerContent).toBeDefined();
    expect(DrawerHeader).toBeDefined();
    expect(DrawerTitle).toBeDefined();
    expect(DrawerDescription).toBeDefined();
    expect(DrawerBody).toBeDefined();
    expect(DrawerFooter).toBeDefined();
    expect(DrawerClose).toBeDefined();
  });

  it("exports Popover and Tooltip families", () => {
    expect(Popover).toBeDefined();
    expect(PopoverTrigger).toBeDefined();
    expect(PopoverContent).toBeDefined();
    expect(PopoverArrow).toBeDefined();

    expect(Tooltip).toBeDefined();
    expect(TooltipTrigger).toBeDefined();
    expect(TooltipContent).toBeDefined();
    expect(TooltipArrow).toBeDefined();
  });

  it("exports the complete Menu family", () => {
    expect(Menu).toBeDefined();
    expect(MenuTrigger).toBeDefined();
    expect(MenuContent).toBeDefined();
    expect(MenuItem).toBeDefined();
    expect(MenuCheckboxItem).toBeDefined();
    expect(MenuRadioGroup).toBeDefined();
    expect(MenuRadioItem).toBeDefined();
    expect(MenuGroup).toBeDefined();
    expect(MenuGroupLabel).toBeDefined();
    expect(MenuSeparator).toBeDefined();
  });
});
