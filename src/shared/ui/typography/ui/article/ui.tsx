import { FC } from "react";

interface IArticleProps extends React.HTMLAttributes<HTMLElement> {}

export const Article: FC<IArticleProps> = (props) => {
  return <article {...props} />;
};
