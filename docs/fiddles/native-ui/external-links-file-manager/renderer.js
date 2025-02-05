const { shell } = require('electron/renderer')
const os = require('node:os')

const exLinksBtn = document.getElementById('open-ex-links')
const fileManagerBtn = document.getElementById('open-file-manager')

fileManagerBtn.addEventListener('click', (event) => {
  shell.showItemInFolder(os.homedir())
})

exLinksBtn.addEventListener('click', (event) => {
  shell.openExternal('https://electronjs.org')
})
