<script>
    import { onDestroy, onMount } from 'svelte';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    const progress = tweened(0, {
        duration: 3500,
        easing: cubicOut
    });
</script>

<div class="progress-bar">
    <div class="progress-sliver" style={`--width: ${$progress * 100}%`} />
</div>

<style>
    .progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 0.5rem;
    }
    .progress-sliver {
        width: var(--width);
        background-color: #f8485e;
        height: 100%;
    }
</style>