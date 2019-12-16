import App from './App.svelte';

import { Request, Response } from 'crayon/dist/platform/router';
import { BaseApp, tab } from './lib/svelte-service'

class MyApp extends BaseApp {
  private get outlet() {
    return document.getElementById('root')
  }

  constructor() {
    super()
    this.use(this.outlet)
  }

  @tab('/')
  main(req: Request, res: Response) {
    res.mount(App, { req, nav: global })
  }
}

// just simple name
const global = MyApp.app

const app = new MyApp()
app.load().then()
