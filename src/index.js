const BOT_NAME = 'bot'

import dude from 'debug-dude'
const { /*debug,*/ log, info /*, warn, error*/ } = dude(BOT_NAME)

import { version } from '../package.json'
info(`${BOT_NAME} v${version} starting`)

import config from '../config.json'

import { connect } from 'coffea'
const networks = connect(config)

// --

networks.on('message', (msg, reply) => {
  log('Received message:', msg)
  reply(`I'm a parrot: ${msg}`)
})

// TODO: write code here
