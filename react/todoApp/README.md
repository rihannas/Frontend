# Exercise Todo App

This is a super simple Todo App to practice these react concepts:

- Components
- Props & States
- Conditional Rendering
- Composition & Specialisation

---

### TodoList.jsx

The TodoList Component is the parent component for the other made component: TodoItem & TodoForm

I use conditional rendering to render based on the some of the states like if the todoList state (which is a list of objects) is not empty it should render the TodoItem component, else it render h5 tag with the text 'no todos'. Another instances are for conditional rendering completed todos and also the do form which is triggered by an event.

I use props to send the states to child component TodoItem. I also send event handler function as props to the children components, so when there is an event occuring inside the children components that needs to change the states in the parent components could be handled.

### TodoItem.jsx

A component that renders each todo with a checkbox to mark the compelition of a task and button to delete the tasks. These events are handled by function that are sent as props from the parent

### TodoForm.jsx

A component that renders a form for the user to add new todos. The even is by handler by a function parent compontent

#### Rating

"Based on the implementation provided, I would rate it a **7 out of 10**. Here are the reasons for the rating and some comments on the implementation:

**Pros:**

1. **Functionality**: The implementation covers the basic functionality of a todo list application including adding new todos, marking todos as completed, and deleting todos.

2. **State Management**: The state is managed properly using React's `useState` hook. The state is updated immutably, which is a good practice in React.

3. **Component Composition**: The components are well-structured and composed together effectively. Each component is responsible for a specific part of the UI and functionality.

4. **Clear Event Handling**: The event handling functions are clearly defined and organized. Each event handler is responsible for a specific action, making the code easy to understand and maintain.

**Cons:**

1. **Unused eslint-disable Comments**: There are eslint-disable comments (`/* eslint-disable react/jsx-key */`) in the `TodoList.jsx` file, but they seem to be unnecessary as there are no instances of missing keys in the JSX.

2. **Code Repetition**: There is some repetition in the code, especially in the `TodoList.jsx` file where the logic for rendering todo items based on their completion status is duplicated. This could be refactored to improve code readability and maintainability.

3. **Component Key Prop**: In the `TodoList.jsx` file, when mapping over the `todoList` array to render `TodoItem` components, it's recommended to provide a unique `key` prop to each rendered component to help React efficiently update the UI. Currently, the `key` prop is missing."
   -- ChatGpt

##### Screenshot

![screenshot](image.png)
