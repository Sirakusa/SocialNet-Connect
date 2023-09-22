
class PostRepository {

    constructor() {
        this.posts = []
        this.id = 0;
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
            return "error, post undefined"
        }
    }

    update(new_description) {
        this.description = new_description
    }

    delete(id) {
        const post = this.posts.find(post => post.id === id)

        if (post) {
            this.posts = this.posts.filter(elemento => elemento !== post);
        }
        else {
            return "error, post undefined"
        }
    }
}