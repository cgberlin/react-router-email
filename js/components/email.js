import React from 'react'
import Emails from './emails.js'

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
