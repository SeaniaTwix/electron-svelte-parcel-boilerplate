import App from './App.svelte';

import crayon, {RouterEventType} from 'crayon'
import svelte from 'crayon-svelte'

const app = crayon.create()

const outlet = document.getElementById('root');
app.use(svelte.router(outlet))

app.path('/', (req, res) => {
  res.mount(App, { req, nav: app })
})

app.load().then()
