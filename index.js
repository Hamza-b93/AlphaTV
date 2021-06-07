const express = require('express');
const app = express();
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://hamzab93:bitch-please2001@alphatv.didwo.mongodb.net/AlphaTV?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error:'));
db.once("open", function() {
   console.log('db connected!');
});

const userRoute = require('./routes/UserRoute.js');
const signupRoute = require('./routes/SignupRoute.js');

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(port, function() {
  console.log(`App Is Running On Port: ${port}`);
});


app.use('/user', userRoute);
app.use('/users', userRoute);
app.use('/signup', signupRoute);
