"use client";

import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";

export const Dialog3 = () => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button variant="outlined">애니메이션 없음</Button>
      </Dialog.Trigger>
      <Dialog.Content className="w-[320px]" animation="none">
        <Dialog.Header>
          <Dialog.Title>과제를 제출할까요?</Dialog.Title>
          <Dialog.Description>제출한 과제는 수정할 수 없어요.</Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button className="w-full" size="large" variant="outlined">
              취소
            </Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button className="w-full" size="large">
              확인
            </Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};
