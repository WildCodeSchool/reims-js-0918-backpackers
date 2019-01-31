# Routes

> /places
>
> (GET: Récupérer la liste des lieux)
>
> (POST: Ajouter un lieu)

```javascript
  {
    idPlace:
    name:
    adress:
    price:
    type:
    capacity:
    description:
    contact:
    rating:
  }
```

> /places/search/:city (GET: Rechercher un lieu par ville)

```javascript
  [{
    idPlace:
    name:
    adress:
    price:
    type:
    capacity:
    description:
    contact:
    rating:
  }]
```

> /places/:id (GET: Récupérer la page d'un lieu)
>
> /activities
>
> (GET: Récupérer les activités)
>
> (POST: Ajouter une activité)

```javascript
 {
  idActivity:
  idPlace:
  name:
  price:
  type:
  capacity:
  description:
  contact:
  rating:
  creator:
  participants:
  date:
 }
```

> > /activities/search/:city (GET: Récupérer les activités par ville)

```javascript
  [{
    idActivity:
    idPlace:
    name:
    price:
    type:
    capacity:
    description:
    contact:
    rating:
    creator:
    participants:
    date:
  }]
```

> /activities/:id (GET: Récupérer la page d'une activité)
>
> /activities/:id/join (POST: Ajouter une participation)

```javascript
  {
    idUser:
    firstname:
    lastname:
    picture:
  }
```

> /activities/:id/chat
>
> /activities/:id/rate (POST: Ajouter une note à une activité)

```javascript
  {
    idUser:
    rating:
  }
```

> /profile/:user (GET: Récupérer la page d'un utilisateur)
>
> /profile/:user/messages
>
> /profile/:user/calendar
>
> /profile/:user/favorites (PUT: Ajouter les coups de coeurs)
>
> /profile/:user/invitations (GET: Récupérer les demandes)
>
> /profile/:user/update (PUT: Mettre à jour les infos utilisateurs)
>
> /profile/:user/rating (POST: Ajouter une notation)
