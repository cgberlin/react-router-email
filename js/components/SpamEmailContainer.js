var React = require('react');
import EmailList from './emailList'
import EMAILS from '../emails'

var SpamEmailContainer = function(prop){
  return <EmailList emails={EMAILS} />;
};

module.exports = SpamEmailContainer;
