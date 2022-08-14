<script>
    let innerHeight
    let y = 0
    $: condition = y <= innerHeight - 15;
</script>

<svelte:window bind:scrollY={y} bind:innerHeight/>

<div class="h-20 top-0 fixed w-full hidden px-4 space-y-2">
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
    <div class="h-0.5 w-full bg-2">
        <div class="h-0.5 w-full noise"></div>
    </div>
</div>

<style>
    .hidden {
        display: none;
        transition: all 0.3s;
    }
    .bg-2 {
        background: rgb(77,98,233);
        background: linear-gradient(90deg,
        rgb(107, 125, 240) 0%, 
        rgb(103, 123, 248) 73%, 
        rgb(248, 207, 191)100%);
}
.noise {
      background: url("/images/noise/grain_01.png") repeat center center fixed;
      opacity: 0.06;
      pointer-events: none;
    }
</style>