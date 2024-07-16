import type { DraftBlockType, DraftInlineStyle } from "draft-js";
import * as React from "react";

import type { ColorStyle } from "../configs/editor.config";

type ButtonLabel = {
  bold?: string;
  italic?: string;
  underline?: string;
  color: ColorStyle;
  ["list-number"]?: string;
  ["list-bullet"]?: string;
  ["align-left"]: string;
  ["align-right"]: string;
  ["align-center"]: string;
  ["align-justify"]: string;
};

interface Props {
  toggleInlineStyle: (inlineStyle: DraftInlineStyle | string) => void;
  toggleBlockType: (blockType: DraftBlockType) => void;
  label?: ButtonLabel;
}

const ToolbarView: React.FC<React.PropsWithChildren<Props>> = ({ toggleInlineStyle, toggleBlockType, label = {} }) => {
  return (
    <div className="text-Editor-toolbar">
      <div className="text-Editor-toolbar-flex">
        {/* bold button*/}
        {label["bold"] && <button onClick={() => toggleInlineStyle("BOLD")}>{label["bold"]}</button>}

        {/* italic button */}
        {label["italic"] && <button onClick={() => toggleInlineStyle("ITALIC")}>{label["italic"]}</button>}

        {/* under line button*/}
        {label["underline"] && <button onClick={() => toggleInlineStyle("UNDERLINE")}>{label["underline"]}</button>}
      </div>

      <div className="text-Editor-toolbar-flex">
        {/* Bullet list button */}
        {label["list-bullet"] && <button onClick={() => toggleBlockType("unordered-list-item")}>{label["list-bullet"]}</button>}

        {/* order list button */}
        {label["list-number"] && <button onClick={() => toggleBlockType("ordered-list-item")}>{label["list-number"]}</button>}
      </div>

      <div className="text-Editor-toolbar-flex">
        <button onClick={() => toggleInlineStyle("STRIKETHROUGH")}>Strikethrough</button>
        <button onClick={() => toggleInlineStyle("CODE")}>Code</button>
      </div>

      <div className="text-Editor-toolbar-flex">
        <button onClick={() => toggleInlineStyle("RED")}>Red</button>
        <button onClick={() => toggleInlineStyle("BLUE")}>Blue</button>
        <button onClick={() => toggleInlineStyle("GREEN")}>Green</button>
      </div>
      <div className="text-Editor-toolbar-flex">
        <button onClick={() => toggleInlineStyle("SIZE_12")}>Font Size 12</button>
        <button onClick={() => toggleInlineStyle("SIZE_16")}>Font Size 16</button>
        <button onClick={() => toggleInlineStyle("SIZE_20")}>Font Size 20</button>
      </div>
      <div className="text-Editor-toolbar-flex">
        {/* align-left button */}
        {label["align-left"] && <button onClick={() => toggleBlockType("left")}>{label["align-left"]}</button>}

        {/* align-center button */}
        {label["align-center"] && <button onClick={() => toggleBlockType("center")}>{label["align-center"]}</button>}

        {/* align-right button */}
        {label["align-right"] && <button onClick={() => toggleBlockType("right")}>{label["align-right"]}</button>}

        {/* align-justify button */}
        {label["align-justify"] && <button onClick={() => toggleBlockType("justify")}>{label["align-justify"]}</button>}
      </div>
    </div>
  );
};

export default ToolbarView;
