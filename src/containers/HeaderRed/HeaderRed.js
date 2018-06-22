import React from 'react';

import { StyledHeaderRed } from './Styles';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import Promo from './Promo/Promo';
import SiteNav from './SiteNav/SiteNav';
import UserNav from './UserNav/UserNav';

// MAYBE CHANGE THIS INTO A CLASS?
// OR USE CHILDPROPS?
// HOW ABOUT REDUX?
// HOW ABOUT CONTEXT API?

const headerRed = props => (
  <StyledHeaderRed>

    <div id="header_row_1">
      <div id="header_row_1_col_1">
        <Logo />
      </div>
      <div id="header_row_1_col_2">
        <Search />
      </div>
      <div id="header_row_1_col_3">
        <Promo />
      </div>
    </div>

    <div id="header_row_2">
      <div id="header_row_2_col_1">
        <SiteNav />
      </div>
      <div id="header_row_2_col_2">
      </div>
      <div id="header_row_2_col_3">
        <UserNav
          isAuthenticated={props.childProps.isAuthenticated}
          handleLogout={props.childProps.handleLogout}
        />
      </div>
    </div>

  </StyledHeaderRed>
);

export default headerRed;