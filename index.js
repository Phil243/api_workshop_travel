import express from 'express';
import countriesRouter from "./routes/countriesRouter.js";


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/countries', countriesRouter);

app.all('*', (req, res) => res.status(404).send('This Endpoint is not defined'));


app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
