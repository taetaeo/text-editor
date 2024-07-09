import { Coord } from "./coord";
import { Direction } from "./direction";
import { Size } from "./size";

export type OriginInLineStyleType = {
  offset: number;
  length: number;
  style: string;
};

export type ReStructInLineStyleType = {
  start: number;
  end: number;
  style: string;
};

export type ReStructInLineStylesType = {
  start: number;
  end: number;
  styles: string[];
};

export type ElementRectType = Direction & Size & Coord;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any;
