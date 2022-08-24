const express = require('express');
const app = express();
const port = 5050;
const path = require('path');
const methodOveride = require('method-override');
const mongoose = require('mongoose');
const menu = require('./models/menu');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOveride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/foodPoint', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection to mongo complete");
    }).catch(() => {
        console.log("connection to mongo failed");
    })


const categories = ['breakfast', 'launch', 'dinner'];

app.get('/menus', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const menus = await menu.find({ category });
        res.render('menus/index', { menus, category })
    } else {
        const menus = await menu.find({})
        res.render('menus/index', { menus, category: 'All' })
    }
})

app.get('/menus/new', (req, res) => {
    res.render('menus/new', { categories });
})

app.post('/menus', async (req, res) => {
    const newMenu = new menu(req.body);
    await newMenu.save();
    res.redirect('/menus');
})

 app.get('/menus/:id/update', async (req, res) => {
     const { id } = req.params;
     const singleMenu = await menu.findById(id);
     res.render('menus/update', { singleMenu , categories });
 })

 app.put('/menus/:id', async (req, res) => {
    const { id } = req.params;
    await menu.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect('/menus');
})

app.delete('/menus/:id', async (req, res) => {
    const { id } = req.params;
    await menu.findByIdAndDelete(id);
    res.redirect('/menus');
 })



app.listen(port, () => {
    console.log("on port 5050");
});