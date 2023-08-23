import { FC } from "react";
import { Paragraph } from "@/shared/ui/typography/ui/paragraph";
import { Article } from "@/shared/ui/typography/ui/article";
import { Title } from "@/shared/ui/typography/ui/title";
import { Link } from "@/shared/ui/typography/ui/link";

interface ITypographyProps extends React.HTMLAttributes<HTMLElement> {}

interface ITypographyCompound {
  Paragraph: typeof Paragraph;
  Article: typeof Article;
  Title: typeof Title;
  Link: typeof Link;
}

const Typography: FC<React.ComponentProps<typeof Article>> &
  ITypographyCompound = (props) => <Article {...props} />;

Typography.Paragraph = Paragraph;
Typography.Article = Article;
Typography.Title = Title;
Typography.Link = Link;

export { Typography };
