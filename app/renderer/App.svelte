<script>
  import { onMount } from 'svelte'
  import ElectronService from './lib/electron-service';

  const es = new ElectronService()

  onMount(() => {
    console.log(req, nav)
  })

  export let req
  export let nav
</script>

<p>Current Path is '{req.pathname}'</p>
