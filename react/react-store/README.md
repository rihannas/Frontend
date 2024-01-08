# Work Flow

### shortcuts for words

- components = comp

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

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
