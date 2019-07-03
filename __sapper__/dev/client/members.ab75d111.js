import { S as SvelteComponentDev, i as init, s as safe_not_equal, D as add_render_callback, e as element, t as text, a as space, c as claim_element, b as children, d as claim_text, f as detach, h as add_location, g as attr, G as set_style, H as listen, j as insert, k as append, w as set_data, n as noop, I as run_all, m as mount_component, q as transition_in, r as transition_out, u as destroy_component } from './chunk.b5534b6a.js';
import './chunk.ccbdf3ce.js';

/* src/components/PledgeClass.svelte generated by Svelte v3.6.2 */

const file = "src/components/PledgeClass.svelte";

function create_fragment(ctx) {
	var scrolling = false, clear_scrolling = () => { scrolling = false; }, scrolling_timeout, p0, t0, t1, t2, p1, t3, t4, t5, p2, t6, t7, t8, p3, t9, t10, t11, div0, t12, div1, img, img_src_value, img_alt_value, dispose;

	add_render_callback(ctx.onwindowscroll);

	return {
		c: function create() {
			p0 = element("p");
			t0 = text("mx:");
			t1 = text(ctx.mx);
			t2 = space();
			p1 = element("p");
			t3 = text("my:");
			t4 = text(ctx.my);
			t5 = space();
			p2 = element("p");
			t6 = text("sx:");
			t7 = text(ctx.sx);
			t8 = space();
			p3 = element("p");
			t9 = text("sy:");
			t10 = text(ctx.sy);
			t11 = space();
			div0 = element("div");
			t12 = space();
			div1 = element("div");
			img = element("img");
			this.h();
		},

		l: function claim(nodes) {
			p0 = claim_element(nodes, "P", {}, false);
			var p0_nodes = children(p0);

			t0 = claim_text(p0_nodes, "mx:");
			t1 = claim_text(p0_nodes, ctx.mx);
			p0_nodes.forEach(detach);
			t2 = claim_text(nodes, "\n");

			p1 = claim_element(nodes, "P", {}, false);
			var p1_nodes = children(p1);

			t3 = claim_text(p1_nodes, "my:");
			t4 = claim_text(p1_nodes, ctx.my);
			p1_nodes.forEach(detach);
			t5 = claim_text(nodes, "\n");

			p2 = claim_element(nodes, "P", {}, false);
			var p2_nodes = children(p2);

			t6 = claim_text(p2_nodes, "sx:");
			t7 = claim_text(p2_nodes, ctx.sx);
			p2_nodes.forEach(detach);
			t8 = claim_text(nodes, "\n");

			p3 = claim_element(nodes, "P", {}, false);
			var p3_nodes = children(p3);

			t9 = claim_text(p3_nodes, "sy:");
			t10 = claim_text(p3_nodes, ctx.sy);
			p3_nodes.forEach(detach);
			t11 = claim_text(nodes, "\n    \n\n");

			div0 = claim_element(nodes, "DIV", { class: true, style: true }, false);
			var div0_nodes = children(div0);

			div0_nodes.forEach(detach);
			t12 = claim_text(nodes, "\n\n");

			div1 = claim_element(nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			img = claim_element(div1_nodes, "IMG", { class: true, src: true, alt: true }, false);
			var img_nodes = children(img);

			img_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(p0, file, 52, 0, 1067);
			add_location(p1, file, 53, 0, 1082);
			add_location(p2, file, 54, 0, 1097);
			add_location(p3, file, 55, 0, 1112);
			attr(div0, "class", "cursor-box svelte-1fbz5ow");
			set_style(div0, "top", ((ctx.my) + 'px'));
			set_style(div0, "left", ((ctx.mx) + 'px'));
			add_location(div0, file, 59, 0, 1196);
			attr(img, "class", "class-img");
			attr(img, "src", img_src_value = ctx.curClass.image);
			attr(img, "alt", img_alt_value = ctx.curClass.className);
			add_location(img, file, 69, 2, 1332);
			attr(div1, "class", "class-img-container svelte-1fbz5ow");
			add_location(div1, file, 68, 0, 1296);

			dispose = [
				listen(window, "scroll", () => {
					scrolling = true;
					clearTimeout(scrolling_timeout);
					scrolling_timeout = setTimeout(clear_scrolling, 100);
					ctx.onwindowscroll();
				}),
				listen(img, "mousemove", ctx.handleMousemove)
			];
		},

		m: function mount(target, anchor) {
			insert(target, p0, anchor);
			append(p0, t0);
			append(p0, t1);
			insert(target, t2, anchor);
			insert(target, p1, anchor);
			append(p1, t3);
			append(p1, t4);
			insert(target, t5, anchor);
			insert(target, p2, anchor);
			append(p2, t6);
			append(p2, t7);
			insert(target, t8, anchor);
			insert(target, p3, anchor);
			append(p3, t9);
			append(p3, t10);
			insert(target, t11, anchor);
			insert(target, div0, anchor);
			insert(target, t12, anchor);
			insert(target, div1, anchor);
			append(div1, img);
		},

		p: function update(changed, ctx) {
			if (changed.sx || changed.sy && !scrolling) {
				scrolling = true;
				clearTimeout(scrolling_timeout);
				scrollTo(ctx.sx, ctx.sy);
				scrolling_timeout = setTimeout(clear_scrolling, 100);
			}

			if (changed.mx) {
				set_data(t1, ctx.mx);
			}

			if (changed.my) {
				set_data(t4, ctx.my);
			}

			if (changed.sx) {
				set_data(t7, ctx.sx);
			}

			if (changed.sy) {
				set_data(t10, ctx.sy);
			}

			if (changed.my) {
				set_style(div0, "top", ((ctx.my) + 'px'));
			}

			if (changed.mx) {
				set_style(div0, "left", ((ctx.mx) + 'px'));
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(p0);
				detach(t2);
				detach(p1);
				detach(t5);
				detach(p2);
				detach(t8);
				detach(p3);
				detach(t11);
				detach(div0);
				detach(t12);
				detach(div1);
			}

			run_all(dispose);
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
  let curClass = pledgeClasses[classIndex];

  let my, mx, sy, sx;

  function handleMousemove(event) {
		$$invalidate('mx', mx = event.clientX);
		$$invalidate('my', my = event.clientY);
	}

	const writable_props = ['pledgeClasses'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<PledgeClass> was created with unknown prop '${key}'`);
	});

	function onwindowscroll() {
		sy = window.pageYOffset; $$invalidate('sy', sy);
		sx = window.pageXOffset; $$invalidate('sx', sx);
	}

	$$self.$set = $$props => {
		if ('pledgeClasses' in $$props) $$invalidate('pledgeClasses', pledgeClasses = $$props.pledgeClasses);
	};

	return {
		pledgeClasses,
		curClass,
		my,
		mx,
		sy,
		sx,
		handleMousemove,
		onwindowscroll
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
