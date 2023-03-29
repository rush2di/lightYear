import { ReactNode } from "react";

export type dashSectionHeadingLevel = "h2" | "h3" | "h4" | "h5" | "h6";

export interface IDashSectionProps {
  headingLevel?: dashSectionHeadingLevel;
  dropdown: ReactNode;
  children: ReactNode;
  title: string;
}
