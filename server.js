import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.json('api testing...')
});

app.listen(3001, () => console.log('Server listening on port 3001.'))
