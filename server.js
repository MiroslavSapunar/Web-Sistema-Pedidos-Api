const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());


//const uri = process.env.ATLASDB_URI;
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true , useFindAndModify: false }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const contactsRouter = require('./routes/contacts');
const worksRouter = require('./routes/works');
const ordersRouter = require('./routes/orders');
const countRouter = require('./routes/counts');

app.get("/", (req, res) => {
    res.send("Api Fotocopiadora CEI");
})

app.use('/exercises', exercisesRouter);
app.use('/usuarios', usersRouter);
app.use('/contactos', contactsRouter);
app.use('/trabajos', worksRouter);
app.use('/pedidos', ordersRouter);
app.use('/contadores', countRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});