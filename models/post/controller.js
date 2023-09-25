const PostRepository = require('./Post');

const repository = new PostRepository();

class PostController {
  create(req, res) {
    const { author, description } = req.body;

    repository.create(author, description);

    res.send('new post');
  }
  find(req, res) {
    const id_post = req.params.id;

    const status_post = repository.read(id_post);

    if (status_post === 'error: post undefined') {
      return res.send(status_post);
    }

    res.json(status_post);
  }
  remove(req, res) {
    const id_post = req.params.id;

    repository.delete(id_post);

    res.send('delete succesful');
  }

  update(req, res) {
    const id_post = req.params.id;
    const { description } = req.body;

    repository.updateDescription(id_post, description);

    res.json(repository.read(id_post));
  }
}

module.exports = PostController;
