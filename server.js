import express from "express";

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3001;

router.get('/', (req, res) => {
    res.send('api testing...')
});

app.use('/api', router);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`))
