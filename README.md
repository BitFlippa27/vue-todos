# Vue Todos

Vue Todos is a simple, yet powerful, task management application using the latest techologies from the Vue.js ecosystem.

## Features

- **Task Management:** Users can add, edit, and delete tasks. Each task has a title, completion status, priority level, and creation date.
- **Task Prioritization:** Users can set the priority of each task to high, medium, or low. 
- **Task Completion:** Users can mark tasks as completed.
- **Task Filtering**: Users can filter tasks by date.


## Technical Details

- **Vue 3:** The application uses Vue 3, the latest version of Vue.js. Vue 3 offers improved performance, smaller bundle sizes, better TypeScript integration, and more.
- **Composition API**: The application uses Vue's Composition API, which provides a set of additive, function-based APIs that allow flexible composition of component logic. An alternative to the Options API.
- **Pinia**: The application uses Pinia for state management. Pinia provides a simpler and more intuitive API than Vuex, making state management easier and more efficient. 
- **Vue Router**: The application uses Vue Router for routing. Vue Router allows the application to have multiple pages and navigate between them.
- **Vite:** The application uses Vite for building and development. Vite offers fast hot module replacement, rich feature set, and great development experience. 
- **Tailwind CSS**: The application is styled with Tailwind CSS, a utility-first CSS framework for rapidly building custom designs.

## Workflow
- The App fetches todos from the https://jsonplaceholder.typicode.com/todos API which are marked with a property if they are completed or active.
-  Based on their completion status the todo is rendered on either the one or the other route/view. (ActiveTodos.vue and CompletedTodo.vue)
-  The App manages all in one state array. So the filtering by date, filtering by priority and distinguishing between active and completed todos is all derived from that one initial state array which is fetched from the API.

## Futher Improvements
- Maybe adding two state arrays. One array for the completed todos and one for the actives.
- Modal before deleting todo
- Specific filterng of todos by priority high to low, sorting by date new to old
- Loading spinner for loading state 
- Clickable Logo which redirecte to Home
- Proper ids, not Math.random()
- Search symbol for search
- Error in state
- Use utility functions and then import into the store
- Not pass the whole array into the filter functions, pass a boolean to tell which array an then in the store getters filter from the state
- And See Issues https://github.com/BitFlippa27/vue-todos/issues

  
### URL to the app
https://vue-todos-sit.vercel.app/
