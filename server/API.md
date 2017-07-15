# HacktivOverflow

## API (BackEnd)

### User API

Method | URL | Description
------------ |
GET | ```/api/users``` | admin
GET | ```/api/users/:id``` | admin
POST | ```/api/users``` | admin
PUT | ```/api/users/:id``` | user(self id only) and admin
DELETE | ```/api/users/:id``` | admin

### Question

Method | URL | Description
------------ |
GET | ```/api/questions``` | admin
GET | ```/api/questions/:id``` | admin
POST | ```/api/questions``` | admin
PUT | ```/api/questions/:id``` | user(self id only) and admin
DELETE | ```/api/questions/:id``` | admin

### Answer

Method | URL | Description
------------ |
GET | ```/api/answers``` | admin
GET | ```/api/answers/:id``` | admin
POST | ```/api/answers``` | admin
PUT | ```/api/answers/:id``` | user(self id only) and admin
DELETE | ```/api/answers/:id``` | admin

### Vote

Method | URL | Description
------------ |
GET | ```/api/votes``` | admin
GET | ```/api/votes/:id``` | admin
POST | ```/api/votes``` | admin
PUT | ```/api/votes/:id``` | user(self id only) and admin
DELETE | ```/api/votes/:id``` | admin
