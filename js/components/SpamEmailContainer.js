var React = require('react');
import Emails from './emails.js'
import EmailList from './emailList.js'

export var SpamEmailContainer = function(){
  return <EmailList emails={Emails} />
};
