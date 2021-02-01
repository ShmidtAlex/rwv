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

### Run json-server

	json-server --watch db.json

## Content:
	
  1. Vuex organization
  2. Routing
	3. Pagination
  4. Progress bar with 3 ways: 
        - axios interceptors 
        - in-component Route Guards 
        - global and Per-Route Guards
  5. Validation by Vuelidate library (l8NLV)

## Extra tasks (not implemented yet):

  - caching for routing during Pagination
  - remove vuex from vue-router interaction (l4NLV)
  - setup date picker disallowing not to choose expired dates 
  - ~setup validation for date picker~  
  - add checking if all filed are empty, form submit shouldn't work too
  - set beautiful styles for components and error handlers
  