import { S as SvelteComponentDev, i as init, s as safe_not_equal, a as space, e as element, t as text, d as claim_text, c as claim_element, b as children, f as detach, h as add_location, g as attr, j as insert, k as append, w as set_data, n as noop } from './chunk.80ee2ef1.js';

/* src/routes/blog/[slug].svelte generated by Svelte v3.6.2 */

const file = "src/routes/blog/[slug].svelte";

function create_fragment(ctx) {
	var title_value, t0, h1, t1_value = ctx.post.title, t1, t2, div, raw_value = ctx.post.html;

	document.title = title_value = ctx.post.title;

	return {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			div = element("div");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");

			h1 = claim_element(nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach);
			t2 = claim_text(nodes, "\n\n");

			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(h1, file, 59, 0, 1223);
			attr(div, "class", "content svelte-gnxal1");
			add_location(div, file, 61, 0, 1246);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			insert(target, t2, anchor);
			insert(target, div, anchor);
			div.innerHTML = raw_value;
		},

		p: function update(changed, ctx) {
			if ((changed.post) && title_value !== (title_value = ctx.post.title)) {
				document.title = title_value;
			}

			if ((changed.post) && t1_value !== (t1_value = ctx.post.title)) {
				set_data(t1, t1_value);
			}

			if ((changed.post) && raw_value !== (raw_value = ctx.post.html)) {
				div.innerHTML = raw_value;
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(h1);
				detach(t2);
				detach(div);
			}
		}
	};
}

async function preload({ params, query }) {
	// the `slug` parameter is available because
	// this file is called [slug].html
	const res = await this.fetch(`blog/${params.slug}.json`);
	const data = await res.json();

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}

function instance($$self, $$props, $$invalidate) {
	let { post } = $$props;

	const writable_props = ['post'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Slug> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('post' in $$props) $$invalidate('post', post = $$props.post);
	};

	return { post };
}

class Slug extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["post"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.post === undefined && !('post' in props)) {
			console.warn("<Slug> was created without expected prop 'post'");
		}
	}

	get post() {
		throw new Error("<Slug>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<Slug>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Slug;
export { preload };
