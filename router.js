const commentRouter = require('./models/comment/router');
const postRouter = require('./models/post/router');

module.exports = function (app) {
  app.use('/post', postRouter);
  app.use('/comment', commentRouter);

  app.use((req, res) => {
    res.status(404).send('undefined route');
  });
};
