import dude from 'debug-dude'
const { /*debug,*/ log, info /*, warn, error*/ } = dude('bot')

import { version } from '../package.json'
info(`coffea-starter bot v${version} starting`)

import config from '../config.json'

import { connect, message, command } from '../../coffea/src/index'
// const networks = connect(config)
import mock from '../../coffea-mock/src/index'
const networks = connect({
  protocol: mock,
  mock: {
    message: (evt) => info('message event received: %o', evt)
  }
})

// --

networks.on('message', (evt, reply) => {
  log('received message event: %o', evt)

  // TODO: do something with messages here or remove the message event handler
})

networks.on('command', (evt, reply) => {
  log('received command event: %o', evt)

  switch (evt.cmd) {
    case 'say':
      reply(evt.args.join(' '))
      break
    // TODO: add more commands here
  }
})

// TODO: write more code here or adjust code above

networks.send({
  type: 'mock',
  event: message({ chat: '#general', text: 'hello world!' })
})

networks.send({
  type: 'mock',
  event: command({ chat: '#general', cmd: 'say', args: ['test123'] })
})
