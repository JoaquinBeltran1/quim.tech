<script>
    import "../app.css";
    
    let y = 0
    $: condition = y <= 150;

    // TODO: instead of arbitray 50, take bottom (or height) of hero element
</script>

<svelte:window bind:scrollY={y}/>




<div class:hidden={condition} class="bg-red-200 h-20 top-0 z-1 fixed w-full">
    header
    <div>
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

<div class="">
    <slot/>

</div>
<h1 class:active={condition} class="h-screen">henlo world</h1>

<div class="bg-red-200 h-44">
    footer
</div>
<style>
    .hidden {
        display: none;
    }
    .active {
        color: brown
    }
</style>