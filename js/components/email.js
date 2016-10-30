import React from 'react'
var router = require('react-router');
var Router = router.Router;
var Link = router.Link;

var Email = function(props){
  return (
    <div>
      <strong>
        <Link to ={'/'+props.whatType+'/' + props.id + '/' + props.whatType}>
        {props.title}
        </Link>
      </strong>
      &nbsp;
      <strong>
      {props.from}
      </strong>
      {props.content}
      </div>
  );
};

export default Email;
