import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export default function Home() {
  return (
    <div className={"flex space-x-4 items-end"}>
      <Input size={"large"} placeholder={"Type something..."} withLabel />
      <Button size={"large"}>Ok</Button>
    </div>
  );
}
