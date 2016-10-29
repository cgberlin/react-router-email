var React = require('react');
import Email from './email'

var EmailListSpam = (props) => {
    let SpamEmails = props.emails.spam;

      return (
          <ul>
            {SpamEmails.map(function(title, index, content){
              return <Email key = {index} title = {SpamEmails[index].title} content = {SpamEmails[index].content} />
            })}
          </ul>
      );


};

export default EmailListSpam;
