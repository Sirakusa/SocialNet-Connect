
const {PostRepository}= require("./models/Post.js")
const {CommentRepository}= require("./models/Comment.js")

const bodyParser = require('body-parser')
const expres = require('express')

const app = expres()
const port = 3000

const postRepository = new PostRepository()
const commentRepository = new CommentRepository()

app.use(bodyParser.json())


app.post('/post/:author/:description',(req,res) =>{
    const author_post = req.params.author
    const description_post = req.params.description

    postRepository.create(author_post,description_post)

    res.send("new post")
})


app.get('/post/get/:id',(req,res) =>{

    const id_post = req.params.id

    const status_post = postRepository.read(id_post)

    if(status_post === "error: post undefined"){
        return res.send(status_post)
    }

    res.json(status_post)
})


app.delete('/post/delete/:id',(req,res) => {

    const id_post = req.params.id

    postRepository.delete(id_post)

    res.send("delete succesful")
})

app.patch('/post/patch/:id/:description', (req,res) => {
    const id_post = req.params.id
    const post_description = req.params.description

    postRepository.updateDescription(id_post,post_description)

    res.json(postRepository.read(id_post))
})


app.use((req,res)=> {
    res.status(404).send("undefined route")
})


app.post('/comment/:idpost/:comment',(req,res) => {

    const id_post = req.params.idpost
    const comment = req.params.comment

    commentRepository.addComment(id_post,comment)

    res.send("commit succesful")
})

app.delete('/comment/delete/:id',(req,res) => {
    const id_comment = req.params.id

    commentRepository.deleteComment(id_comment)

    res.send('deleted comment')
})


app.patch('/comment/update/:id/:comment',(req,res) => {
    const id_comment = req.params.id
    const new_comment = req.params.comment

    commentRepository.update(id_comment,new_comment)

    res.send('update comment succesful')
})

app.get('/comment/read/:id/:comments',(req,res) =>{
    const id_comment = req.params.id
    const number_comments = req.params.comments

    res.json(commentRepository.read(id_comment,number_comments))
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



