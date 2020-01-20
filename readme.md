# Electron-Svelte-Parcel-Boilerplate

with crayon router 6

```ts
import App from './App.svelte'

import {Context, Router} from 'crayon/dist/platform/router'
import {BaseApp, CrayonSvelteMounter, tab} from './lib/svelte-service'

class MyApp extends BaseApp {
  private static get outlet() {
    return document.getElementById('root')
  }

  constructor() {
    super()
    this.use(MyApp.outlet)
  }

  @tab('/')
  main(ctx: Context, mounter: CrayonSvelteMounter, router: Router) {
    console.log(mounter.svelte.mounter)
    ctx.mount(App, { ctx, nav: router })
  }
}

const app = new MyApp()
app.load().then()

```
