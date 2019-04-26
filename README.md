# count-money

Mange your money every day. 💰

## How to start development

### Frontend

```bash
cd frontend
npm install
node app.js
```

### Backend

Before start backend, you need to init the database first, this app use mongodb to store data.

1. First, execute init file `backend/mongodb/init.mongo` in your mongodb database.
2. Second, edit `config/CountMoney.json`, change the url to your mondodb database url.

```bash
cd backend
npm install
node app.js
```
