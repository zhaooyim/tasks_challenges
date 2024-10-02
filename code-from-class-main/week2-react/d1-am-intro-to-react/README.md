# Intro to React

### 💭 React Videos Re-cap Prompts: 🪞

**React Functional Components**

1. Do react functional component names and file names begin with an upper or lower case letter?
1. What do react functional components normally contain within their return blocks?
1. How does JSX differ from HTML?
1. The code below doesn’t currently work. If I want to use the props in Welcome.jsx, where and how do I pass them in?

```js
// App.jsx

import React from 'react'
import Welcome from './Welcome'

function App() {
	return <Welcome message="Hello World"/>
}
```

```js
// Welcome.jsx
import React from 'react'

export default function Welcome() {
	// const message = props.message
  const welcomes = ["Hello", "Hi", "Hey"]

	return (
    {welcomes.map(welcome => { return <p>{welcome}</p>)}}
    // expected output: 

    // "Hello"
    // "Hi"
    //"Hey"
  )
}
```

**Rendering Logic**

1. What is the difference between using `&&` and `? :` as conditionals in React? Give an example of where you might use each one.


1. How can you create elements or components from an array? Where would you put this logic?


