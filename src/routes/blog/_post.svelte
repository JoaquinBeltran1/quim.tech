<script>
    export let title
    export let date
</script>

<div class="pt-12">
<h1>{title}</h1>

<p>Published: {date}</p>

<slot />
</div>