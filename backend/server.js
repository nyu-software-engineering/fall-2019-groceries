const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://ac6296:419beacon@user-and-cart-cluster-emmhp.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
var connection = null;

function getConnection() {
    if (connection === null) {
        connection = mongoose.connection;
    }
    return connection;
}

getConnection().once('open', () => {
    console.log("MongoDB database connection established succesfully");
});

const cartsRouter = require('./routes/carts');
const usersRouter = require('./routes/users');
const aliasRouter = require('./routes/aliases');
const itemsRouter = require('./routes/items');
const cartAliasesRouter = require('./routes/cartAliases');

app.use('/carts', cartsRouter);
app.use('/users', usersRouter);
app.use('/aliases', aliasRouter);
app.use('/items', itemsRouter);
app.use('/cartAliases', cartAliasesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
