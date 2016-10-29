var React = require('react');
import Email from './email.js'

export var EmailList = function(props) {
  console.log('emaillist');
  var emails = Object.keys(props.emails).map(function(emailId, index){
    var email = props.emails[emailId];
    return (
        <li key={index}>
          <Email id={email.id} title={email.title}
                  from={email.from} />
        </li>
    );
  });
  return (
    <ul>
      {emails}
    </ul>
  );
};
