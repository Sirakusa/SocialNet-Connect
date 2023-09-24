const { Router } = require('express');
const PostRepository = require('./Post');
const postRouter = Router({ mergeParams: true });

postRouter.post('/post/', (req, res) => {
  const { author, description } = req.body;

  PostRepository.create(author, description);

  res.send('new post');
});

postRouter.get('/post/:id', (req, res) => {
  const id_post = req.params.id;

  const status_post = PostRepository.read(id_post);

  if (status_post === 'error: post undefined') {
    return res.send(status_post);
  }

  res.json(status_post);
});

postRouter.delete('/post/:id', (req, res) => {
  const id_post = req.params.id;

  PostRepository.delete(id_post);

  res.send('delete succesful');
});

postRouter.patch('/post/:id', (req, res) => {
  const id_post = req.params.id;
  const { description } = req.body;

  PostRepository.updateDescription(id_post, description);

  res.json(PostRepository.read(id_post));
});
