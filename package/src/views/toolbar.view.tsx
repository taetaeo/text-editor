import * as R from "react";

import {
  FontAlignButtonGroup,
  FontAlignSelector,
  FontColorButtonGroup,
  FontColorSelector,
  FontFamilySelector,
  FontSizeButtonGroup,
  FontSizeSelector,
  FontStyleButtonGroup,
} from "../components";

interface Props extends R.HTMLAttributes<HTMLElement> {}

const ToolbarContainer: React.FC<React.PropsWithChildren<Props>> = ({ children, style, ...rest }) => {
  return (
    <div className="text-Editor-toolbar" style={style} {...rest}>
      {children}
    </div>
  );
};

const ToolbarView = Object.assign(ToolbarContainer, {
  FontAlignButtonGroup,
  FontColorButtonGroup,
  FontSizeButtonGroup,
  FontStyleButtonGroup,

  FontSizeSelector,
  FontColorSelector,
  FontAlignSelector,
  FontFamilySelector,
});

export default ToolbarView;
