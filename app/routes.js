const express = require('express')
const router = express.Router()
const config = require('./config.js')

// Clear session data without confirmation
router.get('/prototype-admin/clear-data', function (req, res) {
  req.session.destroy()
  res.redirect('/')
})

// Grab the URL for the heroku link and check if local env
router.use('/', (req, res, next) => {
  res.locals.herokuURL = config.herokuURL
  res.locals.currentURL = req.url
  res.locals.internal = config.internal

  if (req.get('host').includes('localhost')) {
    res.locals.host = true
  }

  next()
})

// Import routes from feature prototypes
router.use(/\/(.)*\/v([0-9]+)/, (req, res, next) => {
  return require(`./views/${req.originalUrl.split('/')[1]}/v${req.params[1]}/_routes`)(req, res, next);
})

router.get("/get-session-data.json", function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(req.session.data, null, 3));
})
// Add your routes above the module.exports line
module.exports = router