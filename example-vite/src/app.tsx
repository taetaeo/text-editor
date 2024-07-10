import { EditorContainer, ToolbarContainer, useEditor, textEditorConfig } from "text-editor";

import "text-editor/dist/css/text-editor.css";

function App() {
  const { editorRef, editorState, editorModel, onChange, toggleBlockType, toggleInlineStyle, handleKeyCommand, keyBindingFn } = useEditor();

  console.log(textEditorConfig);

  return (
    <>
      <ToolbarContainer
        toggleInlineStyle={toggleInlineStyle}
        toggleBlockType={toggleBlockType}
        label={{
          bold: textEditorConfig.toolbarLabel?.text?.bold || "굵기",
          italic: textEditorConfig.toolbarLabel?.text?.italic || "기울림",
          underline: textEditorConfig.toolbarLabel?.text?.underline || "밑줄",
          "align-center": textEditorConfig.toolbarLabel.align.center || "중앙정렬",
          "align-left": textEditorConfig.toolbarLabel.align.left || "왼쪽 정렬",
          "align-right": textEditorConfig.toolbarLabel.align.right || "오른쪽 정렬",
          "align-justify": textEditorConfig.toolbarLabel.align.justify || "양쪽 정렬",
          color: textEditorConfig.toolbarLabel.color,
          "list-bullet": textEditorConfig.toolbarLabel.list.bullet,
          "list-number": textEditorConfig.toolbarLabel.list.number,
        }}
      />
      <button
        onClick={() => {
          const objectFromRte = editorModel.handleExtractObjectFromRTE();
          console.log("objectFromRte", objectFromRte);

          const extractedCoord = editorModel.handleExtractCoord();
          console.log("extractedCoord", extractedCoord);

          const mergedList = editorModel.handleMergeArray<any, any>(objectFromRte, extractedCoord);
          console.log("mergedList", mergedList);
        }}
      >
        데이터 추출하기
      </button>
      <EditorContainer
        ref={editorRef}
        editorState={editorState}
        onChange={onChange}
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={keyBindingFn}
        blockStyleFn={editorModel.handleBlockStyleFn}
        customStyleMap={textEditorConfig.customStyleMap}
        placeholder={"내용을 입력해주세요......"}
      />
    </>
  );
}

export default App;
