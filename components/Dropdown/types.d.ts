interface IDropdownItems {
  text: string;
  icon: string;
  href?: string;
}

export interface IDropdownProps {
  items: Array<IDropdownItems[]>;
}
