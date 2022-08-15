<script>
    export let title
    export let date
</script>

<div class="h-screen">
    <div class="pt-12 flex-auto">
<h1>{title}</h1>

<p>Published: {date}</p>

<slot />
</div>
</div>