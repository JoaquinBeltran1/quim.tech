<script context="module">
    export const load = async ({ fetch }) => {
      const posts = await fetch('/api/posts.json')
      const allPosts = await posts.json()
    
      return {
        props: {
          posts: allPosts
        }
      }
    }
</script>

<script>
    export let posts;
</script>

<div class="pt-12">
<ul>
    {#each posts as post}
      <li>
        <div>
          <h2>
            <a href={post.path}>
              {post.meta.title}
            </a>
          </h2>
          <p>{post.meta.date}</p>
        </div>
      </li>
    {/each}
  </ul>
</div>