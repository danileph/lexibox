import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Typography } from "@/shared/ui/typography";
import { Divider } from "@/shared/ui/divider";
import { Search } from "@/features/search";

export default function Home() {
  return (
    <div
      className={
        "min-h-[calc(100vh-56px-56px)] pb-20 flex flex-col items-center justify-center"
      }
    >
      <Typography.Title level={3} className={"mb-10"}>
        First you search then you learn
      </Typography.Title>
      <Search />
    </div>
  );
}
