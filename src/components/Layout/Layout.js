import React, {Fragment} from 'react';
import NavigationBar from "../Navigation/NavigationBar/NavigationBar";

const Layout = props => {
  return (
    <Fragment>
      <NavigationBar/>
      <main>
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;