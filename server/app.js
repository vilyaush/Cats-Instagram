require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('express').Router()
const axios = require('axios')

const app = express();

const PORT = process.env.PORT ?? 3000;

let list = []

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', async (req, res) =>{
  res.json(list)
})



app.get('/cats', async (req, res) => {
  try {
    const response = await axios('https://api.thecatapi.com/v1/images/search?limit=3&page=1&order=Desc');
    const result = response.data.map(el => ({id:el.id, url:el.url}))
    list = [...result, ...list]
    res.json(result);
  } catch (err) {
    res.sendStatus(400);
  }
});


app.use('/api', router)

app.listen(process.env.PORT, () => {
  console.log('server start ', process.env.PORT);
});
