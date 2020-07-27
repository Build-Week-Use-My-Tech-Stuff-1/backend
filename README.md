# backend


## Description

This is the back end documentation 

## Endpoints

| Method | Endpoint                      | Description                                                                                  |
| ------ | ----------------------------  | -------------------------------------------------------------------------------------------- |
| GET    | /api/auth/register            | Creates a `user` using the information sent inside the `body` of the request. password is    |
|        |                               | hashed before saving the user to the database.                                               |
| POST   | /api/auth/login               | Uses the credentials sent inside the `body` to authenticate the user. On successful login    |
|        |                               | creates a new JWT with the user id as the subject and sends it back to the client. If login  |
|        |                               | fails, respond with the correct status code.                                                 |
| POST   | /api/items                    | Uses the JWT sent inside the `header` to authorize the user. On successful authorization, it |
|        |                               | adds a new item to the database. If the user is not logged in, or if the category            |
|        |                               | schema isn't correct, it responds with the appropriate status code.                          |
| POST   | /api/items/id                 | Uses the JWT sent inside the `header` to authorize the user. On successful authorization, it |
|        |                               | adds a message to a specific item listing. If the user is not logged                         |
|        |                               | or if the article schema isn't correct, it responds with the appropriate status code.        |
| PUT    | /api/items/:id                | Uses the JWT sent inside the `header` to authorize the user. On successful authorization, it |
|        |                               | updates the item with provided data. If the user is not logged in, or if the category        |
|        |                               | schema isn't correct, it responds with the appropriate status code.                          |
| DELETE | /api/items/                   | Uses the JWT sent inside the `header` to authorize the user. On successful authorization, it |
|        |                               | deletes the item data. If the user is not logged in, or if the category                      |
|        |                               | schema isn't correct, it responds with the appropriate status code.                          |
| DELETE | /api/items/:id                | Uses the JWT sent inside the `header` to authorize the user. On successful authorization, it |
|        |                               | deletes item's message data. If the user is not logged in, or if the category                |
|        |                               | schema isn't correct, it responds with the appropriate status code.                          |
| GET    | /api/items                    | Uses the JWT sent inside the `header` to authorize the user. On successful authorization, it |
|        |                               | responds with an array of all the items for that user. If the user is not logged in          |
|        |                               | it responds with the correct status code.                                                    |
| GET    | /api/items/:id                | Uses the JWT sent inside the `header` to authorize the user. On successful authorization,    |
|        |                               | it responds with an array of the specific item ID. If the user is not logged                 |
|        |                               | in it responds with the correct status code.                                                 |

                                                |