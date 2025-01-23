import  express  from "express";
const app:  express.Application = express();
const port: number = 3000;

app.get('/', (_req, _res) => {
    _res.send('Hello World! Learn to use Express with TypeScript')
});

app.listen(port, () => {
    console.log(`Example in Typescript with express app listening on port ${port}`);
});
