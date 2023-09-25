class PostRepository {
  constructor() {
    this.posts = [];
    this._id = 0;
  }

  create(AuthorName, description) {
    this.posts.push({
      AuthorName: AuthorName,
      id: this._id,
      description: description,
    });

    this._id += 1;
  }

  read(id) {
    const postId = parseInt(id);
    const post = this.posts.find((post) => post.id === postId);

    if (!post) {
      return 'error: post undefined';
    }

    return post;
  }

  updateDescription(id, new_description) {
    const id_post = parseInt(id);
    const postIndex = this.posts.findIndex((post) => post.id === id_post);

    if (postIndex === -1) {
      return 'error: post undefined';
    }

    this.posts[postIndex].description = new_description;

    return this.posts[postIndex];
  }

  delete(id) {
    const id_post = parseInt(id);
    const post = this.posts.find((post) => post.id === id_post);

    if (!post) {
      return 'error: post undefined';
    }

    this.posts = this.posts.filter((elemento) => elemento !== post);

    return 'sucess';
  }

  get id() {
    return this._id;
  }
}

module.exports = PostRepository;
