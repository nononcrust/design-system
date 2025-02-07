import { Grid } from "@/components/layouts/grid";
import { Dialog1 } from "./_components/dialog-1";
import { Dialog2 } from "./_components/dialog-2";
import { Dialog3 } from "./_components/dialog-3";

export default function DialogPage() {
  return (
    <Grid>
      <Grid.Item>
        <Dialog1 />
      </Grid.Item>
      <Grid.Item>
        <Dialog2 />
      </Grid.Item>
      <Grid.Item>
        <Dialog3 />
      </Grid.Item>
    </Grid>
  );
}
