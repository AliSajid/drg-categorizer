<script>
    // Generate a random number between 0 and 9

    import Puff from '$lib/puff.svelte';

    async function get_random_user() {
        const number = Math.floor(Math.random() * 10) + 1;
        const user = await fetch(`https://jsonplaceholder.typicode.com/users/${number}`).then(r => r.json());
        return user
    }

    export let user = get_random_user();
    
</script>
    
    
    <h1>Welcome to SvelteKit</h1>

    {#await user}
    <Puff width="500px" height="500px" color="red" />
    {:then user}
    <p>The User of the Day is: {user.name}</p>
    <p>Their username is: {user.username}</p>
    {:catch error}
    <p>Something went wrong: {error.message}</p>
    {/await}