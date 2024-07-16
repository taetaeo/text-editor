import * as R from "react";

interface Props extends R.HTMLAttributes<HTMLDivElement> {}

const ToolbarSection = R.forwardRef<HTMLDivElement, Props>(function Components(
  { className = "text-Editor-toolbar-flex", style, children, ...rest },
  forwardedRef
) {
  return (
    <div ref={forwardedRef!} className={className} style={style} {...rest}>
      {children}
    </div>
  );
});

export default ToolbarSection;
