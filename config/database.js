const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.messages.general.required = "o atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min =
  "o '{VALUE}' informado é menor do que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max =
  "o '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum =
  "O '{VALUE}' não é válido para o atributo '{PATH}'."