<script context="module">
    export const load = async ({ fetch }) => {
      const posts = await fetch('/api/bldrdsh.json')
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