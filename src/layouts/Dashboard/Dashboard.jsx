import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// import MuiThemeProvider and createMuiTheme to create custom theme
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// import jss and jss-rtl for change all style to support RTL
import { create } from 'jss';
import rtl from 'jss-rtl';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName, jssPreset } from 'material-ui/styles';

// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { withStyles } from "material-ui";

import { Header, Footer, Sidebar } from "components";

import dashboardRoutes from "routes/dashboard.jsx";

import appStyle from "assets/jss/material-dashboard-react/appStyle.jsx";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";
import {ToastContainer} from "react-toastify";
import {decodeToken} from "../../utills/decodeToken";
import {addUser, clearUser} from "../../actions/User";
import {useDispatch} from "react-redux";
import FormDialog from "../../dialogs/setPage";
import FormDialogRegister from "../../dialogs/userInstageramDialog";
import {handleInsgeramUser} from "../../actions/instageramUser";
import {store} from "../../store";

// create custom theme configuration
const theme = createMuiTheme({
  direction: 'rtl',
  typography: {
    fontFamily: '"Vazir", sans-serif'
  }
});
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// Custom Material-UI class name generator.
const generateClassName = createGenerateClassName();

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (localStorage.getItem("hamgeramToken")) {
        if (prop.redirect)
          return <Redirect from={prop.path} to={prop.to} key={key} />;
        return <Route path={prop.path} component={prop.component} key={key} />;
      }
      else {
        return <Redirect to={"/login"}/>
      }
    })}
  </Switch>
);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token : localStorage.getItem("hamgeramToken"),
      status: false
    }

    if (this.state.token) {
      const decodedToken = decodeToken(this.state.token);
      const dateNow = Date.now() / 1000;

      if (decodedToken.payload.exp < dateNow) {
        localStorage.removeItem("hamgeramToken");
      };
    }

    store.dispatch(handleInsgeramUser())

}
  state = {
    mobileOpen: false
  };
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/maps";
  }
  componentDidMount() {
    if(navigator.platform.indexOf('Win') > -1){
      // eslint-disable-next-line
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
  }
  componentDidUpdate() {
    this.refs.mainPanel.scrollTop = 0;
  }

  render() {
    const { classes, ...rest } = this.props;
    return (

      <MuiThemeProvider theme={theme}>
        <JssProvider jss={jss} generateClassName={generateClassName}>
          <div className={classes.wrapper}>
            <Sidebar
              routes={dashboardRoutes}
              logoText={"همگرام"}
              logo={logo}
              image={image}
              handleDrawerToggle={this.handleDrawerToggle}
              open={this.state.mobileOpen}
              color="blue"
              {...rest}
            />
            <FormDialogRegister status={this.state.status}/>

            <div className={classes.mainPanel} ref="mainPanel">
              <Header
                routes={dashboardRoutes}
                handleDrawerToggle={this.handleDrawerToggle}
                {...rest}
              />
              {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
              {this.getRoute() ? (
                <div className={classes.content}>
                  <div className={classes.container}>{switchRoutes}</div>
                </div>
              ) : (
                <div className={classes.map}>{switchRoutes}</div>
              )}
              {this.getRoute() ? <Footer /> : null}
            </div>
          </div>
        </JssProvider>
        <ToastContainer />
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(appStyle)(App);
