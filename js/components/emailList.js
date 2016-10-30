var React = require('react');
import Email from './email'

var EmailList = (props) => {
    let EmailsSelected = props.emails;
      return (
          <ul>
            {EmailsSelected.map(function(title, index, from){
              return <Email key = {index} title = {EmailsSelected[index].title} from = {EmailsSelected[index].from} whatType = {props.whatType} id = {EmailsSelected[index].id} />
            })}
          </ul>
      );


};

export default EmailList;
