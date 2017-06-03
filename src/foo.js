'use strict'

const bar = require('./bar')

async function foo () {
  const val = await bar()
  console.log(val)
}

foo()
