# MyFirstBlog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

MyFirstBlog is a dynamic online blogging platform where users can sign up, create blog posts, and interact with the community by leaving comments on posts. It leverages a MySQL database to store user data, posts, and comments securely, with bcrypt for hashing passwords to enhance security. This application follows the MVC paradigm and uses Handlebars.js for templating, Sequelize as the ORM, and express-session for session management.

![blog1](https://github.com/McKee-T/blog-app/assets/144379790/28ac6fca-e8a1-40d7-9c1a-fc3fb6e939b1)
![blog2](https://github.com/McKee-T/blog-app/assets/144379790/ff0d6732-856e-4e4a-8a65-cff7f85a37fd)
![blog3](https://github.com/McKee-T/blog-app/assets/144379790/381cc269-b0fb-4415-b89c-453bb67356da)
![blog4](https://github.com/McKee-T/blog-app/assets/144379790/20685a45-cf44-4670-9af7-b7e7032e77a3)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Features

- User authentication for secure login and registration.
- Ability to create, view, edit, and delete blog posts.
- Option to comment on blog posts, fostering community interaction.
- Responsive design for a seamless experience on desktop and mobile devices.

## Installation

### Local Setup

1. Clone the repository to your local machine.
2. Install the necessary npm packages by running `npm install`.
3. Create a `.env` file in the root directory with the following MySQL credentials:

DB_NAME='blog_db'

DB_USER='your_mysql_username'

DB_PASSWORD='your_mysql_password'

4. Log into your MySQL shell with `mysql -u root -p` and enter your MySQL password.
5. Source the schema by running `source db/schema.sql`.
6. Exit the MySQL shell and seed the database with `npm run seed`.
7. Start the application with `npm start`.

### Deployment on Heroku with JawsDB

1. Create a new application on Heroku.
2. Attach the JawsDB MySQL add-on to your Heroku application to set up the MySQL database.
3. Ensure the `JAWSDB_URL` environment variable is set (this is done automatically when you attach JawsDB).
4. Deploy your application code to Heroku.
5. Access your deployed application via the Heroku app URL.

## Usage

Once installed, the application allows users to:

- **Sign Up/Log In**: Securely create an account or log in to an existing account.
- **Create Posts**: Write and publish blog posts on the platform.
- **View Posts**: Browse through all the blog posts made by the community.
- **Interact**: Leave comments on posts to engage with other users.

## Contributing

Currently, we are not accepting contributions to this project.

## Future Development

The CSS/overall styling could certainly use some work to look better, but decisions had to be made to get this out.  Hopefully I will have time to go back and make everything look better.

## Questions

For any questions or comments, please contact me at [Tmckee3232@gmail.com](mailto:Tmckee3232@gmail.com).

You can also find more of my work on GitHub at [McKee-T](https://github.com/McKee-T).

## License

This project is licensed under the MIT license. For more information, please refer to the [license page](https://opensource.org/licenses/MIT).



