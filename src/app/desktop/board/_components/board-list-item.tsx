import { Chip } from "@/components/ui/chip";

type BoardListItemProps = {
  title: string;
  content: string;
};

export const BoardListItem = ({ title, content }: BoardListItemProps) => {
  return (
    <li className="list-none">
      <button className="flex flex-col p-4 py-3 hover:bg-background-hover">
        <span className="text-left">
          <Chip className="mr-2 rounded-full">모집중</Chip>
          <span className="align-middle font-semibold">{title}</span>
        </span>
        <div className="mt-1 text-left text-sm text-sub">{content}</div>
        <div className="mt-4 flex">
          <span className="text-[13px] text-subtle">다온미로 15시간 전</span>
        </div>
      </button>
    </li>
  );
};
