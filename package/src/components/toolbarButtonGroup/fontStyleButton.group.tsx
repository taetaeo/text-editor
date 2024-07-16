import type { DraftInlineStyle } from "draft-js";
import * as R from "react";

import type { ButtonGroupList, ToggleInlineStyle } from "../../types";
import ToolbarSection from "../ui/ToolbarSection";

export interface FontStyleButtonGroupProps {
  className?: string;
  onClick?: (e: R.MouseEvent) => void;

  fontStyleList: ButtonGroupList;
  toggleInlineStyle: ToggleInlineStyle;
}

const FontColorButtonGroup: R.FC<FontStyleButtonGroupProps> = ({
  className = "text-Editor-toolbar-btn",
  fontStyleList = [],

  toggleInlineStyle = () => {},
  onClick = undefined,
}) => {
  if (fontStyleList.length === 0) return null;
  return (
    <ToolbarSection>
      {fontStyleList.map((fontStyle, i) => {
        return (
          <button
            key={`font_color_btn-${i}`}
            className={className}
            onClick={(e) => {
              if (toggleInlineStyle && typeof toggleInlineStyle === "function") {
                toggleInlineStyle(fontStyle.eventLabel);
              }

              if (onClick && typeof onClick === "function") {
                onClick(e);
              }
            }}
          >
            {fontStyle.label}
          </button>
        );
      })}
    </ToolbarSection>
  );
};

export default FontColorButtonGroup;
