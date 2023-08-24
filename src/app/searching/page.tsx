import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Typography } from "@/shared/ui/typography";
import { Divider } from "@/shared/ui/divider";

export default function Home() {
  return (
    <>
      <Typography>
        <Typography.Title className={"-mt-1"}>Search</Typography.Title>
      </Typography>
    </>
  );
}
