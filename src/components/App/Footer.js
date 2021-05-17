import React from "react";
import { Header, Icon, Image } from "semantic-ui-react";

import c3srImage from "../../assets/images/logo-c3sr.png";
import ibmImage from "../../assets/logo-ibm.svg";
import uiucImage from "../../assets/logo-univ.svg";
// import uiucImage from "../../assets/images/uiuc_logo_small.png";

export default function Footer() {
  return (
    <footer>
      <a href="https://github.com/rai-project/dockerfile-builder">
        <Image src={c3srImage} size="small" floated="left" />
        {/*<Image src={uiucImage} size="small" floated="right" />*/}

        {/*<Header inverted as="h3">*/}
        {/*  <Icon name="github" />*/}
        {/*  <Header.Content>rai-project/dockerfile-builder</Header.Content>*/}
        {/*</Header>*/}

        <div id="uiucImage">
          <embed src={uiucImage} />
        </div>

        {/*<div id="border"></div>*/}

        <div id="ibmImage">
          <embed src={ibmImage} />
        </div>
      </a>
    </footer>
  );
}
