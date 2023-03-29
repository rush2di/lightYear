export type categoryCardTheme = "blue" | "yellow" | "orange" | "indigo";

export interface ICategoryCardProps {
  count: number;
  title: string;
  theme: categoryCardTheme;
}
