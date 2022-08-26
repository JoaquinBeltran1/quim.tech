<script context="module">
    export const load = async ({ fetch }) => {
      const posts = await fetch('/api/writing.json')
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

<div class="h-screen bg-writing">
  <div class="pt-12 flex-auto justify-center flex">
    <div class="flex-col w-4/5 pt-20">
      <div class="md:flex items-baseline md:space-x-4 pb-10">
        <h1 class="text-6xl pb-4 md:pb-0">
          Writing posts
        </h1>
        <h2 class="text-2xl text-gray-600 italic">
          Posts about this and that writing
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
  .bg-writing {
    background-color:hsla(240,0%,100%,1);
background-image:
radial-gradient(at 87% 28%, hsla(0,0%,100%,0.72) 0px, transparent 50%),
radial-gradient(at 60% 37%, hsla(0,0%,100%,0.52) 0px, transparent 50%),
radial-gradient(at 80% 100%, hsla(104,27%,27%,0.63) 0px, transparent 50%),
radial-gradient(at 92% 38%, hsla(0,0%,100%,0.44) 0px, transparent 50%),
radial-gradient(at 32% 42%, hsla(0,0%,100%,0.64) 0px, transparent 50%),
radial-gradient(at 100% 86%, hsla(119,30%,28%,0.73) 0px, transparent 50%),
radial-gradient(at 36% 100%, hsla(114,24%,30%,0.81) 0px, transparent 50%),
radial-gradient(at 1% 97%, hsla(104,20%,31%,0.83) 0px, transparent 50%);
  }
</style>