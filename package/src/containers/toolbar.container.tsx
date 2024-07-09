import type { DraftBlockType, DraftInlineStyle } from "draft-js";
import * as React from "react";

interface Props {
  toggleInlineStyle: (inlineStyle: DraftInlineStyle | string) => void;
  toggleBlockType: (blockType: DraftBlockType) => void;
}

const ToolbarContainer: React.FC<React.PropsWithChildren<Props>> = ({ toggleInlineStyle, toggleBlockType }) => {
  return (
    <div className="toolbar">
      <div>
        <button onClick={() => toggleInlineStyle("BOLD")}>굵기</button>
        <button onClick={() => toggleInlineStyle("ITALIC")}>기울림</button>
        <button onClick={() => toggleInlineStyle("UNDERLINE")}>밑줄</button>
      </div>
      <div>
        <button onClick={() => toggleBlockType("unordered-list-item")}>Bullet List</button>
        <button onClick={() => toggleBlockType("ordered-list-item")}>Numbered List</button>
      </div>
      <div>
        <button onClick={() => toggleInlineStyle("STRIKETHROUGH")}>Strikethrough</button>
        <button onClick={() => toggleInlineStyle("CODE")}>Code</button>
      </div>
      <div>
        <button onClick={() => toggleInlineStyle("RED")}>Red</button>
        <button onClick={() => toggleInlineStyle("BLUE")}>Blue</button>
        <button onClick={() => toggleInlineStyle("GREEN")}>Green</button>
      </div>
      <div>
        <button onClick={() => toggleInlineStyle("SIZE_12")}>Font Size 12</button>
        <button onClick={() => toggleInlineStyle("SIZE_16")}>Font Size 16</button>
        <button onClick={() => toggleInlineStyle("SIZE_20")}>Font Size 20</button>
      </div>
      <div>
        <button onClick={() => toggleBlockType("left")}>Left</button>
        <button onClick={() => toggleBlockType("center")}>Center</button>
        <button onClick={() => toggleBlockType("right")}>Right</button>
        <button onClick={() => toggleBlockType("justify")}>양쪽</button>
      </div>
    </div>
  );
};

export default ToolbarContainer;
