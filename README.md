
## About the project

Backend of the GithubExplorer application, that allows you to search and store information from github repositories using user's names. Built with Node.Js, Typescritp, Typeorm and Postgres database.

## Installation

The following steps will help install and run GitHubExplorer-backend on your local computer. Make sure database instances are active:

1. git clone https://github.com/Caxandre/GitHubExplorer-backend.git;

2. Install all project dependencies with *npm install* or *yarn install*;

3. Enter the database settings in the file *ormconfig.json*;

4. Create migrations with *npm typeorm migration:run* or *yarn typeorm migration:run*;

5. Start the development server with *npm dev:server* or *yarn dev:server*.

## Endpoints

* GET /repositories

Returns Array ->
```json
[
	{
   "id":"4bd0e13f-8910-4560-be4b-853a59958e62",
   "full_name":"Caxandre/MeetApp",
   "description":" Meetap Project for Rocketseat bottcamp",
   "stargazers_count":0,
   "forks_count":0,
   "open_issues_count":8,
   "owner_login":"Caxandre",
   "owner_avatar_url":"https://avatars2.githubusercontent.com/u/10872933?v=4",
   "last_update":"2019-08-24T17:31:08.000Z",
   "created_at":"2020-06-09T22:46:16.633Z",
   "updated_at":"2020-06-09T22:46:16.633Z",
   "contributors":[
      {
         "id":"f49d5643-295f-4d65-9040-5e8ea8ddd8d3",
         "repository_id":"4bd0e13f-8910-4560-be4b-853a59958e62",
         "login":"Caxandre",
         "avatar_url":"https://avatars2.githubusercontent.com/u/10872933?v=4",
         "html_url":"https://github.com/Caxandre",
         "created_at":"2020-06-09T22:46:16.960Z",
         "updated_at":"2020-06-09T22:46:16.960Z"
      }
   ],
   "pulls":[
      {
         "id":"694e2c75-2de8-49ac-8322-f20d6f745cbc",
         "repository_id":"4bd0e13f-8910-4560-be4b-853a59958e62",
         "title":"Bump websocket-extensions from 0.1.3 to 0.1.4 in /web",
         "html_url":"https://github.com/Caxandre/MeetApp/pull/8",
         "number":8,
         "state":"open",
         "created_at":"2020-06-09T22:46:16.876Z",
         "updated_at":"2020-06-09T22:46:16.876Z"
      }
    ]
  }
]
```

* POST /repositories

Sending Body ->
```json
{
  "full_name":"Caxandre/MeetApp",
  "description":" Meetap Project for Rocketseat bottcamp",
  "stargazers_count":0,
  "forks_count":0,
  "open_issues_count":8,
  "last_update":"2019-08-24T17:31:08.000Z",
}
```

Returns Object ->
```json
{
  "id": "02373b3b-8a85-4c49-b75e-8d3d5e87eb53",
  "full_name": "Caxandre/MeetApp",
  "description": "25",
  "stargazers_count": 25,
  "forks_count": 36,
  "open_issues_count": 394,
  "owner_login": "Caxandre",
  "owner_avatar_url": "https://avatars2.githubusercontent.com/u/10872933?v=4",
  "last_update": "2019-08-24T17:31:08.000Z",
  "created_at": "2020-06-09T23:13:43.923Z",
  "updated_at": "2020-06-09T23:13:43.923Z",
  "contributors": [
    {
      "id": "9014e8bf-8a30-435c-b6d9-e449178c0861",
      "repository_id": "02373b3b-8a85-4c49-b75e-8d3d5e87eb53",
      "login": "Caxandre",
      "avatar_url": "https://avatars2.githubusercontent.com/u/10872933?v=4",
      "html_url": "https://github.com/Caxandre",
      "created_at": "2020-06-09T23:13:43.990Z",
      "updated_at": "2020-06-09T23:13:43.990Z"
    }
  ],
  "pulls": [
    {
      "id": "0f97a8c0-1bd8-4355-867c-c66f392b0300",
      "repository_id": "02373b3b-8a85-4c49-b75e-8d3d5e87eb53",
      "title": "Bump websocket-extensions from 0.1.3 to 0.1.4 in /web",
      "html_url": "https://github.com/Caxandre/MeetApp/pull/8",
      "number": 8,
      "state": "open",
      "created_at": "2020-06-09T23:13:43.972Z",
      "updated_at": "2020-06-09T23:13:43.972Z"
    }
  ]
}
```
* GET /repositories/:id
Sending -> '/repositories/02373b3b-8a85-4c49-b75e-8d3d5e87eb53'

Returns Object ->
```json
{
  "id": "02373b3b-8a85-4c49-b75e-8d3d5e87eb53",
  "full_name": "Caxandre/MeetApp",
  "description": "25",
  "stargazers_count": 25,
  "forks_count": 36,
  "open_issues_count": 394,
  "owner_login": "Caxandre",
  "owner_avatar_url": "https://avatars2.githubusercontent.com/u/10872933?v=4",
  "last_update": "2019-08-24T17:31:08.000Z",
  "created_at": "2020-06-09T23:13:43.923Z",
  "updated_at": "2020-06-09T23:13:43.923Z",
  "contributors": [
    {
      "id": "9014e8bf-8a30-435c-b6d9-e449178c0861",
      "repository_id": "02373b3b-8a85-4c49-b75e-8d3d5e87eb53",
      "login": "Caxandre",
      "avatar_url": "https://avatars2.githubusercontent.com/u/10872933?v=4",
      "html_url": "https://github.com/Caxandre",
      "created_at": "2020-06-09T23:13:43.990Z",
      "updated_at": "2020-06-09T23:13:43.990Z"
    }
  ],
  "pulls": [
    {
      "id": "0f97a8c0-1bd8-4355-867c-c66f392b0300",
      "repository_id": "02373b3b-8a85-4c49-b75e-8d3d5e87eb53",
      "title": "Bump websocket-extensions from 0.1.3 to 0.1.4 in /web",
      "html_url": "https://github.com/Caxandre/MeetApp/pull/8",
      "number": 8,
      "state": "open",
      "created_at": "2020-06-09T23:13:43.972Z",
      "updated_at": "2020-06-09T23:13:43.972Z"
    }
  ]
}
```

* DELETE /repositories/:id

## Packages

Express - [https://github.com/expressjs/express]

ExpressJS Async Errors - [https://github.com/davidbanham/express-async-errors]

Cors - [https://github.com/expressjs/cors]

Axios - [https://github.com/axios/axios]

Metadata Reflection API - [https://github.com/rbuckton/reflect-metadata]

Typeorm - [https://github.com/typeorm/typeorm]

## Contact

Carlos Perrout - [Github](https://github.com/Caxandre) - **carlosperrout@gmail.com.br**
