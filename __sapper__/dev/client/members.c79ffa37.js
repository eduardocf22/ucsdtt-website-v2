import { S as SvelteComponentDev, i as init, s as safe_not_equal, v as globals, e as element, c as claim_element, b as children, f as detach, g as attr, h as add_location, H as listen, j as insert, k as append, n as noop, t as text, a as space, x as empty, d as claim_text, m as mount_component, q as transition_in, r as transition_out, u as destroy_component } from './chunk.b5534b6a.js';
import { e as elasticOut } from './chunk.be4ac2db.js';

/* src/components/PledgeClass.svelte generated by Svelte v3.6.2 */
const { console: console_1 } = globals;

const file = "src/components/PledgeClass.svelte";

// (85:0) {#if visible}
function create_if_block(ctx) {
	var div1, div0, img, img_src_value, img_alt_value, dispose;

	return {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			img = element("img");
			this.h();
		},

		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			img = claim_element(div0_nodes, "IMG", { class: true, src: true, alt: true }, false);
			var img_nodes = children(img);

			img_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(img, "class", "class-img svelte-d18bm6");
			attr(img, "src", img_src_value = ctx.curClass.image);
			attr(img, "alt", img_alt_value = ctx.curClass.className);
			add_location(img, file, 87, 6, 2010);
			attr(div0, "class", "class-img-container svelte-d18bm6");
			add_location(div0, file, 86, 4, 1970);
			attr(div1, "class", "pledge-classes");
			add_location(div1, file, 85, 2, 1937);
			dispose = listen(img, "click", zoom);
		},

		m: function mount(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			append(div0, img);
		},

		p: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(div1);
			}

			dispose();
		}
	};
}

function create_fragment(ctx) {
	var button, t0, t1, if_block_anchor, dispose;

	var if_block = (ctx.visible) && create_if_block(ctx);

	return {
		c: function create() {
			button = element("button");
			t0 = text("reset");
			t1 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},

		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", {}, false);
			var button_nodes = children(button);

			t0 = claim_text(button_nodes, "reset");
			button_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n");
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},

		h: function hydrate() {
			add_location(button, file, 83, 0, 1871);
			dispose = listen(button, "click", ctx.toggleVisible);
		},

		m: function mount(target, anchor) {
			insert(target, button, anchor);
			append(button, t0);
			insert(target, t1, anchor);
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},

		p: function update(changed, ctx) {
			if (ctx.visible) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
				detach(button);
				detach(t1);
			}

			if (if_block) if_block.d(detaching);

			if (detaching) {
				detach(if_block_anchor);
			}

			dispose();
		}
	};
}

let classIndex = 0;

let memberIndex = 0;

function zoom(node, params) {
  console.log(getComputedStyle(node));
  const existingTransform = 
      getComputedStyle(node).transform.replace('none', '');
  
  return {
			delay: params.delay || 0,
			duration: params.duration || 400,
			easing: params.easing || elasticOut,
			css: (t, u) => `transform: ${existingTransform} scale(${t})`
		};
}

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

  let visible = true;
  let curClass = pledgeClasses[classIndex];
  let curMember = curClass.members[memberIndex];

  function toggleVisible() {
    $$invalidate('visible', visible= False);
    $$invalidate('visible', visible = True);
  }

	const writable_props = ['pledgeClasses'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console_1.warn(`<PledgeClass> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('pledgeClasses' in $$props) $$invalidate('pledgeClasses', pledgeClasses = $$props.pledgeClasses);
	};

	return {
		pledgeClasses,
		visible,
		curClass,
		toggleVisible
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
			add_location(h1, file$1, 24, 0, 391);
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
			className: "Upsilon",
			image: "images/upsilon_class.jpg",
			members: [{
				name: "Rishi Dhanaraj",
				major: "Computer Science",
				pixelLocationX: "50%",
				pixelLocationY: "50%",
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
