import { EditorViewModel } from "@/viewModels";
import type { Editor, DraftBlockType } from "draft-js";
import { EditorState, DraftInlineStyle, DraftEditorCommand, getDefaultKeyBinding } from "draft-js";
import * as React from "react";

export default function useEditor() {
  const editorRef = React.useRef<Editor>(null);
  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());

  const editorViewModel = new EditorViewModel(editorRef);

  React.useEffect(() => {
    editorViewModel.handleChangeState({ editorState });
  }, [editorState, editorViewModel]);

  const onChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
  };

  const toggleInlineStyle = (inlineStyle: DraftInlineStyle | string) => {
    editorViewModel.handleToggleInlineStyle(inlineStyle as DraftInlineStyle);
    setEditorState(editorViewModel.editorState);
  };

  const toggleBlockType = (blockType: DraftBlockType) => {
    editorViewModel.handleToggleBlockType(blockType);
    setEditorState(editorViewModel.editorState);
  };

  const handleKeyCommand = (command: DraftEditorCommand, state: EditorState) => {
    console.log(command);

    if (command === "bold") {
      const newState = editorViewModel.handleKeyCommand(command, state);
      if (newState) {
        setEditorState(newState);
        return "handled";
      }
    }
    return "not-handled";
  };

  const keyBindingFn = (e: React.KeyboardEvent) => {
    const command = editorViewModel.handleMappingKeyToCommand(e);
    if (command) {
      setEditorState(editorViewModel.editorModel.editorState);
      console.log("COMMAND", command);
    }
    return getDefaultKeyBinding(e);
  };

  return {
    editorRef,
    editorState,
    editorModel: editorViewModel,

    onChange,
    toggleBlockType,
    toggleInlineStyle,
    handleKeyCommand,
    keyBindingFn,
  };
}
