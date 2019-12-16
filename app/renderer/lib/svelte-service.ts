export function tab(path: string) {
  return (target: any, prop: string, desc: PropertyDescriptor) => {
    target.app.path(path, desc.value)
  }
}

import crayon from 'crayon'
import svelte from 'crayon-svelte'

export class BaseApp {
  static app = crayon.create()

  get app() {
    return BaseApp.app
  }

  use(outlet: HTMLElement) {
    BaseApp.app.use(svelte.router(outlet))
  }

  load() {
    return BaseApp.app.load()
  }
}