var React = require('react');
import Email from './email.js'

export var EmailList = function(props) {
  var emails = Object.keys(props.emails).map(function(emailId, index){
    var email = props.emails[emailId];
    return (
        <li key={index}>
          <Email id={email.id} title={email.title}
                  content={email.content} />
        </li>
    );
  });
  return (
    <ul>
      {emails}
    </ul>
  );
};
