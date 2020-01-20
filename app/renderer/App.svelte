<script lang="ts">
  import { onMount } from 'svelte'
  import ElectronService from './lib/electron-service'
  import {Context, Router} from 'crayon'

  const es = new ElectronService()

  onMount(() => {
    console.log(ctx, nav)
  })

  export let ctx: Context
  export let nav: Router
</script>

<p>Current Path is '{ctx.pathname}'</p>
