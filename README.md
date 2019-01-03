# BACKPACKERS

[API.md](/docs/API.md)

## Modules installation

Use the following command to install packages in front_backpackers and back_backpackers folders.

```bash
  npm install
```

Use the following command to install db-migrate in back_backpackers folder. It's for migration database data.

[db-migrate source](https://db-migrate.readthedocs.io/en/latest/)

```bash
  npm install db-migrate --save-dev
  npm install db-migrate-mysql --save-dev //For MySQL users
```

(Optionnal) Use the following command to install nodemon in back_backpackers folder. It's for restart server automatically when you save your files.

[nodemon source](https://github.com/remy/nodemon)

```bash
  npm install --save-dev nodemon
```

## Database installation

First, create a database in a database management application.

Create an .env file in back_backpackers folder, write and replace the following fields.

```bash
  DB_HOST=yourlocalhost
  DB_USER=yourroot
  DB_PASS=yourpassword
  DB_DATABASE=yourdatabasename
```

Use the following command to create all tables and fields of our database.

```bash
  npm run migrate up
```

To undo the migrations.

```bash
  npm run migrate down
```

## Use the website

Use the following command to use the website on front side.

```bash
  npm start
```

And use the following command to start your server on back side.

If you don't use nodemon :

```bash
  node connection.js
```

If you use nodemon :

```bash
  npm run nodemon
```
