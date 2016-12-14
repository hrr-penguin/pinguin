# Pinguin RSS

# How to install dependencies
sudo npm install webpack -g<br>
npm install<br>

# Starting MySQL Database
mysql.server start<br>
mysql -u root < server/db/schema.sql<br>

# Task Manager, Babelizer, linter, minification
on the command line type<br>
webpack -w (you can just use webpack for running locally, you don't need to use grunt to view the website)<br>
grunt(grunt does deployment stuff, it also executes webpack too)<br>
mocha testing/lint is commented out right now<br>

# To start Server
cd to pinguin<br>
nodemon server/server.js<br>
Server is at http://localhost:8000<br>

# Tech Stack
React<br>
Node<br>
Express<br>
Mysql<br>
Webpack<br>
Grunt(if you feel like using it, not totally necessary to get app working)

# FEATURES we didn't get working but that are in the codebase (at 95% completion)
Commenting on article and save comment into database<br>
Rating article and save rating/rating average into database<br>
Upvoting(yay) / Downvoting(nay)<br>
Selecting whether article is fake or real news.<br>


# FEATURES we wanted but didn't start on (0% completion)
Delete feed<br>
Allow users to have friends and add friends feeds<br>
Page for single feed<br>
Keyboard navigation<br>
Randomizing feed<br>
Grab articles from sites that do not offer RSS feed<br>

