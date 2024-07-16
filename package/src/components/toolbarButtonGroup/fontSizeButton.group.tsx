import * as R from "react";

import type { ButtonGroupList, ToggleInlineStyle } from "../../types";
import ToolbarSection from "../ui/ToolbarSection";

export interface FontSizeButtonGroupProps {
  className?: string;
  onClick?: (e: R.MouseEvent) => void;

  fontSizeList: ButtonGroupList;
  toggleInlineStyle: ToggleInlineStyle;
}

const FontSizeButtonGroup: R.FC<FontSizeButtonGroupProps> = ({
  className = "text-Editor-toolbar-btn",
  fontSizeList = [],
  toggleInlineStyle = () => {},
  onClick = undefined,
}) => {
  if (fontSizeList.length === 0) return null;
  return (
    <ToolbarSection>
      {fontSizeList.map((fontSize, i) => {
        return (
          <button
            key={`font_size_btn-${i}`}
            className={className}
            onClick={(e) => {
              if (toggleInlineStyle && typeof toggleInlineStyle === "function") {
                toggleInlineStyle(fontSize.eventLabel);
              }

              if (onClick && typeof onClick === "function") {
                onClick(e);
              }
            }}
          >
            {fontSize.label}
          </button>
        );
      })}
    </ToolbarSection>
  );
};

export default FontSizeButtonGroup;
