import type { Editor, DraftBlockType } from "draft-js";
import { EditorState, DraftInlineStyle, DraftEditorCommand, getDefaultKeyBinding } from "draft-js";
import * as React from "react";

import { EditorViewModel } from "../viewModels";

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
    }
    return getDefaultKeyBinding(e);
  };

  const onChangeFontSize = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    editorViewModel.handleChangeFontSize(e.target.value);
    setEditorState(editorViewModel.editorState);
  };

  const onChangeFontColor = (color: string) => {
    editorViewModel.handleChangeFontColor(color);
    setEditorState(() => editorViewModel.handleChangeFontColor(color)!);
  };

  return {
    // Ref
    editorRef,
    // State
    editorState,
    setEditorState,

    // ViewModel
    editorModel: editorViewModel,

    // Event
    onChange,
    toggleBlockType,
    toggleInlineStyle,
    handleKeyCommand,
    keyBindingFn,

    changeHandler: {
      onChangeFontSize,
      onChangeFontColor,
    },
  };
}
/**
 * 명조체
고딕체
굴림체
바탕체
돋움체
궁서체
한길체
나눔고딕 Light
나눔고딕
나눔고딕 Bold
나눔고딕 Extra Bold

 */
