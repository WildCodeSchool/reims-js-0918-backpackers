## ACTIONS

- ADD_PLACE
- CREATE_ACTIVITY
- SEARCH_ACTIVITY
- SEARCH_PLACE
- JOIN_ACTIVITY
- VIEW_ACTIVITY
```javascript
  {
    type: VIEW_ACTIVITY
    activity: [...]
  }
```

- VIEW_PLACE

- FETCH_ACTIVITIES is dispatched when we call the api
- VIEW_ACTIVITIES is dispatched when we receive the api response

```javascript
  {
    type: VIEW_ACTIVITIES
    activities: [...]
  }
```

- FETCH_PLACES is dispatched when we call the api
- VIEW_PLACES is dispatched when we receive the api response

```javascript
  {
    type: VIEW_PLACES
    places: [...]
  }
```

- VIEW_PROFIL

- GET_GEOLOCATION is dispatched when we load the HomePage

```javascript
  {
    type: GET_GEOLOCATION
    coords: []
  }
```

## Reducers

-placesReducer

```javascript
  const initialState: []
```

When VIEW_PLACES is dispatched, state becomes action.places

-activitiesReducer

```javascript
  const initialState: []
```

-activityReducer
```javascript
  const initialState: {}
```

When VIEW_ACTIVITIES is dispatched, state becomes action.activities

-loadingReducer

```javascript
  const initialState: false
```

When FETCH_PLACES is dispatched, state becomes true  
When FETCH_ACTIVITIES is dispatched, state becomes true

-mapReducer

```javascript
  const initialState: []
```

When FETCH_PLACES is dispatched, state becomes true  
When FETCH_ACTIVITIES is dispatched, state becomes true
