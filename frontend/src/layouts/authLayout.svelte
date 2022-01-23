<script>
    import { onMount} from 'svelte';
    import {goto} from '$app/navigation';
    import Session from '../scripts/helper/session.helper';
    import Err301 from '../components/error/301.svelte';
    ;
    

    const auth = Session.get('auth');
    const user = Session.get('user');
    
 
    onMount(()=>{
        if(!auth && !user){
            goto('/auth');
        }
    });
 </script>

{#if auth && user}
    <slot/>
{:else}
<Err301></Err301>
{/if}