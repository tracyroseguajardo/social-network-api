# social network api
  ![license badge](https://img.shields.io/badge/license-Mozilla_Public_License_2.0-yellowgreen.svg)

## Description
This appliation creates a social network API back end that focuses on using MongoDB to store large amounts of unstructured data via Mongoose models. All necessary routes are in place to perform CRUD operations on users and their generated content. There is also the ability to work within these User and Thought models using virtuals to provide the functionality to add other users to a friends list. Additionally, users can add reactions to other user's main content, which is achieved using subdocs. All endpoints are fully operational.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Visuals](#visuals)

## Installation
To run this application, open the integrated terminal in the root. Begin by installing all dependencies from the package.json by typing the command npm i in the terminal; this will generate a package-lock.json. Next type npm start in the terminal to launch the server. If everything loads properly, you should be directed to port 3001. Since there is no front end, we will use Insomnia to test our routes. That process will be outlined below in Usage.

## Usage
Here we will walk through all of the possible endpoints to test and how to properly input the necessary keys & values in Insomnia. 

endpoint: localhost:3001/api/users/
We can perform two operations from this endpoint.
- GET all users >> no data will be passed in to Insomnia
- POST to create a new user >> will require the following data formation: 
```json
{
  "username": "selena",
  "email": "lareina@email.com"
}
```

endpoint: localhost:3001/api/users/:userId
From this endpoint we can find a user, update a user and delete a user.
- GET single user by id >> no data will be passed in to the json body. The user id is a param found from the URL
- PUT user by id >> here you can update either the user's email or username or both. Simply pass the necessary key(s) and the updated value(s) in the same format as we did when creating the user above.
- DELETE single user >> no data will be passed in the body.

endpoint: localhost:3001/api/users/:userId/friends/:friendId
This endpoint allows us to manipulate a single user's friends list
- POST to allow a user to add another user to their friends list >> no data will be passed through, the user id are the only necessary params and are found in the endpoint URL
- DELETE to allow a user to remove another user from their friends list >> no data will be passed through, the user ids are the only necessary params and are found in the endpoint URL

endpoint: localhost:3001/api/thoughts/
- GET all thoughts >> no data will be passed in to Insomnia
- POST to create a new thought >> will require the following data formation: 
```json
{
  "thoughtText": "Anything for Selenas",
  "username": "quintanillaFan",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

endpoint: localhost:3001/api/thought/:thoughtId
From this endpoint we can find a user, update a user and delete a user.
- GET single thought by id >> no data will be passed in to the json body. The id is a param found from the URL
- PUT thought by id >> here you can update the thought text or the username or both. Simply pass the necessary key(s) and the updated value(s) in the same format as we did when creating the thought above.
- DELETE single thought >> no data will be passed in the body.

endpoint: localhost:3001/api/thoughts/:thoughtId/reactions
From this endpoint we can create and delete reactions
- POST new reaction >>
```json
{
  "reactionBody": "por supuesto",
  "username": "chrisperez",
}
```
- DELETE reaction >> no data will be passed in the body.

## License
  
  This project uses the Mozilla_Public_License_2.0 license. 
  **If you have questions on the license please check the following site [choose a license](https://www.google.com)

## Contributing

If you wish to contribute feel free to reach out to me via email, found below.

## Tests

There are no tests in place for this application.

## Questions

Please feel free to explore my other projects on github: [tracyroseguajardo](https://www.github.com/tracyroseguajardo)

If you have further questions you may send me an email at: tracyroseguajardo@gmail.com

## Visuals

Link to deployed application:
[social network api](https://github.com/tracyroseguajardo/social-network-api)