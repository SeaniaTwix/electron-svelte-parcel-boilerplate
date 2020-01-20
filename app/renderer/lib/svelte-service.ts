import {AnimationRoute} from 'crayon-animate'
import crayon from 'crayon'
import svelte from 'crayon-svelte'
import {SvelteMounter} from 'crayon-svelte/dist/mounter'

export type CrayonSvelteMounter = {svelte: {mounter: SvelteMounter}}

export function tab(path: string) {
  return (target: any, prop: string, desc: PropertyDescriptor) => {
    target.app.path(path, desc.value)
  }
}

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
