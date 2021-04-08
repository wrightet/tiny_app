const express = require('express');
const app = express();
const mongoose = require("mongoose");

const db = require('./config/keys').mongoURI;
app.use(express.json());
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('db connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send("This works huzzah"));
const questions = require('./api/routes/questions');
app.use('/routes/questions', questions);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is serving on port ${port}`));