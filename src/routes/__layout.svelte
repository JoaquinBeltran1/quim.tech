<script>
    import "../app.css";
    import Header from "$lib/components/Header.svelte"
</script>

<div class=" h-full w-full z-10 fixed overflow-hidden" />
<div class="bg-main">
<Header />
<slot/>
<div>
    footer
</div>
</div>

<style>

    .bg-main {
        background-color: rgb(255, 255, 255)
    }
    .noise {
      background: url("/images/noise/grain_01.png") repeat center center fixed;
      opacity: 0.06;
      pointer-events: none;
    }

</style>