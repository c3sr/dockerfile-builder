import { set } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import resetError from "../chains/resetError";
import buildImage from "../actions/buildImage";

export default [
  ...resetError,
  set(state`app.state.building`, true),
  set(props`files`, state`app.files.content`),

  set(state`app.terminal.output`, []),
  set(state`app.terminal.visible`, true),
  buildImage,
  set(state`app.state.building`, false)
];
