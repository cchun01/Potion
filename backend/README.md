Instructions for running backend!

* make sure you are in the backend directory
* install packages with `npm install`
    * if that doesn't work basically you need to install `npm i --save-dev nodemon` and `npm i mongoose` and `npm i express`
* then run `npm run dev`
    * this should say "Successfully connected :)"
* then go to http://localhost:3001/ and you should see "Hello world!"

Go to https://cloud.mongodb.com/v2/619ae185fa35112380cf7d59#metrics/replicaSet/620e8b0e419c9222030d7270/explorer/Potion/Users/find and use the credentials in the env file to see the data base!


To test the API calls, use Postman or Boomerang for Chrome or Rested for Firefox. Here are some sample ones to run:
* GET: `http://localhost:3001/api/users` gives you all users
* GET: `http://localhost:3001/api/users/Rachel` gives you first user named Rachel
* POST: `http://localhost:3001/api/newUser` and the body has to be filled with the new user information