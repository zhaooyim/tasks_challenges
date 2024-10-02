# React state kata

## Packages Included

- react
- react-router-dom
- express
- vite
- vitest
- eslint

## Setup

- [ ] Clone this repo, navigate to it, install packages, and start the server with `npm run dev`
  <details style="padding-left: 2em">
    <summary>Tip</summary>

  ```sh
  npm install
  npm run dev
  ```

  </details>

---

## Demo setup

### User Story

As a user, when I open the main page I should see a message saying something like "Select a kata to work on", then when I click on one of the buttons in the header, it should display the corresponding component.

  <details style="padding-left: 2em">
    <summary>Tip</summary>
The state for which component is to be displayed will live in the App component, but the setting of that state will be done from the Header component. Consider how you can pass the setState function to the Header.
  </details>

---

## Kata One - Fun with Numbers

### User Story

As a user, when I open the main page I should see a number displayed on screen, and some buttons with math operations on them ("x5", "-2" etc).

When I click on the buttons the number displayed onscreen should change accordingly e.g. if the number is currently 2 and I press a button saying "x5" the number should change to 10.

---

## Kata Two - Pixel Party

### User Story

As a user, when I open the main page I should see 5 coloured squares.

When I click on one of the squares, it should change to another random colour.

When I double click on a square it should turn black permanently.

When I right click on a square it should chan to a random colour even if it was a locked black square.

  <details style="padding-left: 2em">
    <summary>Tip</summary>
Each square("pixel") will be its own component and the state for the `color` will live inside that component.

Consider keeping the status of the pixel in the component as well, so it can remember if it's been locked to black or not.

  </details>

## Kata Three - List Shenanegans

### User Story

As a user, when I open the main page I should see 2 lists.

When I click on the associated button for each list item, the item should move to the other list.

The lists should remain in alphabetical order whenever any items are moved.

  <details style="padding-left: 2em">
    <summary>Tip</summary>
Each list will be a separate array in state.
  </details>

---

## Kata Four - Neglect the Pumpkin - oooo0000ooooo0000ooo

### User Story

As a user, when I open the main page on Halloween I should see 3 pumpkins.

When I click on each pumpkin it should cycle through the increasing stages of
decay, and once fully gross, it should return to its original state.

Each pumpkin must decay independently of the others.

  <details style="padding-left: 2em">
    <summary>Tip</summary>
- Consider making your state for this component in the form of an object.
- When updating state, use the spread operator

  </details>

---

[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=react-kata)
