const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

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
