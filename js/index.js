var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;
import App from './components/app.js'
import SpamEmailContainer from './components/SpamEmailContainer'


var routes = (
    <Router history={hashHistory}>
        <Route path="/spam" component={SpamEmailContainer} />
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});
