import { blue } from "./blue";
import { green } from "./green";
import { magenta } from "./magenta";
import { purple } from "./purple";
import { red } from "./red";
import { gray } from "./gray";
import { yellow } from "./yellow";
import { cyan } from "./cyan";
import { orange } from "./orange";
import { teal } from "./teal";
// Color tone is the key and value is the HEX code
type ColorShades = {
  [key: string]: string;
};

export type ColorPalette = {
  [key: string]: ColorShades;
};

export const defaultColors: ColorPalette = {
  blue,
  green,
  magenta,
  purple,
  red,
  gray,
  yellow,
  orange,
  cyan,
  teal,
};

export type DefaultColors = typeof defaultColors;
