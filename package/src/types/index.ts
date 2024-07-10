import { Coord } from "./coord";
import { Direction } from "./direction";
import { OffsetLength } from "./offset";
import { Point } from "./point";
import { Size } from "./size";
import { Style, Styles } from "./style";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any;

export type OriginInLineStyleType = OffsetLength & Style;

export type ReStructInLineStyleType = Point & Style;

export type ReStructInLineStylesType = Point & Styles;

export type ElementRectType = Direction & Size & Coord;
