
## Description
Hacktiv overflow is a web app which is like stackoverflow. It's a forum like where you can post question, answer, and vote question and answer.

## Technology i used
In backend: I use PostGresQL as database, Sequelize as ORM, and ExpressJS as server
In front end: I use vue and bootstrap as UI framework and use vue-router and vuex for state management

for authentication and authorization i use jsonwebtoken and bcrypt for 

## How to Use

To start server
```
cd server
npm install
npm run dev
```
server will run at ```localhost:3000```

API end Point

### User end point

Method | url | Description 
------------ | ------------- | -----
GET | ```/api/users``` | get all user (admin only)
GET | ```/api/users/:id```| get one user (admin & authorized user only)
POST | ```/api/users/login```| public
PUT | ```/api/users/register```| public
DELETE | ```/api/users/:id```| Authorized user only

### Question end point

Method | url | Description 
------------ | ------------- | -----
GET | ```/api/questions``` | public
GET | ```/api/questions/:id```| public
POST | ```/api/questions/```| Authorized user only
PUT | ```/api/questions/:id```| Authorized user only
DELETE | ```/api/questions/:id```| Authorized user only


### Answer end point

Method | url | Description 
------------ | ------------- | -----
GET | ```/api/answer``` | public
GET | ```/api/answer/1```| public
POST | ```/api/answer/```| Authorized user only
PUT | ```/api/answer/1```| Authorized user only
DELETE | ```/api/answer/1```| Authorized user only


### Question Vote end point

Method | url | Description 
------------ | ------------- | -----
POST | ```/api/q_votes/```| Authorized user only
PUT | ```/api/q_votes/:id```| Authorized user only

### Answer Vote end point

Method | url | Description 
------------ | ------------- | -----
POST | ```/api/a_votes/```| Authorized user only
PUT | ```/api/a_votes/:id```| Authorized user only
