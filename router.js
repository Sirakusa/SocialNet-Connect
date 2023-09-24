module.exports = function (app) {
  app.use((req, res) => {
    res.status(404).send('undefined route');
  });
};
