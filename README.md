## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## ENDPOINTS

1.0 - Create Users: (POST)
    127.0.0.1:3000/
    Body (Form URL Enconded)
    username ->
    description ->
    avatar -> 

2.0 - Search all users: (GET)
    127.0.0.1:3000/

3.0 - Search User by ID: (GET)
    127.0.0.1:3000/:id

4.0 - Update User by ID: (PUT)
    127.0.0.1:3000/:id
    Body (Form URL Enconded)
    username ->
    description ->
    avatar -> 

5.0 - Delete User (DELETE)
    127.0.0.1:3000/:id

6.0 - Delete Avatar (DELETE)
    127.0.0.1:3000/:id/avatar
