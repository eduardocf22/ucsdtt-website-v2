import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, c as claim_element, b as children, f as detach, g as attr, G as set_style, h as add_location, H as listen, j as insert, t as text, a as space, d as claim_text, k as append, w as set_data, n as noop, m as mount_component, q as transition_in, r as transition_out, u as destroy_component } from './chunk.b5534b6a.js';
import './chunk.ccbdf3ce.js';

/* src/components/PledgeClass.svelte generated by Svelte v3.6.2 */

const file = "src/components/PledgeClass.svelte";

// (78:0) {#if boxVisible}
function create_if_block(ctx) {
	var div, dispose;

	return {
		c: function create() {
			div = element("div");
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, style: true }, false);
			var div_nodes = children(div);

			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(div, "class", "cursor-box svelte-9im5rj");
			set_style(div, "top", ctx.picY);
			set_style(div, "left", ctx.picX);
			add_location(div, file, 78, 2, 1549);
			dispose = listen(div, "click", ctx.handleMouseClick);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
		},

		p: function update(changed, ctx) {
			if (changed.picY) {
				set_style(div, "top", ctx.picY);
			}

			if (changed.picX) {
				set_style(div, "left", ctx.picX);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}

			dispose();
		}
	};
}

function create_fragment(ctx) {
	var p, t0, t1, t2, t3, t4, t5, div0, img, img_src_value, img_alt_value, t6, div1, h2, t7, t8_value = ctx.curBrother.name, t8, t9, h3, t10, t11_value = ctx.curBrother.major, t11, dispose;

	var if_block = (ctx.boxVisible) && create_if_block(ctx);

	return {
		c: function create() {
			p = element("p");
			t0 = text("mx: ");
			t1 = text(ctx.mx);
			t2 = text(" my: ");
			t3 = text(ctx.my);
			t4 = space();
			if (if_block) if_block.c();
			t5 = space();
			div0 = element("div");
			img = element("img");
			t6 = space();
			div1 = element("div");
			h2 = element("h2");
			t7 = text("Brother: ");
			t8 = text(t8_value);
			t9 = space();
			h3 = element("h3");
			t10 = text("Major: ");
			t11 = text(t11_value);
			this.h();
		},

		l: function claim(nodes) {
			p = claim_element(nodes, "P", {}, false);
			var p_nodes = children(p);

			t0 = claim_text(p_nodes, "mx: ");
			t1 = claim_text(p_nodes, ctx.mx);
			t2 = claim_text(p_nodes, " my: ");
			t3 = claim_text(p_nodes, ctx.my);
			p_nodes.forEach(detach);
			t4 = claim_text(nodes, "\n\n");
			if (if_block) if_block.l(nodes);
			t5 = claim_text(nodes, "\n\n");

			div0 = claim_element(nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			img = claim_element(div0_nodes, "IMG", { class: true, src: true, alt: true }, false);
			var img_nodes = children(img);

			img_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t6 = claim_text(nodes, "\n\n");

			div1 = claim_element(nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			h2 = claim_element(div1_nodes, "H2", {}, false);
			var h2_nodes = children(h2);

			t7 = claim_text(h2_nodes, "Brother: ");
			t8 = claim_text(h2_nodes, t8_value);
			h2_nodes.forEach(detach);
			t9 = claim_text(div1_nodes, "\n  ");

			h3 = claim_element(div1_nodes, "H3", {}, false);
			var h3_nodes = children(h3);

			t10 = claim_text(h3_nodes, "Major: ");
			t11 = claim_text(h3_nodes, t11_value);
			h3_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(p, file, 75, 0, 1504);
			attr(img, "class", "class-img svelte-9im5rj");
			attr(img, "src", img_src_value = ctx.curClass.image);
			attr(img, "alt", img_alt_value = ctx.curClass.className);
			add_location(img, file, 90, 2, 1721);
			attr(div0, "class", "class-img-container svelte-9im5rj");
			add_location(div0, file, 89, 0, 1685);
			add_location(h2, file, 99, 2, 1879);
			add_location(h3, file, 100, 2, 1917);
			attr(div1, "class", "brother-info svelte-9im5rj");
			add_location(div1, file, 98, 0, 1850);
			dispose = listen(img, "click", ctx.handleMouseClick);
		},

		m: function mount(target, anchor) {
			insert(target, p, anchor);
			append(p, t0);
			append(p, t1);
			append(p, t2);
			append(p, t3);
			insert(target, t4, anchor);
			if (if_block) if_block.m(target, anchor);
			insert(target, t5, anchor);
			insert(target, div0, anchor);
			append(div0, img);
			insert(target, t6, anchor);
			insert(target, div1, anchor);
			append(div1, h2);
			append(h2, t7);
			append(h2, t8);
			append(div1, t9);
			append(div1, h3);
			append(h3, t10);
			append(h3, t11);
		},

		p: function update(changed, ctx) {
			if (changed.mx) {
				set_data(t1, ctx.mx);
			}

			if (changed.my) {
				set_data(t3, ctx.my);
			}

			if (ctx.boxVisible) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(t5.parentNode, t5);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(p);
				detach(t4);
			}

			if (if_block) if_block.d(detaching);

			if (detaching) {
				detach(t5);
				detach(div0);
				detach(t6);
				detach(div1);
			}

			dispose();
		}
	};
}

let classIndex = 0;

function instance($$self, $$props, $$invalidate) {
	// Contains an array of Javascript objects.
  // Each object contains: 
  // [
  //    {
  //         className: string
  //         image: string (url to image)
  //         members: [{
  //           name: string
  //           major: string
  //           pixelLocationX: number (pixel location on class picture)
  //           pixelLocationY: number (same but on y axis)
  //           linkedIn: string (the url)
  //         },
  //     ...]
  //    },
  // ...]
  // basically an ar
  // order from newest to oldest
  let { pledgeClasses } = $$props;
  let boxVisible = false;
  let curClass = pledgeClasses[classIndex];

  let curBrother = curClass.members[0];

  let my, mx;

  function handleMouseClick(event) {
		$$invalidate('mx', mx = event.clientX);
		$$invalidate('my', my = event.clientY);
    $$invalidate('boxVisible', boxVisible = true);
	}

	const writable_props = ['pledgeClasses'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<PledgeClass> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('pledgeClasses' in $$props) $$invalidate('pledgeClasses', pledgeClasses = $$props.pledgeClasses);
	};

	let picY, picX;

	$$self.$$.update = ($$dirty = { my: 1, mx: 1 }) => {
		if ($$dirty.my) { $$invalidate('picY', picY = `${my - 140}px`); }
		if ($$dirty.mx) { $$invalidate('picX', picX = `${mx - 55}px`); }
	};

	return {
		pledgeClasses,
		boxVisible,
		curClass,
		curBrother,
		my,
		mx,
		handleMouseClick,
		picY,
		picX
	};
}

class PledgeClass extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["pledgeClasses"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.pledgeClasses === undefined && !('pledgeClasses' in props)) {
			console.warn("<PledgeClass> was created without expected prop 'pledgeClasses'");
		}
	}

	get pledgeClasses() {
		throw new Error("<PledgeClass>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set pledgeClasses(value) {
		throw new Error("<PledgeClass>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/members.svelte generated by Svelte v3.6.2 */

const file$1 = "src/routes/members.svelte";

function create_fragment$1(ctx) {
	var t0, h1, t1, t2, current;

	var pledgeclass = new PledgeClass({
		props: { pledgeClasses: ctx.pledgeClasses },
		$$inline: true
	});

	return {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Members");
			t2 = space();
			pledgeclass.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");

			h1 = claim_element(nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, "Members");
			h1_nodes.forEach(detach);
			t2 = claim_text(nodes, "\n\n");
			pledgeclass.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			document.title = "Members";
			add_location(h1, file$1, 87, 0, 1954);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			insert(target, t2, anchor);
			mount_component(pledgeclass, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var pledgeclass_changes = {};
			if (changed.pledgeClasses) pledgeclass_changes.pledgeClasses = ctx.pledgeClasses;
			pledgeclass.$set(pledgeclass_changes);
		},

		i: function intro(local) {
			if (current) return;
			transition_in(pledgeclass.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(pledgeclass.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(h1);
				detach(t2);
			}

			destroy_component(pledgeclass, detaching);
		}
	};
}

function instance$1($$self) {
	const pledgeClasses = [
		{
			// Just a proof of concept, definitely want to move tihs to a JSON 
			// and write a script to expedite this -> parse roster?
			className: "Upsilon",
			image: "images/upsilon_class.jpg",
			members: [{
				name: "Brent Neldner",
				major: "Computer Science",
				pixelLocationX: "219px",
				pixelLocationY: "339px",
				linkedIn: "..",
			}, {
				name: "Amy Li",
				major: "Computer Science",
				pixelLocationX: "317px",
				pixelLocationY: "374px",
				linkedIn: "..",
			}, {
				name: "Jordan Luk",
				major: "Mechanical Engineering",
				pixelLocationX: "409px",
				pixelLocationY: "377px",
				linkedIn: "..",
			}, {
				name: "Austin Le",
				major: "Data Science",
				pixelLocationX: "529px",
				pixelLocationY: "369px",
				linkedIn: "..",
			}, {
				name: "Barry Cheung",
				major: "Mechanical Engineering",
				pixelLocationX: "654px",
				pixelLocationY: "380px",
				linkedIn: "..",
			}, {
				name: "Jade Tran",
				major: "Computer Science",
				pixelLocationX: "715px",
				pixelLocationY: "412px",
				linkedIn: "..",
			}, {
				name: "Jack Lin",
				major: "Data Science",
				pixelLocationX: "812px",
				pixelLocationY: "348px",
				linkedIn: "..",
			}, {
				name: "Lulu Zhu",
				major: "Computer Science",
				pixelLocationX: "451px",
				pixelLocationY: "476px",
				linkedIn: "..",
			}, {
				name: "Claire Zhang",
				major: "Bioengineering",
				pixelLocationX: "600px",
				pixelLocationY: "487px",
				linkedIn: "..",
			}, {
				name: "BaoBao Laosirihongthong",
				major: "Chemical Engineering",
				pixelLocationX: "398px",
				pixelLocationY: "567px",
				linkedIn: "..",
			}, {
				name: "Ryan Murase",
				major: "Computer Science",
				pixelLocationX: "791px",
				pixelLocationY: "562px",
				linkedIn: "..",
			}, 
			]
		}
	];

	return { pledgeClasses };
}

class Members extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, []);
	}
}

export default Members;
