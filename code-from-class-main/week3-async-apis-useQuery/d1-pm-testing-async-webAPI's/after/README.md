# Promises, and Consuming a rest web API exposed by other developers with useEffect and superagent.

1. Demo folder structure
1. use thunderclient to test API
  1. using `users` api, or the `icanhazdadjoke.com` api
1. Make a button that fetches a joke
  1. console.log(joke)
1. Display joke on page 
1. Display loading message while joke is being fetched
1. Load the joke when the page loads (useEffect hook)
  1. Attempt to fetch joke outside of useEffect hook - what happens? Why? 
  1. Move the fetch inside the useEffect hook
1. Add a text input and trigger the useEffect by using the dependency array
  1. What happens when you type in the input?  