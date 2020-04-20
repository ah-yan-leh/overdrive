# Installation steps, by Ayanle

# System Requirements
The only dependencies of the framework are Node.js and npm. Required versions:

> Node.js >= 8.0.0
> npm >= 3.0.0

# Backend steps: 
run this
> npm install
update the .env file with correct environmental values
> 
Set up a MySQL server

# Developer steps:


## Step: 1
AdonisJs CLI is a command line tool to help you install AdonisJs.

Install it globally via npm like so:

> npm i -g @adonisjs/cli

## Step: 2
To create a new application, simply run:

> adonis new appNameHere

## Step: 3
After completion, issue the following commands:

> cd appNameHere



## Step: 4
Install mysql:

> adonis install mysql

## Step: 5
Visit the /.env file and change DB_CONNECTION to mysql: along with setting the database to appNameHere:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=appNameHere


## Step: 6
Call the adonis make:migration command to create a schema file:

> adonis make:migration tableName

When prompted, choose the Create table option and press Enter:
> Choose an action Create table
√ create  database\migrations\1536680712439_tableName_schema.js


## Step: 7
Run migration command to push tables to the DB
> adonis migration:run


## Step: 8
Run command to run app
> adonis serve --dev


## Creating a Model
Use the Adonis CLI to create a new model for newTableName data:

> adonis make:model newTableName

## Creating Controllers
To create a new controller, use the make:controller command:

for HTTP Controller
> adonis make:controller ControllerNameHere --type http


