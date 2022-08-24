const mongoose = require('mongoose');
const menu = require('./models/menu');
mongoose.connect('mongodb://localhost:27017/foodPoint', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connection to mongodb complete');
    }).catch(() => {
        console.log('connection to mongodb failed');
    })

const seedMenus = [
    {
        name: 'wali nyama',
        price: 2000,
        category: 'launch',
        onSale: true
    },
    {
        name: 'wali kuku',
        price: 3000,
        category: 'launch',
        onSale: true
    },
    {
        name: 'wali samaki',
        price: 2000,
        category: 'dinner',
        onSale: true
    },
    {
        name: 'chai ya maziwa',
        price: 1000,
        category: 'breakfast',
        onSale: true
    },
    {
        name: 'kahawa',
        price: 3000,
        category: 'breakfast',
        onSale: true
    },
    {
        name: 'mtori',
        price: 2000,
        category: 'breakfast',
        onSale: true
    },
    {
        name: 'chai ya rangi',
        price: 500,
        category: 'breakfast',
        onSale: true
    },
    {
        name: 'mtindi',
        price: 1000,
        category: 'breakfast',
        onSale: false
    },
    {
        name: 'ndizi nyama',
        price: 4500,
        category: 'dinner',
        onSale: false
    },
    {
        name: 'wali maharage',
        price: 1500,
        category: 'dinner',
        onSale: false
    },
    {
        name: 'ftari',
        price: 2500,
        category: 'dinner',
        onSale: false
    },
    {
        name: 'kisinia',
        price: 35000,
        category: 'launch',
        onSale: false
    }
]

menu.insertMany(seedMenus).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})