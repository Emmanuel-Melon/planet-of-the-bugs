<script>
// @ts-nocheck

    import { page } from "$app/stores";
    import welcome from '$lib/images/svelte-welcome.png'
    import { ADD_NEW_USER } from "$lib/mutations/users";
    import { onMount } from "svelte";
    import { mutation } from "svelte-apollo";

    let username = '';
    let name = '';
    let email = '';

    let usernamePattern = new RegExp(/^[a-zA-Z][a-zA-Z0-9_-]{3,19}$/);
    let emailPattern = new RegExp(/[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+/)

    onMount( () => {
    page.subscribe((value) => {
        const {user} = value.data.session;
        name = user.name;
        email = user.email;
        username = user.username;
    })
    })

    const addNewUser = mutation(ADD_NEW_USER)

    async function handleSubmit() {        
        if(!usernamePattern.test(username) && !emailPattern.test(email)){
            return
        }

        try {
            const result = await addNewUser({
                variables: {
                    email,
                    name,
                    username,
                }
            })

            if (result.data.insert_users_one) {
                console.log('Mutation successful!');
                window.location.href = `/`;
            } else {
                console.log('Mutation failed');
            }
            
        } catch (error) {
            console.log(error)
        }
    }

</script>


<div class=" h-screen grid grid-cols-1 place-items-center md:grid-cols-2">
    <img src={welcome} alt="Welcome" />


    <form class="form-control gap-4 w-full max-w-xs">
        <div>
            <label for="username" class="label">
                <span class="label-text">Username</span>
            </label>
            <input 
                id="username" type="text" 
                bind:value={username} 
                on:input={(event)=> username = event.target.value.toLowerCase()}
                pattern={"^[a-zA-Z][a-zA-Z0-9_-]{3,19}$"}
                title="Must start with a letter, have at least 4 characters and contain only letters, numbers, hyphens, or underscores." 
                class="input input-bordered w-full max-w-xs"
                required
                />
        </div>
        <div>
            <label for="name" class="label">
                <span class="label-text">Full Name</span>
            </label>
            <input 
                id="name" 
                type="text" 
                bind:value={name} 
                class="input input-bordered w-full max-w-xs" 
                required
                />
        </div>
        {#if !email}
        <div>
            <label for="email" class="label">
                <span class="label-text">Email Address</span>
            </label>
            <input 
                id="email" 
                type="email" 
                bind:value={email} 
                on:input={(event)=> email = event.target.value.toLowerCase()}
                class="input input-bordered w-full max-w-xs" 
                required
                />
        </div>
        {/if}
        <button class="btn btn-primary" on:click={handleSubmit}>Submit</button>
    </form>
</div>