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

<div class="h-screen bg-bldrdsh">
  <div class="pt-12 flex-auto justify-center flex">
    <div class="flex-col w-4/5 pt-20">
      <div class="md:flex items-baseline md:space-x-4 pb-10">
        <h1 class="text-6xl pb-4 md:pb-0">
          BLDRDSH posts
        </h1>
        <h2 class="text-2xl text-gray-600 italic">
          Posts about this and that, bldrdsh
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
  .bg-bldrdsh {
    background-color:hsla(240,0%,100%,1);
background-image:
radial-gradient(at 80% 28%, hsla(338,0%,100%,1) 0px, transparent 50%),
radial-gradient(at 60% 46%, hsla(0,0%,100%,0.52) 0px, transparent 50%),
radial-gradient(at 71% 84%, hsla(209,63%,22%,0.45) 0px, transparent 50%),
radial-gradient(at 91% 49%, hsla(181,0%,100%,0.44) 0px, transparent 50%),
radial-gradient(at 18% 47%, hsla(0,0%,100%,0.64) 0px, transparent 50%),
radial-gradient(at 96% 94%, hsla(220,49%,45%,0.73) 0px, transparent 50%),
radial-gradient(at 8% 94%, hsla(217,33%,44%,0.81) 0px, transparent 50%),
radial-gradient(at 34% 96%, hsla(224,44%,46%,0.52) 0px, transparent 50%);
  }
</style>