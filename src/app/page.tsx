import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Typography } from "@/shared/ui/typography";
import { Divider } from "@/shared/ui/divider";
import { Modal } from "@/shared/ui/modal";
import { AuthModal } from "@/features/auth";

export default function Home() {
  return (
    <>
      <div>
        {/*<Typography>*/}
        {/*  <Typography.Title className={"-mt-1"}>Introduction</Typography.Title>*/}
        {/*  <Typography.Paragraph>*/}
        {/*    In the process of internal desktop applications{" "}*/}
        {/*    <Typography.Link href={"/"} variant={"secondary"}>*/}
        {/*      development*/}
        {/*    </Typography.Link>*/}
        {/*    , many different design specs and implementations would be involved,*/}
        {/*    which might cause designers and developers difficulties and*/}
        {/*    duplication and reduce the efficiency of development.*/}
        {/*  </Typography.Paragraph>*/}
        {/*  <Divider />*/}
        {/*  <Typography.Paragraph>*/}
        {/*    After massive project practice and summaries, Ant Design, a design*/}
        {/*    language for background applications, is refined by Ant UED Team,*/}
        {/*    which aims to uniform the user interface specs for internal*/}
        {/*    background projects, lower the unnecessary cost of design*/}
        {/*    differences and implementation and liberate the resources of design*/}
        {/*    and front-end development.*/}
        {/*  </Typography.Paragraph>*/}
        {/*</Typography>*/}
      </div>
      <div className={"flex space-x-4 items-end"}>
        <Input size={"large"} placeholder={"Type something..."} withLabel />
        <Button size={"large"}>Ok</Button>
        <AuthModal />
      </div>
    </>
  );
}
