<script>
    export let title
    export let date
    export let number
    export let descr
</script>

<svelte:head>
  <title>{title} | Quim Beltran</title>
</svelte:head>

<div class="min-h-screen">
    <div class="pt-12 justify-center flex">
        <div class="px-4 sm:px-0 sm:w-2/3 pt-20">
        <h1 class="text-6xl">{title}</h1>

        

        <div class="prose pt-10 pb-20">
            <slot class=""/>
        </div>
        <p>Published {date}</p>
    </div>
    </div>

</div>