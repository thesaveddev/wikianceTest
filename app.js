//import dependencies
const express = require('express');
const axios = require('axios');
const PORT = process.env.PORT || 3000;

//create and express app instance
const app = express();

//let express use static files
app.use(express.static('public'))

//set view engine
app.set('view engine', 'ejs')
app.set('views', './views')

//show home page
app.get('/', (req, res) => {
    res.render('index');
})

//get posts
app.get('/posts', async (req, res) => {
    await axios.get('https://jsonplaceholder.typicode.com/posts').then(
        (response) => {
            res.render('posts', {posts:response.data});
            }
    ).catch(err => {
        res.send(`An Error Occured! ${err}`)
    })
})


app.listen(PORT, console.log(`Server Running On Port ${PORT}`));





