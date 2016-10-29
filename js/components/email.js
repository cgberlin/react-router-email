import React from 'react'

var Email = function(props){
  console.log(props);
  return (
    <div>
      <strong>
        {props.title}
      </strong>
      &nbsp;
      {props.content}
      </div>
  );
};

export default Email;
