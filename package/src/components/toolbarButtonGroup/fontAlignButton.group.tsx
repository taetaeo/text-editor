import type { DraftBlockType } from "draft-js";
import * as R from "react";

import type { ButtonGroupList, ToggleBlockType } from "../../types";
import ToolbarSection from "../ui/ToolbarSection";

export interface FontAlignButtonGroupProps {
  className?: string;
  onClick?: (e: R.MouseEvent) => void;

  /**
   * @description label : 버튼명, eventLabel : 인라인스타일 적용할 이벤트명
   */
  fontAlignList: ButtonGroupList;
  toggleBlockType: ToggleBlockType;
}

const FontAlignButtonGroup: R.FC<FontAlignButtonGroupProps> = ({
  className = "text-Editor-toolbar-btn",
  fontAlignList = [],
  toggleBlockType = () => {},
  onClick = undefined,
}) => {
  if (fontAlignList.length === 0) return null;
  return (
    <ToolbarSection>
      {fontAlignList.map((fontAlign, i) => {
        return (
          <button
            key={`font_align_btn-${i}`}
            className={className}
            onClick={(e) => {
              if (toggleBlockType && typeof toggleBlockType === "function") {
                toggleBlockType(fontAlign.eventLabel);
              }

              if (onClick && typeof onClick === "function") {
                onClick(e);
              }
            }}
          >
            {fontAlign.label}
          </button>
        );
      })}
    </ToolbarSection>
  );
};

export default FontAlignButtonGroup;
