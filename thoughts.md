# Notes

 1. The finest way to write backend is to bring controllers to routes and bring routes to app.
 2. Routes contain routes and controllers contain logic.
 3. Schema is only used when the user provides Data.
 4. When make request to Database, we have to use async await because Database is on another continent.
 5. It is necessary to connect and require connection to Database in our app.js
 6. To use json we have to do `app.use(express.json())`
 7. We can connect our DB to frontend with axios.
 8. Submit method is used to connect to database