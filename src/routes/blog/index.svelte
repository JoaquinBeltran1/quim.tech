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

<div class="h-screen bg-meta">
  <div class="pt-12 flex-auto justify-center flex">
    <div class="flex-col w-4/5 pt-20">
      <div class="md:flex items-baseline md:space-x-4 pb-10">
        <h1 class="text-6xl pb-4 md:pb-0">
          Meta posts
        </h1>
        <h2 class="text-2xl text-gray-600 italic">
          Posts about this and that
        </h2>
      </div>
      
      <ul class="border-t border-solid">
        {#each posts as post}
          <li>
            
              <a href={post.path} class="flex justify-between items-baseline py-2 border-b border-solid hover:text-gray-400 transition ease-in-out duration-200">
                <h2>
                  <div class="flex space-x-3 items-baseline">
                    <div class="flex text-xl">
                      {post.meta.number}.
                      {post.meta.title}
                    </div>
                    
                    <p class="text-md italic text-gray-500">
                      {post.meta.descr}
                    </p>
                    
                  </div>
                </h2>
                <p class="text-gray-700">{post.meta.date}</p>
              </a>
          </li>
        {/each}
      </ul>
    </div>

</div>
</div>

<style>
  .bg-meta {
  background-color:hsla(0,0%,100%,1);
background-image:
radial-gradient(at 23% 49%, hsla(0,0%,100%,0.81) 0px, transparent 50%),
radial-gradient(at 75% 37%, hsla(84,0%,100%,0.7) 0px, transparent 50%),
radial-gradient(at 0% 100%, hsla(232,100%,45%,0.53) 0px, transparent 50%),
radial-gradient(at 82% 94%, hsla(229,73%,56%,0.66) 0px, transparent 50%),
radial-gradient(at 38% 94%, hsla(212,100%,62%,0.4) 0px, transparent 50%);
  }
</style>