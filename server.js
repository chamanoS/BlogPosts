const express = require('express')
const mongoose = require('mongoose')
const articlesRouter = require('./routes/articles')
const Article = require('./models/article')
const methodOveride = require('method-override')
const app = express()


mongoose.connect('mongodb://localhost/blog',
{ useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log('Connected to DataBase')
})
mongoose.set('useCreateIndex', true)

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOveride('_method'))


app.get('/', async (req,res) => {
    const articles = await Article.find().sort({
        createdAt: 'desc'})
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articlesRouter)

app.listen(5000)