var React = require('react');
import EmailList from './emailList.js'
import EMAILS from '../emails.js'

var SpamEmailContainer = function(){
  return <EmailList emails={EMAILS} />;
};

export default SpamEmailContainer;
