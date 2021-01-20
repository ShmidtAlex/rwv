# rwv

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Install json-server

  npm install -g json-server

### Run json-server

  json-server --watch db.json

### Delay imitation on json-server
  
  json-server -d { delay millisecons } db.json

## Content:
  
  Vuex organization
  Routing
  Pagination
  Progress bar with 3 ways: a) axios interceptors
                b) in-component Route Guards
                c) global and Per-Route Guards

## Extra tasks (not implemented yet):

  caching for routing during pagination
  implement vuex namespasing