import React from 'react';
import Layout from "./components/Layout/Layout";
import MainPage from "./containers/MainPage/MainPage";
import AdminPage from "./containers/AdminPage/AdminPage";

import {BrowserRouter, Switch, Route} from "react-router-dom";

import './';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' exact render={() => <h3 className='text-center p-5'>Welcome, please choose a page from options</h3>} />
          <Route path='/pages/admin' exact component={AdminPage} />
          <Route path='/pages/:name' component={MainPage} />
          <Route render={() => <h2>NOT FOUND</h2>} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;