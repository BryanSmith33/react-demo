//import React from react and destructure Component off of React.
import React, { Component } from 'react'
//import our css file. Notice the capital A to match the capital A in App.js
import './App.css'

//create our new class based component
class App extends Component {
  //setting up our defaults in the constructor
	constructor() {
    // don't worry about super now but know that it makes it work
    super()
    // this.state is an object. This is where we set up our defaults for the component
		this.state = {
      name: ``,
      friends: []
    }
    //.bind() syntax of binding the `this` keyword
    this.handleNameUpdate = this.handleNameUpdate.bind(this)
  }
  
  //custom method that takes in an event we call `e`
  handleNameUpdate(e){
    //using the built in setState method. setState takes in an object which will then check our state object in the constructor and see if it needs to update anything
    this.setState({
      //updating the name value on state with `e.target.value`
      name: e.target.value
    })
    //`e.target.value` will grab the value off of the input. not every element has a value property though
  }

  //custom method to add a friend to an array
  handleAddFriend(){
    //make a copy of the friends array on state with slice
    // remember, state should be immutable
    const friendsCopy = this.state.friends.slice()
    // add to the copy with .push(). here we are pushing the value of name on state
    friendsCopy.push(this.state.name)
    // updating state
    // here we update the friends array and clear out the value of name
    // that will clear out the text from the input on the screen
    this.setState({
      friends: friendsCopy,
      name: ``
    })
  }

	render() {
    //anything between the render and the return in javascript. outside of render is React

    // here we are using `.map()` to loop over the array of friends on state. remember, `.map()` returns a new array so we need something to hold it. in this case it is the const of friendsDisplay. reference the javascript cheatsheet I sent in slack for more details on `.map()`
    const friendsDisplay = this.state.friends.map((friend, index) => {
      return (
        // we need a `key` here so react can sort things out for us
        // if we don't include a key react won't know how this dynamically created list works
        <h1 key={index}>{friend}</h1>
      )
    })
		return (
			<div className='App'>
        {/* here our input listens for any change, even spaces, and will fire the handleNameUpdate method for us */}
				<input onChange={this.handleNameUpdate}
        value={this.state.name}
        />
        {/* here the button is listening for anytime it is clicked. Once it is clicked, it will run the handleAddFriend method */}
        <button onClick={() => this.handleAddFriend()}>Add Friend</button>
        {/* here we are displaying our const from up above */}
        {friendsDisplay}
        {/* react is smart and knows that if it sees an array with jsx in it that was dynamically created, to render that jsx on the screen */}
			</div>
		)
	}
}

//here we are exporting our component called App so we can use it in different fiels (e.g. index.js)
export default App
