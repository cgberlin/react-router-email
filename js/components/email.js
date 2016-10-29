import React from 'react'

export var Email = function(props){
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
