This project was bootstrapped with Create React App.

Below you will find some information on how to perform common tasks.
You can find the most recent version of this guide here.

Create React App is divided into two packages:

create-react-app is a global command-line utility that you use to create new projects.
react-scripts is a development dependency in the generated projects (including this one).
You almost never need to update create-react-app itself: it delegates all the setup to react-scripts.

When you run create-react-app, it always creates the project with the latest version of react-scripts so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of react-scripts.

For the project to build, these files must exist with exact filenames:

public/index.html is the page template;
src/index.js is the JavaScript entry point.
You can delete or rename the other files.

You may create subdirectories inside src. For faster rebuilds, only files inside src are processed by Webpack.
You need to put any JS and CSS files inside src, otherwise Webpack won’t see them.

Only files inside public can be used from public/index.html.
Read instructions below for using assets from JavaScript and HTML.

n the project directory, you can run:

npm start or yarn start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

 instead of npm you can also add all the dependencies using the yarn add command.


This Application is done in several parts
  1. Scaffolding the react application with redux and redux-saga (which is a middleware)
  2. Implementing the product feature
  3. Implementing add to cart feature

  A. Creating the Product Api
      1. This part of the application will be responsible in fetching the products
      2. async keyword to get rid off all promise callback functions
    
  B. Create the Mock Data
      can be either created by 
      1. json-generator which would be an easy process to generate an array of objects.
      2. json-server which simulates a backend server and a REST API with a simole JSON file

          use npm install -g json-server (choose a different port or it runs on the default port 3000)

          I followed a blog "https://scotch.io/tutorials/json-server-as-a-fake-rest-api-in-frontend-development"
      
  C. Product actions and Reducer
      create Actions to fetch the car details and a state
        1. fetch the car-details
        2. add car-details to the cart
        3. fetch the added details of the cart
  D. Product saga.. Which handles the side effects
      fork a generator to watch* for fetch_products actions
      install the styled-components (npm -i styled-components -ts)
    
  E. Cart API to fetch and add Products
      1. Create two functions to get from the global storage and save it to the local storage
      2. The cart will have one item productId and other will be the quantity

  F. creating Cart Actions,reducers and Sagas
      1. add the Cart actions and fetch_cart and Add_to_cart in the actiontypes.js
      2. The action.js will contain the action creators to map the action constants

    these will have the success and failure actions

  G. Create the components CartTable and the ProductGrid
      which will have the car name, price and availability of the car.

      A key should be generated in loop event and with an unique id.

  

  


