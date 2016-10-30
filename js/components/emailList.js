var React = require('react');
import Email from './email'

var EmailList = (props) => {
    let EmailsSelected = props.emails;

      return (
          <ul>
            {EmailsSelected.map(function(title, index, content){
              return <Email key = {index} title = {EmailsSelected[index].title} content = {EmailsSelected[index].content} />
            })}
          </ul>
      );


};

export default EmailList;
