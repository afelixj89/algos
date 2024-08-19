Practice for React


1. What is react?
 
React is a javascipt library created by Facebook for building user interfaces, especialy single-page applications where you need a dynamic and interactive user experience. Key point for react are.


-Componenet based architecture: React allows you to build complex UIs from small, isolated pieces of code called components.
-Declarative- React makes it easy to create interactive UIs. You design views for each state of your application, and React will update and render the right components when your data changes.
-Virtual DOM- Instead of directly manipulating the browser's DOM(which can be slow), React creates a virtual representation of the DOM and only updates the parts that have changed.
-Unidirectanional Data Flow- React follows a one-way data binding principle, meaning data flows from parent components to child components, making your code easier to debug and maintain.

2.What are components? 

Components are the building blocks of your applications UI. Components let you split the UI into independednt, resusable prieces, and think about each piece in isolation.

Types of Components:

Functional Components: 

-These are simply Javscript functions that accept props as arguments and return React elements(usually written in JSX).
-They are often used for presentational components that render UI.

Class Components: 

-Class components are ES6 classes that extend from 'React.Component'. They can manage their own state and include lifestyle methods.
-Before React 16.8 introduces hooks, class components were the only way to manage state in a components.

Compoents Hierachy:

-Components can be composed togehter. A parent components can include one or more child components. This helps in organizing and reusing code.
