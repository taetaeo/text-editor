# Text Editor Library

## Tech Stack

- Draft.js
- React.js
- Typescript

## Example Code.

```tsx
import React from "react";
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
```

1. EditorContainer : Text Editor의 기능을 담당하는 컴포넌트
2. ToolbarContainer : Toolbar의 기능을 담당하는 컴포넌트
3. useEditor : Editor의 데이터 로직을 담당하는 훅
4. style : `text-editor/dist/css/text-editor.css` 경로를 통해서 css 파일 import
