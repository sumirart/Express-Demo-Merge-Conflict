const express = require('express')();

express.get('*', (req, res) => {
    res.send('coba merge conflict plss')
})

express.listen(3000, () => console.log(`Running on port 3000~`))
