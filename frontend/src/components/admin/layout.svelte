<script>
	import AppLayout from '../../layouts/appLayout.svelte';
    import Navigation from './navigation.svelte'
</script>

<AppLayout>
    
    <div class="h-100" >
        <Navigation/>
        <slot/>
    </div>	

</AppLayout>



