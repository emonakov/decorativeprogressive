const mongoose = require('mongoose');

const uri = process.env.MONGO_URL;
mongoose.connect(uri, {useNewUrlParser: true});

module.exports = (req, res) => {
    // const { name = 'World' } = req.query;
    const db = mongoose.connection;
    db.on('error', (err) => {
        res.status(200).send(JSON.stringify(err));
    });
    db.once('open', function() {
        res.status(200).send('Weird thing');
    });

    res.status(200).send('Nothing happened');
};
