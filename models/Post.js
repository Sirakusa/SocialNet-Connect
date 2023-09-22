
class PostRepository {

    constructor() {
        this.posts = []
        this.id = -1;
    }

    create(AuthorName, description) {
        this.AuthorName = AuthorName;
        this.id += 1;
        this.description = description;

        this.posts.push({ "AuthorName": this.AuthorName, "id": this.id, "description": this.description })
    }

    read(id) {
        const post = this.posts.find(post => post.id === id)

        if (post) {
            return {
                "AuthorName": post.AuthorName,
                "description": post.description
            }
        } 
        else {
            return "error: post undefined"
        }
    }

    updateDescription(id, new_description) {
        const postIndex = this.posts.findIndex(post => post.id === id);

        if (postIndex !== -1) {
            this.posts[postIndex].description = new_description;
        } 
        else {
            return "error: post undefined";
        }
    }

    delete(id) {
        const post = this.posts.find(post => post.id === id)

        if (post) {
            this.posts = this.posts.filter(elemento => elemento !== post);
        }
        else {
            return "error: post undefined"
        }
    }
}