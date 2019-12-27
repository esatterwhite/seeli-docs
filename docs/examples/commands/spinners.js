'use strict'
const seeli = require('seeli')
const spinners = require('cli-spinners')

const sleep = (ms =100) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

module.exports = new seeli.Command({
  name: 'progress'
, description: 'Displays a progress indicator'
, ui: 'dots'
, run: async function(cmd, data) {
    this.ui.start('dots')
    for (const spinner of Object.keys(spinners)){
      await sleep(1000)
      this.ui.text = spinner
      this.ui.spinner = spinner
    }
    this.ui.succeed('done')
  }
})
