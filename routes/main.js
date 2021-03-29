__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'IKY BOT',
            namaowner: 'の ＭｅＩｋｙ あ',
            instagram: 'ikyy_ads',
            youtube : 'Ikyy_ads'
        }
    }
    res.json(config)
})

module.exports = router
