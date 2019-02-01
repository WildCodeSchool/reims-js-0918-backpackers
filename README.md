# BACKPACKERS

[API.md](/docs/API.md)

## Modules installation

Use the following command to install packages in front_backpackers and back_backpackers folders.

```bash
  npm install
```

## Database installation

First, create a database in a database management application and set it's encoding to utf8_general_ci.

Create an .env file in back_backpackers folder, write and replace the following fields.
Go visit https://dash.pusher.com/authenticate and create an account, as well as a ChatKit Instance, look for your Chat Intance Locator Key and your Secret Key and add them to the .env .

```bash
  DB_HOST=yourlocalhost
  DB_USER=yourroot
  DB_PASS=yourpassword
  DB_DATABASE=yourdatabasename
  CHAT_INSTANCE_LOCATOR=yourChatInstanceLocator
  CHAT_SECRET_KEY=yourChatSecretKey
```

Use the following command to create all tables and fields of our database.

```bash
  npm run migrate up
```

To undo the migrations.

```bash
  npm run migrate down
```

## Stting Up the Front

Go to the .env in the /front folder and add set your key and Back Server URL :

```bash
REACT_APP_INSTANCE_LOCATOR=yourInstanceLocatorOfChatKit
REACT_APP_API_URL=urlOfYourBackServer
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
