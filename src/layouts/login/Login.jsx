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

import {Footer} from "components";

import LoginRoutes from "../../routes/Login";

import appStyle from "assets/jss/material-dashboard-react/appStyle.jsx";


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
        {LoginRoutes.map((prop, key) => {
            if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key} />;
            return <Route path={prop.path} component={prop.component} key={key} />;
        })}
    </Switch>
);

class Login extends React.Component {
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
                        <div ref="mainPanel">
                            {this.getRoute() ? (
                                <div className={classes.content}>
                                    <div className={classes.container}>{switchRoutes}</div>
                                </div>
                            ) : (
                                <div className={classes.map}>{switchRoutes}</div>
                            )}
                            {this.getRoute() ? null : null}
                        </div>
                    </div>
                </JssProvider>
            </MuiThemeProvider>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(appStyle)(Login);
