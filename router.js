
import {PostRepository} from "./models/Post.js"
import {CommentRepository} from "./models/Comment.js"

const expres = require('express')

const app = expres()
const port = 3000

const post_obj = new PostRepository()
const coment_obj = new CommentRepository()

app.use(bodyParser.json())


app.post('post/',(req,res) =>{
    const postData = req.body


})


app.get('post/get/:id',(req,res) =>{
    const id = req.params.idPost

    
})


app.delete('post/delite/:id',(req,res) => {
    const delite = req.params.id


})

app.patch('post/patch/:id/:description', (req,res) => {

})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



