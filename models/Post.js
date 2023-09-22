
class PostRepository {

    constructor() {
        this.posts = []
        this.id = 0;
    }

    createPost(AuthorName, description) {
        this.AuthorName = AuthorName;
        this.id += 1;
        this.description = description;

        this.posts.push({ "AuthorName": this.AuthorName, "id": this.id, "description": this.description })
    }

    readPost(id) {
        const post = this.posts.find(post => post.id === id)

        if (post) {
            return {
                "AuthorName": post.AuthorName,
                "description": post.description
            }
        }
        else {
            return "error, post undefined"
        }
    }

    updatePost(new_description) {
        this.description = new_description
    }

    deletePost(id) {
        const post = this.posts.find(post => post.id === id)

        if (post) {
            this.posts = this.posts.filter(elemento => elemento !== post);
        }
        else {
            return "error, post undefined"
        }
    }
}


// const post = new PostRepository()

// post.createPost("jose", "hola como estas")
// post.createPost("luis", "holaaaa")

// console.log(post.readPost(1))

// post.deletePost(1)

// console.log(post.readPost(1))