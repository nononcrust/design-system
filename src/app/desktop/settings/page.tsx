"use client";

import profileImage from "@/assets/images/nonon.png";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { Divider } from "@/components/ui/divider";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tooltip } from "@/components/ui/tooltip";
import { ArrowUpRightIcon, ChevronRightIcon, CircleHelpIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function SettingsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl py-16">
      <h2 className="text-lg font-semibold">프로필</h2>
      <Divider className="my-3" />
      <div className="flex pt-2">
        <Avatar className="size-24">
          <Avatar.Image src={profileImage.src} />
          <Avatar.Fallback>N</Avatar.Fallback>
        </Avatar>
      </div>
      <h2 className="mt-8 text-lg font-semibold">테마</h2>
      <Divider className="my-3" />
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium">테마 변경</span>
          <span className="text-xs text-sub">
            밝은 테마, 어두운 테마, 시스템 설정 중에서 선택하세요.
          </span>
        </div>
        <ThemeSelect />
      </div>
      <h2 className="mt-8 text-lg font-semibold">계정 보안</h2>
      <Divider className="my-3" />
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">이메일</span>
            <span className="text-xs text-sub">nononcrust@gmail.com</span>
          </div>
          <Button size="small" variant="outlined">
            이메일 변경
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">비밀번호</span>
            <span className="text-xs text-sub">
              계정 로그인에 사용할 영구 비밀번호를 설정하세요.
            </span>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">2단계 인증</span>
            <span className="text-xs text-sub">로그인 단계에서 계정 보안 방식을 추가하세요.</span>
          </div>
          <Button size="small" variant="outlined">
            인증 방법 추가
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-error">내 계정 삭제</span>
            <span className="text-xs text-sub">
              계정을 영구적으로 삭제하고 모든 워크스페이스에서 액세스 권한을 제거합니다.
            </span>
          </div>
          <ChevronRightIcon size={16} className="text-sub" />
        </div>
      </div>

      <h2 className="mt-8 flex items-center gap-2 text-lg font-semibold">
        기기
        <Tooltip content="모든 기기가 로그인 되어있습니다.">
          <CircleHelpIcon size={16} className="text-subtle" />
        </Tooltip>
      </h2>
      <Divider className="my-3" />
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">모든 기기에서 로그아웃</span>
            <span className="text-xs text-sub">
              이 기기 외에 다른 기기의 모든 활성 세션에서 로그아웃합니다.
            </span>
          </div>
          <Button size="small" variant="outlined">
            모든 기기에서 로그아웃
          </Button>
        </div>
      </div>
      <h2 className="mt-8 flex items-center gap-2 text-lg font-semibold">워크스페이스</h2>
      <Divider className="my-3" />
      <div className="flex flex-col gap-6">
        <Form.Item className="flex flex-col">
          <Form.Label>이름</Form.Label>
          <Input placeholder="예: 회사 이름" />
          <Form.Description>
            조직이나 회사 이름을 사용할 수 있습니다. 간단한 이름을 사용하세요.
          </Form.Description>
        </Form.Item>
      </div>
      <h2 className="mt-8 flex items-center gap-2 text-lg font-semibold">공개 설정</h2>
      <Divider className="my-3" />
      <div className="flex flex-col gap-6">
        <Form.Item className="flex flex-col">
          <Form.Label>허용된 이메일 도메인</Form.Label>
          <Input placeholder="이메일 도메인을 입력하세요" />
          <Form.Description>
            이 도메인의 이메일 주소를 가진 사람은 모두 자동으로 워크스페이스에 참여할 수 있습니다.
          </Form.Description>
        </Form.Item>
      </div>
      <div className="mt-6 flex justify-end gap-2">
        <Button>변경</Button>
        <Button variant="outlined">취소</Button>
      </div>
      <div>
        <h3 className="flex items-center gap-2 text-sm font-medium">
          멤버 목록 내보내기
          <Chip variant="info">
            비즈니스
            <ArrowUpRightIcon className="ml-1" size={12} />
          </Chip>
        </h3>
        <Button className="mt-3" variant="outlined">
          멤버 목록 CSV로 내보내기
        </Button>
      </div>
      <Button className="mt-2 -translate-x-3 text-subtle" variant="ghost">
        <CircleHelpIcon size={16} className="text-subtle" />
        멤버 목록 내보내기에 대해 자세히 알아보세요.
      </Button>
      <Divider className="my-3" />
      <h3 className="text-sm font-medium">위험 구역</h3>
      <Button variant="outlined" className="mt-3 border-error text-error">
        워크스페이스 삭제
      </Button>
    </main>
  );
}

const ThemeSelect = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Select className="w-[116px]" value={theme} onChange={setTheme}>
      <Select.Content>
        <Select.Option value="light">밝은 테마</Select.Option>
        <Select.Option value="dark">어두운 테마</Select.Option>
        <Select.Option value="system">시스템 설정</Select.Option>
      </Select.Content>
    </Select>
  );
};