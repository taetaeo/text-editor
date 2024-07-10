import { useState } from "react";
import { EditorContainer, ToolbarContainer, useEditor, textEditorConfig } from "text-editor";

import "text-editor/dist/css/text-editor.css";

function App() {
  const { editorRef, editorState, editorModel, onChange, toggleBlockType, toggleInlineStyle, handleKeyCommand, keyBindingFn } = useEditor();
  return (
    <>
      <ToolbarContainer toggleInlineStyle={toggleInlineStyle} toggleBlockType={toggleBlockType} />
      <EditorContainer
        ref={editorRef}
        editorState={editorState}
        onChange={onChange}
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={keyBindingFn}
        blockStyleFn={editorModel.handleBlockStyleFn}
        customStyleMap={textEditorConfig.styleMap}
        placeholder={"내용을 입력해주세요......"}
      />
    </>
  );
}

export default App;
