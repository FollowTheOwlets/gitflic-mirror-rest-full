# RESTfull MOCK

***

## Описание

Серверная часть для обучения созданию клиентской части мобильных и web-приложений. Сервер базируется по
адресу <https://rest-full-for-edu.onrender.com> и поддерживает основные виды запросов.
InMemory база данных проекта выглядит следующим образом: <br>

```json
[
  {
    "id": 1,
    "info": {
      "name": "Lev",
      "login": "19000168",
      "password": "ertysd89"
    },
    "date": "Fri Mar 10 2023 03:06:21"
  },
  {
    "id": 2,
    "info": {
      "name": "Mihail",
      "login": "2000090",
      "password": "setr_yu7"
    },
    "date": "Fri Mar 10 2023 03:06:21"
  },
  {
    "id": 3,
    "info": {
      "name": "Dmitry",
      "login": "2000149",
      "password": "po9065rdgw"
    },
    "date": "Fri Mar 10 2023 03:06:21"
  },
  {
    "id": 4,
    "info": {
      "name": "Aleksandr",
      "login": "2100110",
      "password": "asdfghbnm0"
    },
    "date": "Fri Mar 10 2023 03:06:21"
  }
]
```

***

## Реализованные методы

* `work` -> `GET` `../`
  <br>&emsp; Для проверки работы сервиса.
* `help` -> `GET` `../help`
  <br>&emsp; Для получения дополнительной информации.
* `read` -> `GET` `../api/read`
  <br>&emsp; Для получения списка пользователей.<br>
* `readById` -> `GET` `../api/read/{id}`
  <br>&emsp; Для получения пользователя по id.<br>
* `create` -> `POST` `../api/`
  <br>&emsp; Для создания нового пользователя.
  Как тело запроса ожидает свойство user.info из структуры inMemory.<br>

```json
  {
  "info": {
    "name": "Name",
    "login": "login",
    "password": "asdfghbnm0"
  }
}
```

<br>
*   `delete` -> `DELETE` `../api/delete/{id}`
<br>&emsp; Для удаления пользователя. Тело запроса не требуется<br>
*   `update` -> `PUT` `../api/update/{id}`
<br>&emsp; Для обновления пользователя.
Как тело запроса ожидает обновленное свойство user.info из структуры inMemory.<br>

```json
  {
  "info": {
    "name": "Name",
    "login": "login",
    "password": "asdfghbnm0"
  }
}
```

***

## Примеры запросов

1) GET <https://rest-full-for-edu.onrender.com/api/read>
   <br>&emsp; Response:

```json
[
  {
    "id": 1,
    "info": {
      "name": "Lev",
      "login": "19000168",
      "password": "ertysd89"
    },
    "date": "Fri Mar 10 2023 03:06:21"
  },
  {
    "id": 2,
    "info": {
      "name": "Mihail",
      "login": "2000090",
      "password": "setr_yu7"
    },
    "date": "Fri Mar 10 2023 03:06:21"
  },
  {
    "id": 3,
    "info": {
      "name": "Dmitry",
      "login": "2000149",
      "password": "po9065rdgw"
    },
    "date": "Fri Mar 10 2023 03:06:21"
  },
  {
    "id": 4,
    "info": {
      "name": "Aleksandr",
      "login": "2100110",
      "password": "asdfghbnm0"
    },
    "date": "Fri Mar 10 2023 03:06:21"
  }
] 
```
    
2) PUT <https://rest-full-for-edu.onrender.com/api/update/3><br>&emsp; RequestBody(row/json):
```json

{
  "info": {
    "name": "Alexey",
    "login": "2000149",
    "password": "po9065rdgw"
  }
}
```

<br>&emsp; Response:

```json
{
  "info": {
    "name": "Alexey",
    "login": "2000149",
    "password": "po9065rdgw"
  }
}
```