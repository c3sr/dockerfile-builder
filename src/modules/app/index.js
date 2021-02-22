import appLoaded from "./signals/appLoaded";
import archChanged from "./signals/archChanged";
import buildButtonClicked from "./signals/buildButtonClicked";
import terminalOutputAppended from "./signals/terminalOutputAppended";
import codeEditorFileChanged from "./signals/codeEditorFileChanged";
import codeEditorFilesChanged from "./signals/codeEditorFilesChanged";
import fileUploaded from "./signals/fileUploaded";
import terminalClosed from "./signals/terminalClosed";
import navbarClicked from "./signals/navbarClicked";

export default {
  state: {
    name: process.env.APP_NAME || "Docker for everything",
    state: {
      loading: true,
      saving: false,
      building: false,
      uploading: false
    },
    upload: {
      visible: true,
      files: []
    },
    terminal: {
      visible: false,
      output: []
    },
    files: {
      entry: "Dockerfile",
      content: null,
      prefix: ""
    },
    editor: {
      currentFile: null,
      mode: "docker",
      arch: "Docker"
    }
  },
  signals: {
    appLoaded,
    fileUploaded,
    buildButtonClicked,
    pushButtonClicked: buildButtonClicked,
    terminalOutputAppended,
    codeEditorFileChanged,
    codeEditorFilesChanged,
    archChanged,
    terminalClosed,
    navbarClicked
  }
};
