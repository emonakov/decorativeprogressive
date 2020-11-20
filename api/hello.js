// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
// const db = mongoose.connection;
module.exports = (req, res) => {
    const { name = 'World' } = req.query;
    // db.on('error', (args) => res.status(200).send(JSON.stringify(args)));
    // db.once('open', (args) => res.status(200).send(JSON.stringify(args)));
    res.status(200).send(`Hello, ${name}!`);
};
