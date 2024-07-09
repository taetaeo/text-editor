// RichTextEditor.tsx
import React, { useEffect, useRef, useState } from "react";
import { Editor, EditorState, DraftInlineStyle, DraftBlockType, DraftEditorCommand, getDefaultKeyBinding } from "draft-js";

import { EditorViewModel } from "../viewModels";
import { Any } from "../types";

const styleMap = {
  RED: { color: "red" },
  BLUE: { color: "blue" },
  GREEN: { color: "green" },
  SIZE_12: { fontSize: "12px" },
  SIZE_16: { fontSize: "16px" },
  SIZE_20: { fontSize: "20px" },
};

const RichTextEditor: React.FC = () => {
  const editorRef = useRef<Editor>(null);
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const viewModel = new EditorViewModel(editorRef);

  useEffect(() => {
    viewModel.handleChangeState({ editorState });
  }, [editorState, viewModel]);

  const onChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
  };

  const toggleInlineStyle = (inlineStyle: DraftInlineStyle | string) => {
    viewModel.handleToggleInlineStyle(inlineStyle as DraftInlineStyle);
    setEditorState(viewModel.editorState);
  };

  const toggleBlockType = (blockType: DraftBlockType) => {
    viewModel.handleToggleBlockType(blockType);
    setEditorState(viewModel.editorState);
  };

  const handleKeyCommand = (command: DraftEditorCommand, state: EditorState) => {
    console.log(command);

    if (command === "bold") {
      const newState = viewModel.handleKeyCommand(command, state);
      if (newState) {
        setEditorState(newState);
        return "handled";
      }
    }
    return "not-handled";
  };

  const keyBindingFn = (e: React.KeyboardEvent) => {
    const command = viewModel.handleMappingKeyToCommand(e);
    if (command) {
      setEditorState(viewModel.editorModel.editorState);
      console.log("COMMAND", command);
    }
    return getDefaultKeyBinding(e);
  };

  return (
    <>
      <div>
        <div>
          <button
            onClick={() => {
              const objectFromRte = viewModel.handleExtractObjectFromRTE();
              console.log("objectFromRte", objectFromRte);

              const extractedCoord = viewModel.handleExtractCoord();
              console.log("extractedCoord", extractedCoord);

              const mergedList = viewModel.handleMergeArray<Any, Any>(objectFromRte, extractedCoord);
              console.log("mergedList", mergedList);
            }}
          >
            데이터 추출하기
          </button>
        </div>
        <div className="toolbar">
          <div>
            <button onClick={() => toggleInlineStyle("BOLD")}>굵기</button>
            <button onClick={() => toggleInlineStyle("ITALIC")}>기울림</button>
            <button onClick={() => toggleInlineStyle("UNDERLINE")}>밑줄</button>
          </div>
          <div>
            <button onClick={() => toggleBlockType("unordered-list-item")}>Bullet List</button>
            <button onClick={() => toggleBlockType("ordered-list-item")}>Numbered List</button>
          </div>
          <div>
            <button onClick={() => toggleInlineStyle("STRIKETHROUGH")}>Strikethrough</button>
            <button onClick={() => toggleInlineStyle("CODE")}>Code</button>
          </div>
          <div>
            <button onClick={() => toggleInlineStyle("RED")}>Red</button>
            <button onClick={() => toggleInlineStyle("BLUE")}>Blue</button>
            <button onClick={() => toggleInlineStyle("GREEN")}>Green</button>
          </div>
          <div>
            <button onClick={() => toggleInlineStyle("SIZE_12")}>Font Size 12</button>
            <button onClick={() => toggleInlineStyle("SIZE_16")}>Font Size 16</button>
            <button onClick={() => toggleInlineStyle("SIZE_20")}>Font Size 20</button>
          </div>
          <div>
            <button onClick={() => toggleBlockType("left")}>Left</button>
            <button onClick={() => toggleBlockType("center")}>Center</button>
            <button onClick={() => toggleBlockType("right")}>Right</button>
            <button onClick={() => toggleBlockType("justify")}>양쪽</button>
          </div>
        </div>
        <div className="editor">
          <Editor
            ref={editorRef}
            editorState={editorState}
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
            keyBindingFn={keyBindingFn}
            blockStyleFn={viewModel.handleBlockStyleFn}
            customStyleMap={styleMap}
            placeholder="내용을 입력해주세요..."
          />
        </div>
      </div>
    </>
  );
};

export default RichTextEditor;
