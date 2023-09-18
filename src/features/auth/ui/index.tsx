"use client";
import React, { FC, useState } from "react";
import { Modal } from "@/shared/ui/modal";
import { Typography } from "@/shared/ui/typography";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Divider } from "@/shared/ui/divider";
import { Toggle } from "@/features/auth/ui/toggle";

interface IAuthModalProps extends React.HTMLAttributes<HTMLElement> {}

export const AuthModal: FC<IAuthModalProps> = () => {
  const [toggle, setToggle] = useState<"login" | "signup" | null>(null);

  return (
    <Modal
      trigger={(setIsOpen) => (
        <Button size={"large"} onClick={() => setIsOpen(true)}>
          Open Dialog
        </Button>
      )}
      label={"Open a modal"}
      header={
        <>
          <Typography.Title className={"text-center mb-3 mt-4"} level={2}>
            {toggle === "login" ? "Log in" : "Sign up"}
          </Typography.Title>
          <div className={"flex justify-center mb-10"}>
            <Toggle
              labels={{ left: "Log in", right: "Sign up" }}
              onChange={(value) =>
                setToggle(value === "left" ? "login" : "signup")
              }
            />
          </div>
        </>
      }
    >
      {(close) => (
        <div className={"w-[300px]"}>
          <div className={"space-y-3"}>
            <Input
              placeholder={toggle === "login" ? "Email or username" : "Email"}
              withLabel
              fullWidth
              size={"large"}
            />
            <Input
              placeholder={"Password"}
              withLabel
              type={"password"}
              size={"large"}
              fullWidth
            />
            {toggle === "signup" && (
              <Input
                placeholder={"Confirm password"}
                withLabel
                type={"password"}
                size={"large"}
                fullWidth
              />
            )}
          </div>
          <Button
            size={"large"}
            variant={"primary"}
            fullWidth
            className={"!mt-6"}
          >
            {toggle === "login" ? "Log In" : "Sign Up"}
          </Button>
          <Divider variant={"secondary"}>Or</Divider>
          <div className={"flex justify-between space-x-2 !mb-8 "}>
            <Button size={"large"} fullWidth>
              Google
            </Button>
            <Button size={"large"} fullWidth>
              VK
            </Button>
          </div>
          <Typography.Paragraph
            variant={"secondary"}
            size={"extra-small"}
            className={"text-center"}
          >
            By signing in to Lexibox, you agree to our Terms and Privacy Policy.
          </Typography.Paragraph>
          <Typography.Paragraph
            variant={"secondary"}
            size={"extra-small"}
            className={"text-center -mb-1"}
          >
            This site is protected by reCAPTCHA Enterprise and the Google
            Privacy Policy and Terms of Service apply.
          </Typography.Paragraph>
        </div>
      )}
    </Modal>
  );
};
