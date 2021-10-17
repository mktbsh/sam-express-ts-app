const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');

app.use('/static', express.static('static'))

router.use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }));


router.get('/', (req, res) => {
    res.send(JSON.stringify({
        foo: 'bar'
    }));
});

router.get('/health', async (req, res) => {
    res.send(JSON.stringify({
        status: 'ok'
    }));
});

app.use('/', router);

module.exports = app;