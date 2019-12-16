import { IpcRenderer, WebFrame, Remote, Dialog } from 'electron'
import * as childProcess from 'child_process'
import * as fs from 'fs'

export class ElectronService {
  public ipcRenderer: IpcRenderer
  public webFrame: WebFrame
  public remote: Remote
  public dialog: Dialog
  public childProcess: typeof childProcess
  public fs: typeof fs

  get isElectron() {
    return window && window.process && window.process.type
  }

  constructor() {
    // Conditional imports
    if (this.isElectron) {
      const electron = window.require('electron')

      this.ipcRenderer = electron.ipcRenderer
      this.webFrame = electron.webFrame
      this.remote = electron.remote
      this.dialog = this.remote.dialog

      this.childProcess = window.require('child_process')
      this.fs = window.require('fs')
    }
  }
}

export default ElectronService
