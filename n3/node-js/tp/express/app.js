const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/nextu?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
const Books = require('./book');
app.post('/books',(req,res)=>{
    console.log(req.body);

    const book = new Books({
        ...req.body
      });
      book.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
    res.send(req.body);
    
})
module.exports = app;