const express = require('express')
const mongoose = require('mongoose')
const articlesRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blog',
{ useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log('Connected to DataBase')
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.use('/articles', articlesRouter)

app.get('/', (req,res) => {
    const articles = [{
        title: 'Test Articles',
        createdAt: new Date(),
        description: 'Test description'
    },{
        title: 'Test Article 2s',
        createdAt: new Date(),
        description: 'Test description 2nd'
    }]

    res.render('articles/index', { articles: articles })
})


app.listen(5000)