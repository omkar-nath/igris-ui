import { blue } from "./blue";
import { green } from "./green";
import { magenta } from "./magenta";
import { purple } from "./purple";
import { red } from "./red";
import { gray } from "./gray";
import { yellow } from "./yellow";
import { cyan } from "./cyan";

type ColorShades = {
    [key: string]: string;
};

type ColorPalette = {
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
    cyan,
};

export type DefaultColors = typeof defaultColors;
