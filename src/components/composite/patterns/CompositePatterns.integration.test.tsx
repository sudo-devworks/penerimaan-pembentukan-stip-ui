import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Button } from "../../actions/button";
import { EmptyState } from "../../feedback/empty-state";
import { ErrorState } from "../../feedback/error-state";
import { LoadingMessage } from "../../feedback/loading-message";
import { SearchInput } from "../../forms/search-input";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../overlay/alert-dialog";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../overlay/drawer";
import { FilterToolbar } from "../filter-toolbar";

describe("Composite patterns", () => {
  it("composes search with a responsive filter drawer", async () => {
    const user = userEvent.setup();

    render(
      <FilterToolbar
        mobileFilterTrigger={
          <Drawer>
            <DrawerTrigger variant="outline">Buka Filter</DrawerTrigger>

            <DrawerContent placement="bottom">
              <DrawerHeader>
                <DrawerTitle>Filter peserta</DrawerTitle>
              </DrawerHeader>

              <DrawerBody>Konten filter</DrawerBody>

              <DrawerFooter>
                <DrawerClose variant="outline">Batal</DrawerClose>

                <Button>Terapkan Filter</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        }
        resultsSummary="128 peserta ditemukan"
        search={
          <SearchInput aria-label="Cari peserta" placeholder="Cari peserta" />
        }
      />,
    );

    expect(
      screen.getByRole("searchbox", {
        name: "Cari peserta",
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("128 peserta ditemukan")).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: "Buka Filter",
      }),
    );

    expect(
      screen.getByRole("dialog", {
        name: "Filter peserta",
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("Konten filter")).toBeInTheDocument();
  });

  it("composes empty and error states with existing actions", () => {
    render(
      <>
        <EmptyState
          description="Belum ada data."
          primaryAction={<Button>Tambah Data</Button>}
          title="Data kosong"
        />

        <ErrorState
          description="Data gagal dimuat."
          primaryAction={<Button>Coba Lagi</Button>}
          title="Terjadi kesalahan"
        />
      </>,
    );

    expect(screen.getByText("Data kosong")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Tambah Data",
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("Terjadi kesalahan")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Coba Lagi",
      }),
    ).toBeInTheDocument();
  });

  it("composes a loading announcement", () => {
    render(
      <LoadingMessage
        announcement="polite"
        description="Mohon tunggu."
        title="Memuat data"
      />,
    );

    expect(screen.getByText("Memuat data")).toBeInTheDocument();
    expect(screen.getByText("Mohon tunggu.")).toBeInTheDocument();
  });

  it("composes a destructive confirmation flow", async () => {
    const user = userEvent.setup();

    render(
      <AlertDialog>
        <AlertDialogTrigger variant="destructive">
          Hapus Data
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hapus data ini?</AlertDialogTitle>

            <AlertDialogDescription>
              Data tidak dapat dipulihkan.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel variant="outline">Batal</AlertDialogCancel>

            <Button variant="destructive">Hapus Permanen</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Hapus Data",
      }),
    );

    expect(
      screen.getByRole("alertdialog", {
        name: "Hapus data ini?",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Hapus Permanen",
      }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: "Batal",
      }),
    );

    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();
  });
});
