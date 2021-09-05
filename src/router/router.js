import React from "react";
import { Route, Redirect } from "react-router-dom";

import InvoiceData from '../screens/InvoiceData';


class ReactRouter extends React.Component {

   

  render() {
 
    return (

      <React.Fragment>
          <Route path="/" component={InvoiceData} />
        
        </React.Fragment>
    );
  }
}



export default ReactRouter;
