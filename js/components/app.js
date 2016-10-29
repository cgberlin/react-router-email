var React = require('react');

var App = function(props) {
    return (
        <div>
            <h1>
                Email App
            </h1>
            <div>
                {props.children}
            </div>
        </div>
    );
};

module.exports = App;
