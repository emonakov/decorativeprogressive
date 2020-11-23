const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports = (req, res) => {
    // const { name = 'World' } = req.query;
    client.connect((err) => {
        if (err) {
            res.status(200).send(JSON.stringify(err));
        }

        res.status(200).send('Weird thing');
    });
    // res.status(200).send(`Hello, ${name}!`);
};
