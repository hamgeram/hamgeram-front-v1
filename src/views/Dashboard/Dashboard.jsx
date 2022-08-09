import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts

import { withStyles} from "material-ui";



import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";

class Dashboard extends React.Component {

  constructor() {
    super();

  }

  render() {
    return (
        <div>sdsd</div>


    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
