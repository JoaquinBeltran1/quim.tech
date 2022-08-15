<script>
    import "../app.css";
    import Header from "$lib/components/Header.svelte"
import Footer from "../lib/components/Footer.svelte";
</script>

<div class="noise h-full w-full z-10 fixed overflow-hidden" />

<Header />
<slot/>
<Footer />

<style>
    .noise {
      background: url("/images/noise/grain_01.png") repeat center center fixed;
      opacity: 0.06;
      pointer-events: none;
    }

</style>