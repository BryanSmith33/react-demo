# React

React is a libarary created by the good peole at Facebook.

Here is some vocab to review

### Language
JavaScript is a programming language.

### Library
Libraries are basically processes for doing something specific in your application, written in a specific language (React is written in JavaScript which is a language).

### Framework
A framework is like a bigger library, with many more specifications on how to complete things.

Think of them all like this: A book is written in a language, a library holds books (like a bookshelf, not a full on library you are accustomed to) which are written in specific languages and a framework is like a house, which if big enough, could have a library in it.


### Object
A way to hold data in JS. Objects are usually concerend to one piece of data like a human or properties of something like a car
```js

const me = {
  name: 'Bryan',
  tattoos: {
    has: true,
    count: 5
  },
  age 29
}
```

### Class
A class is a special way we can create a function that will return an object. We used a special type of class in React to create our components. Remember, this class and class in CSS are **ABSOLUTELY DIFFERENT**

### Component 
React uses a component-based architecture. What this means is that we break out our JSX/JS into separate, smaller (more maintainable) files. Remember, React doesn't use HTML, it used JSX which is javascripts representation of HTML.

###JSX
Just incase you didn't read the one above, JSX is the representation of HTML in JavaScript. If we want to access variables/state/anything that is javascript related, we need to escape our JSX

### {}
How we escape our JSX

```jsx
  class App extends Component {
    constructor(){
      super()
      this.state = {
        name: 'Bryan'
      }
    }
    render(){
      return (
        <div>
          {this.state.name}
        </div>
      )
    }
  }
```

If we just type `this.state.name` outside of the curly braces, it would render text of **this.state.name**.

### state
`this.state` is the "defaults" we set up for our app, or placeholders for future data. It is created inside of the constructor method. Rememer, React rerenders the page when our state is updated. React is smart though and only updates what needs to be updated if there is a change

### setState
`this.setState({})` is how we update our state inside of the contructor. You will not add new key/value pairs to the state in the constructor, only update them.

Here is the structore of almost every class based component you will ever write

*with state*
```jsx
  import React, {Component} from 'react'

  class ComponentName extends Component {
    constructor(){
      super()
      this.state = {
        //DATE TO BE STORED ON STATE
      }
    }
    render(){
      return(
        // JSX
      )
    }
  }
```

*withOUT state*
```jsx
  import React, {Component} from 'react'

  class ComponentName extends Component {
    render(){
      return(
        // JSX
      )
    }
  }
```
