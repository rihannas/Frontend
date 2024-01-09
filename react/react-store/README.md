# Work Flow

### shortcuts for words

- components = comp
- function = func

--

1. Create Pages Folder w/ pages in them (home, about product, contact)
2. Create components folder
3. Create nav bar component
4. create layout component so we can render the navbar component inside it, so it renders once
5. Then create routes in the app, by them dowloading using
   `npm i react-router-dom`. Then import BrowserRouter, Routes, Route.
6. Inside the layout component add the navbar component and also <Outlet/> component from react-router-dom. Read what outlet does in the layout component.
7. Update the navbar comp by adding links to the routes we creates in the app comp.
8. Update the products comp, by adding products. You can render the products there but the proper way to do it is by creating a Product card comp where the products are rendered there. And the Product card comp is rendered in the Product page comp.
9. Create the cart comp and add a route for it in the app comp and add a button for it the navbar

Cart functionality:

10. first create a state cart and setCart in the app comp. the state and setter will be passed as props to Product comp and Cart comp.

11. Then from the Product comp pass it to the Product Card comp. Inside the Product Comp we will create an eventHandler function that will be triggered on the onClick event attached to the button where you add a product to the cart. Then we have conditional that checks if the item is add in the cart or no and based on that it will render different text.

12. Inside the Cart comp we use the state to render the products in it using a map func.

_Note_:
Creating the cart functionality like that is an example of prop drilling as there is a prop aka Product comp that doesn't use the prop itself but only passes it onto Product Card.
This can also lead to nested component dependency which means -> If a grandchild component relies on props that are originally passed from the parent, any change in the structure of the components (adding, removing, or rearranging components) might require modifying the prop passing logic.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

13. Add a remove from cart functionality in the cart, by using an event handler.

14. Update contact page about us page

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
