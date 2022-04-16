# FEC - Front End Capstone

## Authors
Made with love by:

Pascal Bui - https://github.com/RphPandan
Minggui Yactayo - https://github.com/9gramsof
Raymond Yee - https://github.com/graample


## Overview

This Front-End Capstone project was made during the senior phase of the Hack Reactor Software Engineering Immersive (RFP2202).
The objective of this project was to build a fully functioning retail application catering to client specifications.
Each team member built key components (Overview, Questions & Answers, Ratings & Reviews) in a single code base to produce a fully featured, polished, and deployed application.

This project was built from scratch. With the objective in mind and maintaining learning as a priority, the team decided to take on the challenge of a non-UI based project and strengthen essential front-end concepts. Rather than using frameworks like Bootstrap or Material UI to facilitate styling, the team instrumented styled-components and raw CSS to implement the uniformity, theme, and design of the application.


## Description

In its essence, this application mirrors that of a retail page. When a user browses a desired product, the information displayed on the page will ultimately decide whether the user will buy a product or not. This application encapsulates the information the user needs in order to make an informed decision in three main components: Overview, Questions & Answers, and Ratings & Reviews.

The Overview Component main feature is the image carousel. Using the sidebar thumbnails to select a product style, the carousel will reflect that selection by displaying that current products list of photos. Navigation of the carousel can also be achieved by the mini thumbnail carousel overlaid at the bottom of the carousel. Product name, information, features, description, prices are all dynamically rendered depending on which product is being displayed at the time. The prices displayed is furthermore dependent on the selected style thumbnail at the time as some styles may be on sale. The bottom of the sidebar features the cart module. Users will navigate through 2 selection drop down menus. Before a quantity can be chosen, a size or sku must be selected first. Activating the add to cart button before a sku is selected with open up a modal displaying the skus that are currently in stock for that product.

Furthermore in the Questions & Answers, a user can view a list of questions loaded for the specified product loaded onto the page. Each question contains a helpfulness value which can be incremented by clicking “Yes” next to its number. A question can also be reported, which will un-render the question from the page. To load more questions, the user simply needs to click the “More Answered Questions” button at the bottom of the list. To add an answer, the user clicks “Add A Question”, which will spawn a modal in its location. Here, the user can fill out a form consisting of the question, their name, and their email. Upon clicking submit, a POST request is sent to the Atelier API and is added to the online database.
Each question also contains a list of answers, detailing the answerer’s name, answer date, and value for helpfulness. The helpfulness value can be incremented in the same way as its parent question, as well as be reported. To load more answers, the user simply needs to click “Load more answers” to load the rest of the answers. Clicking “Add an Answer” will cause a modal to spawn in its location. The user can write in their answer to the question, as well as their name and email. Up to 5 supporting photos can be added to each answer. Clicking submit will send a POST request to the Atelier API and add the answer information to the online database.

Lastly, in Ratings & Reviews, the user has the ability to write, read, and browse through reviews for the product. The Ratings component on the left side of this module encompasses a summary of review ratings the product was given by other users. The Ratings stars, percentage of recommendations, the Rating breakdown by stars and the product characteristics are dynamically rendered to the page on a formatted and styled platter. The Reviews component on the right side of this module showcases reviews two at a time. Clicking on the Sort button allows the user to sort the reviews by newest, helpful, and relevant. Each review tile, from top-left to bottom-right, includes the review’s rating, username, date posted, summary, review body, images (if any), whether the user recommended the product or not, a helpful button for other users to click on, and a Report button to report any inappropriate reviews. When the user clicks on a review image, the selected image renders on a modal allowing the user to see the image on a bigger size. Below the review tiles, there are two buttons “More Reviews” and “Add a Review”. Clicking on the “More Reviews” button increases the number of reviews rendered to the page two at a time. Clicking on “Add a Review” prompts a form to open as a modal. The user can include their experience with the product: rating, recommendation, how different characteristics fit them, and write their overall experience with the product.


## Installation

When starting this application. Please follow these steps:
Install the dependencies in webpack by running the command ‘npm install’ in the root’s path directory.
In order to utilize the API calls made to the end-point you will require a Github API key.
Please follow this link to make a Github API token before proceeding: 
https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
Once you have your token, rename the file “Example.env” to “.env” and insert your token inside as prompted.
Proceed to start the server by running “npm run server-dev” in the root’s path directory.
Finally to start the application run “npm run client-dev” in the root’s path directory.

Following these steps will prompt the application to open in your Chrome Browser or you can navigate to the application by typing “http://localhost:8080/” on your navigation bar. 


## Stack

### Version
ES6 on both server-side and client-side
Transpile with Babel (via Webpack)

### Linting
Eslint
stylelint

### Front-end
ReactJS
Styled-components
Style-loader
Css-loader
React-dom
React-icons
React-styled-typography
renpm
axios
Moment
Cors
dotenv

### Asset compilation + loading
Webpack
Webpack-dev

### Server
NodeJS
ExpressJS
nodemon

### Version Control
Github

### Testing Suite
Jest
Enzyme
React testing-library

### Whiteboarding
Excalidraw

