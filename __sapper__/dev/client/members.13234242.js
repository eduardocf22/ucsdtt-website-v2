import { S as SvelteComponentDev, i as init, s as safe_not_equal, v as globals, e as element, c as claim_element, b as children, f as detach, g as attr, G as set_style, h as add_location, H as listen, j as insert, t as text, a as space, d as claim_text, k as append, w as set_data, n as noop, m as mount_component, q as transition_in, r as transition_out, u as destroy_component } from './chunk.b5534b6a.js';
import './chunk.ccbdf3ce.js';

/* src/components/PledgeClass.svelte generated by Svelte v3.6.2 */
const { console: console_1 } = globals;

const file = "src/components/PledgeClass.svelte";

// (95:0) {#if boxVisible}
function create_if_block_1(ctx) {
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
			attr(div, "class", "cursor-box svelte-1ct97j0");
			set_style(div, "top", ctx.picY);
			set_style(div, "left", ctx.picX);
			add_location(div, file, 95, 2, 2037);
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

// (120:2) {:else}
function create_else_block(ctx) {
	var h2, t;

	return {
		c: function create() {
			h2 = element("h2");
			t = text("Oops! Please try and select a brother again.");
			this.h();
		},

		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", {}, false);
			var h2_nodes = children(h2);

			t = claim_text(h2_nodes, "Oops! Please try and select a brother again.");
			h2_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(h2, file, 120, 4, 2477);
		},

		m: function mount(target, anchor) {
			insert(target, h2, anchor);
			append(h2, t);
		},

		p: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(h2);
			}
		}
	};
}

// (117:2) {#if curBrother}
function create_if_block(ctx) {
	var h2, t0, t1_value = ctx.curBrother.name, t1, t2, h3, t3, t4_value = ctx.curBrother.major, t4;

	return {
		c: function create() {
			h2 = element("h2");
			t0 = text("Brother: ");
			t1 = text(t1_value);
			t2 = space();
			h3 = element("h3");
			t3 = text("Major: ");
			t4 = text(t4_value);
			this.h();
		},

		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", {}, false);
			var h2_nodes = children(h2);

			t0 = claim_text(h2_nodes, "Brother: ");
			t1 = claim_text(h2_nodes, t1_value);
			h2_nodes.forEach(detach);
			t2 = claim_text(nodes, "\n    ");

			h3 = claim_element(nodes, "H3", {}, false);
			var h3_nodes = children(h3);

			t3 = claim_text(h3_nodes, "Major: ");
			t4 = claim_text(h3_nodes, t4_value);
			h3_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(h2, file, 117, 4, 2388);
			add_location(h3, file, 118, 4, 2428);
		},

		m: function mount(target, anchor) {
			insert(target, h2, anchor);
			append(h2, t0);
			append(h2, t1);
			insert(target, t2, anchor);
			insert(target, h3, anchor);
			append(h3, t3);
			append(h3, t4);
		},

		p: function update(changed, ctx) {
			if ((changed.curBrother) && t1_value !== (t1_value = ctx.curBrother.name)) {
				set_data(t1, t1_value);
			}

			if ((changed.curBrother) && t4_value !== (t4_value = ctx.curBrother.major)) {
				set_data(t4, t4_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h2);
				detach(t2);
				detach(h3);
			}
		}
	};
}

