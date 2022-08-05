import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
import { mdsvex } from 'mdsvex'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
    	mdsvex({
      		extensions: ['.md'],
			layout: {
				blog: 'src/routes/blog/_post.svelte',
				bldrdsh: 'src/routes/bldrdsh/_post.svelte'
			  }
    	}),
		preprocess({
			postcss: true
		})
	]
};

export default config;
