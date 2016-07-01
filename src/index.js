import dude from 'debug-dude'
const { /*debug,*/ log, info /*, warn, error*/ } = dude('bot')

import { version } from '../package.json'
info(`coffea-starter bot v${version} starting`)

import config from '../config.json'

import { connect } from 'coffea'
const networks = connect(config)

// --

networks.on('message', (evt, reply) => {
  log('Received message event: %o', evt)

  // TODO: do something with messages here or remove the message event handler
})

networks.on('command', (evt, reply) => {
  log('Received command event: %o', evt)

  switch (evt.cmd) {
    case 'say':
      reply(evt.args.join(' '))
      break
    // TODO: add more commands here
  }
})

// TODO: write more code here or adjust code above
