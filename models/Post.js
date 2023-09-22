
class PostRepository {

    constructor() {
        this.posts = []
        this.id = 0;
    }

    create(AuthorName, description) {
        this.posts.push({ "AuthorName": AuthorName, "id": this.id, "description": description })

        this.id += 1;
    }

    read(id) {
        const post = this.posts.find(post => post.id === id)

        if (!post) {
            return "error: post undefined"
        }

        return post
    }

    updateDescription(id, new_description) {
        const postIndex = this.posts.findIndex(post => post.id === id);

        if (postIndex === -1) {

            return "error: post undefined";
        }
        
        this.posts[postIndex].description = new_description;

        return this.posts[postIndex]
    }

    delete(id) {
        const post = this.posts.find(post => post.id === id)

        if (!post) {
            return "error: post undefined"
        }
        
        this.posts = this.posts.filter(elemento => elemento !== post);

        return "sucess"

    }

    get id(){
        return this.id
    }
}