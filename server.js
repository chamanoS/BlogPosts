const express = require('express')
const articlesRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

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