function create_fragment(ctx) {
	var p, t0, t1, t2, t3, t4, t5, div0, img, img_src_value, img_alt_value, t6, div1, dispose;

	var if_block0 = (ctx.boxVisible) && create_if_block_1(ctx);

	function select_block_type(ctx) {
		if (ctx.curBrother) return create_if_block;
		return create_else_block;
	}

	var current_block_type = select_block_type(ctx);
	var if_block1 = current_block_type(ctx);

	return {
		c: function create() {
			p = element("p");
			t0 = text("mx: ");
			t1 = text(ctx.mx);
			t2 = text(" my: ");
			t3 = text(ctx.my);
			t4 = space();
			if (if_block0) if_block0.c();
			t5 = space();
			div0 = element("div");
			img = element("img");
			t6 = space();
			div1 = element("div");
			if_block1.c();
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
			if (if_block0) if_block0.l(nodes);
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

			if_block1.l(div1_nodes);
			div1_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(p, file, 92, 0, 1992);
			attr(img, "class", "class-img svelte-1ct97j0");
			attr(img, "src", img_src_value = ctx.curClass.image);
			attr(img, "alt", img_alt_value = ctx.curClass.className);
			add_location(img, file, 107, 2, 2209);
			attr(div0, "class", "class-img-container svelte-1ct97j0");
			add_location(div0, file, 106, 0, 2173);
			attr(div1, "class", "brother-info svelte-1ct97j0");
			add_location(div1, file, 115, 0, 2338);
			dispose = listen(img, "click", ctx.handleMouseClick);
		},

		m: function mount(target, anchor) {
			insert(target, p, anchor);
			append(p, t0);
			append(p, t1);
			append(p, t2);
			append(p, t3);
			insert(target, t4, anchor);
			if (if_block0) if_block0.m(target, anchor);
			insert(target, t5, anchor);
			insert(target, div0, anchor);
			append(div0, img);
			insert(target, t6, anchor);
			insert(target, div1, anchor);
			if_block1.m(div1, null);
		},

		p: function update(changed, ctx) {
			if (changed.mx) {
				set_data(t1, ctx.mx);
			}

			if (changed.my) {
				set_data(t3, ctx.my);
			}

			if (ctx.boxVisible) {
				if (if_block0) {
					if_block0.p(changed, ctx);
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					if_block0.m(t5.parentNode, t5);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block1) {
				if_block1.p(changed, ctx);
			} else {
				if_block1.d(1);
				if_block1 = current_block_type(ctx);
				if (if_block1) {
					if_block1.c();
					if_block1.m(div1, null);
				}
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(p);
				detach(t4);
			}

			if (if_block0) if_block0.d(detaching);

			if (detaching) {
				detach(t5);
				detach(div0);
				detach(t6);
				detach(div1);
			}

			if_block1.d();
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

  // let curBrother = curClass.members[0]
  let curBrother;

  let my, mx;

  function handleMouseClick(event) {
		$$invalidate('mx', mx = event.clientX);
		$$invalidate('my', my = event.clientY);
    $$invalidate('boxVisible', boxVisible = true);
    $$invalidate('curBrother', curBrother = findNearestBrother());

  }

  // Finds the closest brother that is also within .cursor-box padding away.
  // Returns undefined if none are found.
  function findNearestBrother() {
    const brothersInRange = curClass.members.filter((member) => {
      if (Math.abs(member.pixelLocationX - mx) < 50 &&
          Math.abs(member.pixelLocationY - my) < 50) {
            return true;
      }
      return false;
    });
    console.log(brothersInRange);
  }

	const writable_props = ['pledgeClasses'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console_1.warn(`<PledgeClass> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('pledgeClasses' in $$props) $$invalidate('pledgeClasses', pledgeClasses = $$props.pledgeClasses);
	};

	let picX, picY;

	$$self.$$.update = ($$dirty = { mx: 1, my: 1 }) => {
		if ($$dirty.mx) { $$invalidate('picX', picX = `${mx - 55}px`); }
		if ($$dirty.my) { $$invalidate('picY', picY = `${my - 140}px`); }
	};

	return {
		pledgeClasses,
		boxVisible,
		curClass,
		curBrother,
		my,
		mx,
		handleMouseClick,
		picX,
		picY
	};
}

class PledgeClass extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["pledgeClasses"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.pledgeClasses === undefined && !('pledgeClasses' in props)) {
			console_1.warn("<PledgeClass> was created without expected prop 'pledgeClasses'");
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
			add_location(h1, file$1, 86, 0, 1860);
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
				pixelLocationX: 219,
				pixelLocationY: 339,
				linkedIn: "..",
			}, {
				name: "Amy Li",
				major: "Computer Science",
				pixelLocationX: 317,
				pixelLocationY: 374,
				linkedIn: "..",
			}, {
				name: "Jordan Luk",
				major: "Mechanical Engineering",
				pixelLocationX: 409,
				pixelLocationY: 377,
				linkedIn: "..",
			}, {
				name: "Austin Le",
				major: "Data Science",
				pixelLocationX: 529,
				pixelLocationY: 369,
				linkedIn: "..",
			}, {
				name: "Barry Cheung",
				major: "Mechanical Engineering",
				pixelLocationX: 654,
				pixelLocationY: 380,
				linkedIn: "..",
			}, {
				name: "Jade Tran",
				major: "Computer Science",
				pixelLocationX: 715,
				pixelLocationY: 412,
				linkedIn: "..",
			}, {
				name: "Jack Lin",
				major: "Data Science",
				pixelLocationX: 812,
				pixelLocationY: 348,
				linkedIn: "..",
			}, {
				name: "Lulu Zhu",
				major: "Computer Science",
				pixelLocationX: 451,
				pixelLocationY: 476,
				linkedIn: "..",
			}, {
				name: "Claire Zhang",
				major: "Bioengineering",
				pixelLocationX: 600,
				pixelLocationY: 487,
				linkedIn: "..",
			}, {
				name: "BaoBao Laosirihongthong",
				major: "Chemical Engineering",
				pixelLocationX: 398,
				pixelLocationY: 567,
				linkedIn: "..",
			}, {
				name: "Ryan Murase",
				major: "Computer Science",
				pixelLocationX: 791,
				pixelLocationY: 562,
				linkedIn: "..",
			}]
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
