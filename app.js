const bodyParser = require('body-parser');
const expres = require('express');
const router = require('./router');

const app = expres();
const port = 3000;

app.use(bodyParser.json());

router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
