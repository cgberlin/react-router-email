var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;
var App = require('./components/app.js');
import SpamEmailContainer from './components/SpamEmailContainer.js'


var routes = (
    <Router history={hashHistory}>
        <Route path="/spam" component={SpamEmailContainer}>
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});
