var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;
import App from './components/app.js'
import SpamEmailContainer from './components/SpamEmailContainer'
import InboxEmailContainer from './components/InboxEmailContainer'
import EmailContainer from './components/EmailContainer'


var routes = (
    <Router history={hashHistory}>
        <Route path="spam" component={App}>
          <IndexRoute component={SpamEmailContainer} />
          <Route path = ":id/:whatType" component = {EmailContainer} />
        </Route>
        <Route path="inbox" component={App}>
          <IndexRoute component={InboxEmailContainer} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Router routes = {routes} history = {hashHistory}></Router>, document.getElementById('app'));
});
