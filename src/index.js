//importing React. This will look for a dependency in our package.json file, if it finds it it will then grab some code from our node_modules folder
import React from 'react';
//importing ReactDOM...Same process as above
import ReactDOM from 'react-dom';
// import our CSS file
import './index.css';
//import our App component
import App from './App';

// this is where the actual rendering of the code on the screen happens
ReactDOM.render(<App />, document.getElementById('root'));

