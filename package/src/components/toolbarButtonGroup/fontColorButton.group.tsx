import type { DraftInlineStyle } from "draft-js";
import * as R from "react";

import type { ButtonGroupList, ToggleInlineStyle } from "../../types";
import ToolbarSection from "../ui/ToolbarSection";

export interface FontColorButtonGroupProps {
  className?: string;
  onClick?: (e: R.MouseEvent) => void;

  fontColorList: ButtonGroupList;
  toggleInlineStyle: ToggleInlineStyle;
}

const FontColorButtonGroup: R.FC<FontColorButtonGroupProps> = ({
  className = "text-Editor-toolbar-btn",
  fontColorList = [],
  toggleInlineStyle = () => {},
  onClick = undefined,
}) => {
  if (fontColorList.length === 0) return null;
  return (
    <ToolbarSection>
      {fontColorList.map((fontColor, i) => {
        return (
          <button
            key={`font_color_btn-${i}`}
            className={className}
            onClick={(e) => {
              if (toggleInlineStyle && typeof toggleInlineStyle === "function") {
                toggleInlineStyle(fontColor.eventLabel);
              }

              if (onClick && typeof onClick === "function") {
                onClick(e);
              }
            }}
          >
            {fontColor.label}
          </button>
        );
      })}
    </ToolbarSection>
  );
};

export default FontColorButtonGroup;
