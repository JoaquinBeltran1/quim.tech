<script>
    let y = 0
    $: condition = 115 <= y
    $: console.log(condition)
</script>

<svelte:window bind:scrollY={y} />

<div class:active={condition} class="top-0 fixed pt-6 px-6 w-full z-20">
    <div class="w-full flex justify-center space-x-14 text-gray-800">
    <a href="/">
        Home
    </a>
    <a href="/bldrdsh">
        BLDRDSH
    </a>
    <a href="/blog">
        META
    </a>
    </div>
    
</div>

<style>
    .active {
        display: none;
    }

</style>