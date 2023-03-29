import { IconlyIconName } from "helpers/constants/common";
import { categoryCardTheme } from "./types";

const themeToIconName = (theme: categoryCardTheme) => {
  switch (theme) {
    case "blue":
      return IconlyIconName.HEART;
    case "yellow":
      return IconlyIconName.GAME;
    case "orange":
      return IconlyIconName.BAG;
    case "indigo":
      return IconlyIconName.WORK;
    default:
      return IconlyIconName.HEART;
  }
};

export { themeToIconName };
