import type { Meta, StoryObj } from "@storybook/react-vite";

import { FormField } from "../form-field";
import { PasswordInput } from "./PasswordInput";

const meta = {
  title: "Forms/PasswordInput",
  component: PasswordInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "min(32rem, 100%)" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    "aria-label": "Password",
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Masukkan password",
  },
};

export const Filled: Story = {
  args: {
    defaultValue: "Password123",
  },
};

export const VisibleByDefault: Story = {
  args: {
    defaultValue: "Password123",
    defaultVisible: true,
  },
};

export const Invalid: Story = {
  args: {
    defaultValue: "123",
    invalid: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Password123",
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: "Password123",
  },
};

export const InFormField: Story = {
  args: {
    "aria-label": "Password",
  },
  render: () => (
    <FormField
      htmlFor="participant-password"
      label="Password"
      requirementMessage="Gunakan minimal 8 karakter dengan kombinasi huruf dan angka."
      required
    >
      <PasswordInput
        aria-describedby="participant-password-requirement"
        autoComplete="new-password"
        id="participant-password"
        name="password"
        required
      />
    </FormField>
  ),
};

export const InvalidInFormField: Story = {
  args: {
    "aria-label": "Konfirmasi Password",
  },
  render: () => (
    <FormField
      errorMessage="Konfirmasi password tidak sama."
      htmlFor="password-confirmation"
      invalid
      label="Konfirmasi Password"
      required
    >
      <PasswordInput
        aria-describedby="password-confirmation-error"
        autoComplete="new-password"
        defaultValue="Password12"
        id="password-confirmation"
        invalid
        name="passwordConfirmation"
        required
      />
    </FormField>
  ),
};

export const MobileStress: Story = {
  args: {
    placeholder: "Masukkan password akun Portal Penerimaan STIP",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobileStress",
    },
  },
};
