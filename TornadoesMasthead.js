import React from 'react';
import {
    Brand,
    Masthead,
    MastheadContent,
    MastheadToggle,
    MastheadMain,
    MastheadBrand,
    PageToggleButton
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import Image from "./tornadoes-2024-2025-logo.png";
//import { Link } from 'react-router-dom';
//<Link to="/"></Link>

const TornadoesMasthead = ({ children }) => {
  return (
    <Masthead id="tornadoes">
      <MastheadToggle>
        <PageToggleButton variant="plain" aria-label="Global Navigation">
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand>
          <Brand src={Image} alt="Tornadoes Logo" widths={{
             default: '40px',
             sm: '80px',
             md: '320px'
          }}/>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>
        F5 Tornadoes Travel Softball Program
      </MastheadContent>
    </Masthead>
  );
}

export default TornadoesMasthead;
