'use strict'

module.exports = (router) => {
  router.route('/any')
    .all((req, res, next) => {
      next()
    })
    .get((req, res) => {
      let query = req.query? req.query : {}
      res.status(200).send({ status: true, message: 'Ruta get' })
    })
}