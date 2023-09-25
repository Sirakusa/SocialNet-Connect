const { Router } = require('express');
const CommentRepository = require('./Comment');
const commentRouter = Router({ mergeParams: true });

commentRouter.post('/comment/:idpost', (req, res) => {
  const id_post = req.params.idpost;
  const { comment } = req.body;

  CommentRepository.addComment(id_post, comment);

  res.send('commit succesful');
});

commentRouter.delete('/comment/:id', (req, res) => {
  const id_comment = req.params.id;

  CommentRepository.deleteComment(id_comment);

  res.send('deleted comment');
});

commentRouter.patch('/comment/:id', (req, res) => {
  const id_comment = req.params.id;
  const { comment } = req.body;

  CommentRepository.update(id_comment, comment);

  res.send('update comment succesful');
});

commentRouter.get('/comment/:id/:numbercoments', (req, res) => {
  const id_comment = req.params.id;
  const number_comments = req.params.comments;

  res.json(CommentRepository.read(id_comment, number_comments));
});

module.exports = commentRouter;
