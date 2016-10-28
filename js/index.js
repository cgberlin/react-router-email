var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;
var App = require('./components/app.js');

var ContactListComponent = require('./components/contact-list-container');

var routes = (
    <Router history={hashHistory}>
        <Route path = "/contacts" component={ContactListComponent}>
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});
