const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    id: String,
    title: String,
    slug: String,
    biography: String,
}, { collection: 'author' })

module.exports = authorSchema