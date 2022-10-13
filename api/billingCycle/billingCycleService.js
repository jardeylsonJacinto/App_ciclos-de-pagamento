const BillingCycle = require('./billingCycle')
const _ = require('lodash')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(request, response, next) {
  const bundle = response.locals.bundle

  if (bundle.errors) {
    var errors = parseErrors(bundle.errors)
    response.status(500).json({ errors })
  } else {
    next()
  }
}

function parseErrors(nodeRestfulErrors) {
  const errors = []

  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

BillingCycle.route('count', function (request, response, next) {
  BillingCycle.count(function (error, value) {
    if (error) {
      response.status(500).json({ errors: [error] })
    } else {
      response.json({ value })
    }
  })
})

module.exports = BillingCycle
