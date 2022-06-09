# Book Bits

## Description 
Looking for a place where you can keep a record of your readings? This interactive full stack application will allow you to do just that! This forum website is here to let users submit reviews on your favorite or least favorite books. You can also comment on other users reviews and discuss your opinions on the books affairs. 


## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Technologies](#Technologies)
* [Contributing](#Contributing)
* [Deloyed link](#Deployed-link)

![Screenshot]()
![Screenshot]()

## Installation 
This application requires the following dependencies: 
    "bcrypt": "^5.0.1",
    "connect-session-sequelize": "^7.1.4",
    "css-star-rating": "^1.3.1",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "express-handlebars": "^6.0.6",
    "express-session": "^1.17.3",
    "handlebars": "^4.7.7",
    "mysql2": "^2.3.3",
    "sequelize": "^6.20.1"

Once the repository is cloned make sure to create a .gitignore and .env file to store your mysql login credentials and tie them to the config/connection.js file. To connect to the database run `mysql -u root -p` and enter you're password. When connected `source db/schema.sql` then exit mysql. You will need to seed the files in the seeds folder so run `npm run seed`. Finally run `npm start` to connect to the server and it should be running on your localhost port.

## License 
N/A

## Technologies 
- Express
- Sequelize
- mysql2
- bcrypt
- css-star-rating
- handlebars

## Contributing 
- Micah Zahn
- Carolyn Hudson
- Kristina Brennan
- Jacob Torgeson
UW Coding Bootcamp 

## Deployed-link
Heroku: [Book-Bits](https://gentle-hollows-05629.herokuapp.com/)
