# Ebyrt task-manager

  Task manager that allows the user to sign in, log in, add a task, delete, and update it's state (still no task subject editing option implemented)
 
 # Techs used
 
 * React
 * Redux
 * React Router
 * Express.js
 * Sequelize
 * Node.js
 * MySQL
 
# How to run and test the application:

 * Clone this rep: (SSH) `git clone git@github.com:SamuelDAlencar/ebyrt_test.git` in the terminal
 > This project runs using `docker`
 * Run these steps in order:
   1. Run `docker-compose up -d` inside the rep folder
   2. Now, to load the database and prepare it for usage, run `npm run pre:start`
  > If an error occurs saying that the port is on use, check if there's other application running on port `3001` and/or on ports `3306` and `3000` (all the ports used in this project)

Now the page, api and database should be already running, to access the page, enter the `http://localhost:3000/user/signup` url
  > Note, you can't add or delete tasks if you aren't logged in, so first create an account. If you already signed in but restarted the page, access the url `http://localhost:3000/user/signup` to recover the token
