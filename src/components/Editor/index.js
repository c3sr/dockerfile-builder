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
    arch: state`app.editor.arch`, // Added
    buildButtonClicked: signal`app.buildButtonClicked`,
    pushButtonClicked: signal`app.pushButtonClicked`,
    codeEditorFileChanged: signal`app.codeEditorFileChanged`,
    codeEditorFilesChanged: signal`app.codeEditorFilesChanged`,
    archChanged: signal`app.archChanged` // Added
  },
  function Editor({
    files,
    entry,
    mode,
    currentFile,
    arch, // Added
    buildButtonClicked,
    pushButtonClicked,
    codeEditorFileChanged,
    codeEditorFilesChanged,
    archChanged // Added
  }) {
    if (isNil(files) || isEmpty(files)) {
      return <div />;
    }
    return (
      <CodeMirror
        mode={mode}
        files={files}
        currentFile={currentFile || entry}
        arch={arch} // Added
        withMenuBar={true}
        onBuildClick={buildButtonClicked}
        onPushClick={pushButtonClicked}
        onFileSelectClick={codeEditorFileChanged}
        onArchSelectClick={archChanged} // Added
        onFilesChanged={codeEditorFilesChanged}
      />
    );
  }
);
