<script>
    import "../app.css";
    import Header from "$lib/components/Header.svelte"
</script>

<div class="noise h-full w-full z-10 fixed overflow-hidden" />

<div>
<Header />
<slot/>
<div>
    footer
</div>
</div>

<style>
    .noise {
      background: url("/images/noise/grain_01.png") repeat center center fixed;
      opacity: 0.06;
      pointer-events: none;
    }

</style>