var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require ('Greeter');

var firstName = 'Majki';

ReactDOM.render(
  <Greeter name={firstName} msg="Message from prop"/>,
  document.getElementById('app')
  );

