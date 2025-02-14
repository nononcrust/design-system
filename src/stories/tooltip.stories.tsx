import { IconButton } from "@/components/ui/icon-button";
import { Tooltip } from "@/components/ui/tooltip";
import type { Meta, StoryObj } from "@storybook/react";
import { SearchIcon } from "lucide-react";

const meta = {
  title: "components/Tooltip",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Tooltip content="툴팁 메시지">
        <IconButton aria-label="검색" variant="outlined" size="small">
          <SearchIcon size={16} />
        </IconButton>
      </Tooltip>
    );
  },
};

export const Outlined: Story = {
  render: () => {
    return (
      <Tooltip content="툴팁 메시지" variant="outlined">
        <IconButton aria-label="검색" variant="outlined" size="small">
          <SearchIcon size={16} />
        </IconButton>
      </Tooltip>
    );
  },
};
