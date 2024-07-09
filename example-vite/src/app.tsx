import { useState } from "react";
import { EditorContainer, ToolbarContainer, useEditor } from "text-editor";

function App() {
  const { editorRef, editorState, editorModel, onChange, toggleBlockType, toggleInlineStyle, handleKeyCommand, keyBindingFn } = useEditor();
  return (
    <>
      <ToolbarContainer toggleInlineStyle={toggleInlineStyle} toggleBlockType={toggleBlockType} />
      <EditorContainer
        editorState={editorState}
        onChange={onChange}
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={keyBindingFn}
        blockStyleFn={editorModel.handleBlockStyleFn}
      />
    </>
  );
}

export default App;
