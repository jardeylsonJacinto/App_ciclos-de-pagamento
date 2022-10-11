const _ = require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')

// Mais uma função middleware
function getSumary(request, response) {
  BillingCycle.aggregate({
    $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
  }, {
    $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
  }, {
    $project: {_id: 0, credit: 1, debt: 1}
  }, function(error, result){
    if(error){
      response.status(500).json({ errors: [error]})
    }else{
      response.json(_.defaults(result[0], {credit: 0, debt: 0}))
    }
  })
}

module.exports = { getSumary }