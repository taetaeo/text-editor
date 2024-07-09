import { ContentBlock, DraftEditorCommand, DraftStyleMap, EditorState } from "draft-js";
import { Editor } from "draft-js";
import * as React from "react";

interface Props {
  onFocus?: () => void;
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
  handleKeyCommand: (command: DraftEditorCommand, state: EditorState) => "handled" | "not-handled";
  keyBindingFn: (e: React.KeyboardEvent) => DraftEditorCommand | null;
  blockStyleFn: (contentBlock: ContentBlock) => string;
  customStyleMap?: DraftStyleMap;
  placeholder?: string;
}

const EditorContainer = React.forwardRef<Editor, Props>(function RTEditor(
  {
    //
    editorState,
    onChange = () => {},
    onFocus = () => {},
    handleKeyCommand,
    keyBindingFn,
    blockStyleFn,
    customStyleMap = {},
    placeholder = "내용을 입력해주세요...",
  },
  forwardedRef
) {
  return (
    <div className="editor-container" onClick={onFocus}>
      <Editor
        ref={forwardedRef}
        editorState={editorState}
        onChange={onChange}
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={keyBindingFn}
        blockStyleFn={blockStyleFn}
        customStyleMap={customStyleMap}
        placeholder={placeholder}
      />
    </div>
  );
});
export default EditorContainer;
