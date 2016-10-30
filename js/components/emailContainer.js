var React = require('react');
import Email from './email'
import EMAILS from '../emails'

var EmailContainer = (props) => {
    let typeOfEmail = props.params.whatType;
    if (typeOfEmail == 'spam'){
          var email = EMAILS.spam.filter(function(x){
            return x.id == props.params.id;
          })[0];
    }
    else if (typeOfEmail == 'inbox'){
          var email = EMAILS.inbox.filter(function(x){
            return x.id == props.params.id;
          })[0];
    console.log(email);
    }

    return <Email id={email.id} from={email.from}
                    content={email.content} />;
};

export default EmailContainer;
