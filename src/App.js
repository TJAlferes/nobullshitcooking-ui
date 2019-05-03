import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';
import { DragDropContext } from 'react-dnd';
import { connect } from 'react-redux';

import MobileHeaderRed from './containers/MobileHeaderRed/MobileHeaderRed';
import HeaderRed from './containers/HeaderRed/HeaderRed';
import MainWhite from './components/MainWhite/MainWhite';
import FooterGray from './components/FooterGray/FooterGray';
import RoutesList from './routing/Routes';
import './app.css';

const withDragDropContext = DragDropContext(MultiBackend(HTML5toTouch));

class App extends Component {
  // auth functionality
  /*
  userDidAuthenticate = authenticated => {
    this.setState({isAuthenticated: authenticated});
  }

  handleLogout = async () => {
    await Auth.signOut();
    this.userDidAuthenticate(false);
    this.setState({userEmail: ''});
    this.props.history.push('/user/login');
  }

  getUser = async () => {
    try {
      let user = await Auth.currentAuthenticatedUser();
      console.log(user.attributes.email);
      this.setState({userEmail: user.attributes.email});
    } catch (err) {
      this.handleLogout();
      console.log(err.message);
    }
  }
  */
  
  render() {
    // Pass down auth info as props (into HeaderRed and into RoutesList):
    // ........... Just use redux..............?
    /*const childProps = {
      isAuthenticated: this.props.isAuthenticated,
      //userEmail: this.props.userEmail,
      //userDidAuthenticate: this.userDidAuthenticate,
      //handleLogout: this.handleLogout,
      //getUser: this.getUser
    };*/
    
    // Decide visual layout style:
    // 1. Determine if the user is currently at an authentication page
    let location = this.props.location;
    let isAccessing = location.pathname &&
    (
      location.pathname.match(/^\/staff\/register/) ||
      location.pathname.match(/^\/staff\/login/) ||
      location.pathname.match(/^\/user\/register/) ||
      location.pathname.match(/^\/user\/login/)
    );
    
    let layout = null;
    if (isAccessing) {
      // 2a. If they are, then render authentication pages layout
      //layout = <div><RoutesList childProps={childProps} /></div>;
      layout = <div><RoutesList /></div>;
    } else {
      // 2b. Otherwise, render the normal layout
      //<div id="app" {...this.props}>
      //<RoutesList childProps={childProps} />
      layout = (
        <div id="app">
          <div>
            <div className="mobile_display">
              <MobileHeaderRed />
            </div>
            <div className="desktop_display">
              <HeaderRed />
            </div>
          </div>
          <MainWhite location={location}>
            <RoutesList />
          </MainWhite>
          <FooterGray />
        </div>
      );
    }

    return layout;
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default withRouter(connect(mapStateToProps)(withDragDropContext(App)));