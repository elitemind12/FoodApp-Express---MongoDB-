const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['breakfast', 'launch', 'dinner']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
