<style>
    h1 {
        font-size: clamp(4.5rem, 5.5vw, 10rem);
        color: var(--white-col);
    }

    button {
        cursor: pointer;
        min-width: 30rem;
        min-height: 5rem;
        border-radius: 3rem;
        border: 1px solid white;
        color: white;
        font-size: 2rem;
        background-color: rgba(255, 255, 255, 0);
        transition: 0.2s ease-in-out;
    }

    button:hover {
        color: var(--spartok-purple);
        background-color: white;
    }

    .intro-container {
        padding: 5rem;
        gap: 4rem;
        background-color: var(--spartok-purple);
    }

    .intro-container > p {
        max-width: 80rem;
        line-height: 1.4;
        padding: 4rem;
        font-size: 1.75rem;
        color: var(--white-col);
        background-color: rgba(0, 0, 0, 0.445);
        border-radius: 1rem;
    }
</style>

<script>
    import { onMount } from "svelte";

    let joke = '';

    /**
     * API request to grab a joke.
     */
    const fetchJoke = async () => {

        const response = await fetch('/api');
        const data = await response.json();

        console.log(response);

        joke = data.joke;
    }

    /**
     * On component mount, render a joke.
     */
    onMount(() => fetchJoke());
</script>

<div class="height-full width-full intro-container flex justify-center align-center column">
    <h1>Spartok</h1>
    <p>{joke}</p>
    <button on:click={fetchJoke}>Dis Spartok</button>
</div>
