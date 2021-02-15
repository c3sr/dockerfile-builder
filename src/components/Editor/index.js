import React from "react";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";
import { isNil, isEmpty } from "lodash";

import CodeMirror from "./CodeMirror";

export default connect(
  {
    files: state`app.files.content`,
    entry: state`app.files.entry`,
    model: state`app.editor.mode`,
    currentFile: state`app.editor.currentFile`,
    arch: state`app.editor.arch`,
    buildButtonClicked: signal`app.buildButtonClicked`,
    pushButtonClicked: signal`app.pushButtonClicked`,
    codeEditorFileChanged: signal`app.codeEditorFileChanged`,
    codeEditorFilesChanged: signal`app.codeEditorFilesChanged`,
    archChanged: signal`app.archChanged`
  },
  function Editor({
    files,
    entry,
    mode,
    currentFile,
    arch,
    buildButtonClicked,
    pushButtonClicked,
    codeEditorFileChanged,
    codeEditorFilesChanged,
    archChanged
  }) {
    if (isNil(files) || isEmpty(files)) {
      return <div />;
    }
    return (
      <CodeMirror
        mode={mode}
        files={files}
        currentFile={currentFile || entry}
        arch={arch}
        withMenuBar={true}
        onBuildClick={buildButtonClicked}
        onPushClick={pushButtonClicked}
        onFileSelectClick={codeEditorFileChanged}
        onArchSelectClick={archChanged}
        onFilesChanged={codeEditorFilesChanged}
      />
    );
  }
);
