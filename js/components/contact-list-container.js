var React = require('react');
var App = require('./app.js');
var CONTACTS = require('./contacts');
import Contact from './contact.js'
var ContactContainer = function(props) {
    var contact = CONTACTS.CONTACTS[0];
    return <Contact id={contact.id} name={contact.name}
                    phoneNumber={contact.phoneNumber} />;
};

module.exports = ContactContainer;
