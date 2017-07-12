const fs = require('fs')
const path = require('path')

exports.up = function (knex) {
  const filepath = path.join(__dirname, '../deploy/agent_type.sql')
  const sql = fs.readFileSync(filepath, 'utf8')
  return knex.schema.raw(sql)
}

exports.down = function(knex, Promise) {
  const filepath = path.join(__dirname, '../revert/agent_type.sql')
  const sql = fs.readFileSync(filepath, 'utf8')
  return knex.schema.raw(sql)
}
