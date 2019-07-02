import { S as SvelteComponentDev, i as init, s as safe_not_equal, a as space, e as element, t as text, d as claim_text, c as claim_element, b as children, f as detach, h as add_location, j as insert, k as append, n as noop } from './chunk.b5534b6a.js';

/* src/routes/rush.svelte generated by Svelte v3.6.2 */

const file = "src/routes/rush.svelte";

function create_fragment(ctx) {
	var t0, h1, t1, t2, p, t3;

	return {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Rush Theta Tau!");
			t2 = space();
			p = element("p");
			t3 = text("This is the 'rush' page. There's not much here.");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");

			h1 = claim_element(nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, "Rush Theta Tau!");
			h1_nodes.forEach(detach);
			t2 = claim_text(nodes, "\n\n");

			p = claim_element(nodes, "P", {}, false);
			var p_nodes = children(p);

			t3 = claim_text(p_nodes, "This is the 'rush' page. There's not much here.");
			p_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			document.title = "Rush";
			add_location(h1, file, 4, 0, 51);
			add_location(p, file, 6, 0, 77);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			insert(target, t2, anchor);
			insert(target, p, anchor);
			append(p, t3);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(h1);
				detach(t2);
				detach(p);
			}
		}
	};
}

class Rush extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default Rush;
