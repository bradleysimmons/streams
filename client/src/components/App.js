import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header'
import history from '../history.js';

const App = () => {
  //Switch makes sure one route is shown.  but i think we can also just define things correctly and in order.
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/:id/edit" exact component={StreamEdit} />
            <Route path="/streams/:id/delete" exact component={StreamDelete} />
            <Route path="/streams/:id/show/" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
