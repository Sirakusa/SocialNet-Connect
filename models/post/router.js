const { Router } = require('express');
const postRouter = Router({ mergeParams: true });
const PostController = require('./controller');
const controller = new PostController();

postRouter.post('/', controller.create);

postRouter.get('/:id', controller.find);

postRouter.delete('/:id', controller.remove);

postRouter.patch('/:id', controller.update);

module.exports = postRouter;
