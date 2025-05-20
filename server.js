const express = require('express');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes/index');
const config = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
