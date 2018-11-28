# backpackers

[API.md](/docs/API.md)

## Modules installation

Use the following command to install packages in front_backpackers and back_backpackers folders.

```bash
  npm install
```

## Database installation

Open .env.dev file in back_backpackers folder and replace the following fields.

```bash
  DB_HOST=yourlocalhost
  DB_USER=yourroot
  DB_PASS=yourpassword
  DB_DATABASE=yourdatabasename
```

Rename .env.dev file .env .
<br />Use the following command to create all tables and fields of our database.

```bash
  npm run migrate up
```

To undo the migrations.

```bash
  npm run migrate down
```

## Use the website

Use the following command to use the website.

```bash
  npm start
```
