# Potion
![example workflow](https://github.com/cchun01/Potion/actions/workflows/node.js.yml/badge.svg)

## About Potion
Potion is a note taking platform aimed to help all types of people be organized and productive. We focused on taking a minialistic approach to allow users to work in a simple, yet aesthetically pleasing environment. Our platform allows users to create new notes, save them, update past notes, and delete notes that are no longer needed. Notes are very open ended, meaning that users can create lists, bullet points, paragraphs, and more. We built this application with the belief that organization and productivity should be easy. Potion is a flexible tool where you can store your notes in a simple way that suites you best. 

## UI Prototype
Last Updated: 02/21/22
https://www.figma.com/proto/qqIUoBpYVaosfZcsPngPzK/Potion-V2?node-id=6%3A7&scaling=contain&page-id=0%3A1&starting-point-node-id=6%3A7&show-proto-sidebar=1

## Diagrams
https://github.com/cchun01/Potion/wiki/Diagrams

## Linter
The Potion team is using the Prettier ESLint extension available in VSCode. (https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint).
It uses the default Prettier ESLint code style. To install it on your own computer, download the Prettier ESLint extension in VSCode. Set it as the default formatter by opening a js file and pressing  CTRL + SHIFT + P (Windows/Linux) or CMD + SHIFT + P (macOS). Type "Format Document With" and click on "Configure Default Formatter" to change it to "Prettier ESLint."

## Set up Development
* In a new folder, run `git clone https://github.com/cchun01/Potion.git`
* Start the front end
    * Navigate to the frontend folder (`cd react-frontend`) and run `npm install` to install all of the package dependencies
    * Next run `npm start` to start up the front end
    * Note: At this point you should get redirected to http://localhost:3000/ and the main page should open up.
* Start the back end
    * Navigate to the backend folder (`cd backend`) and run `npm install` to install all of the package dependencies
        * Note that to start our backend you will need access to our .env so make sure that is added
    * Next run `nodemon index.js` to start up the backend
    * The console should say "Successful Connection :)" if you have the backend set up correctly or go to http://localhost:3001/ and you should see "Hello world!"
* Once you have both the front end and backend running you should be able to navigate http://localhost:3000/ and make changes to the users and notes


## Testing the Backend
Run `npm test` before pushing any code and it will run all api tests as well as code coverage (will be ~90% since some lines are unreachable)

## Tests
<img width="517" alt="test's passing" src="https://user-images.githubusercontent.com/32439851/157118489-44a85280-073c-4c75-a266-4fb2480bb9eb.png">
We have 92% code coverage on our test in our backend. The 8% that is not covered is cases where the MongoDB connection failed, or where an API post failed. In these cases we print out the error messages, but we are unable to test out the failures.
