import { S as SvelteComponentDev, i as init, s as safe_not_equal, D as add_render_callback, e as element, t as text, a as space, c as claim_element, b as children, d as claim_text, f as detach, g as attr, h as add_location, E as set_style, F as listen, j as insert, k as append, n as noop, m as mount_component, q as transition_in, r as transition_out, u as destroy_component } from './chunk.8b03c4d1.js';

/* src/components/Hero.svelte generated by Svelte v3.6.2 */

const file = "src/components/Hero.svelte";

function create_fragment(ctx) {
	var scrolling = false, clear_scrolling = () => { scrolling = false; }, scrolling_timeout, h1, t0, t1, img, dispose;

	add_render_callback(ctx.onwindowscroll);

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Hello World");
			t1 = space();
			img = element("img");
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Hello World");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n");

			img = claim_element(nodes, "IMG", { alt: true, src: true, class: true, style: true }, false);
			var img_nodes = children(img);

			img_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(h1, "class", "text-display svelte-9yw33r");
			add_location(h1, file, 40, 0, 607);
			attr(img, "alt", ctx.alt);
			attr(img, "src", ctx.src);
			attr(img, "class", "parallax svelte-9yw33r");
			set_style(img, "transform", "translate(0, " + ctx.sy * .2 + "px)");
			add_location(img, file, 41, 0, 649);
			dispose = listen(window, "scroll", () => {
				scrolling = true;
				clearTimeout(scrolling_timeout);
				scrolling_timeout = setTimeout(clear_scrolling, 100);
				ctx.onwindowscroll();
			});
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, img, anchor);
		},

		p: function update(changed, ctx) {
			if (changed.sy && !scrolling) {
				scrolling = true;
				clearTimeout(scrolling_timeout);
				scrollTo(window.pageXOffset, ctx.sy);
				scrolling_timeout = setTimeout(clear_scrolling, 100);
			}

			if (changed.alt) {
				attr(img, "alt", ctx.alt);
			}

			if (changed.src) {
				attr(img, "src", ctx.src);
			}

			if (changed.sy) {
				set_style(img, "transform", "translate(0, " + ctx.sy * .2 + "px)");
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(img);
			}

			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { src, alt, title, tagline } = $$props;
	// export let logoHeight;
	// export let logoWidth;
	let sy = 0;

	const writable_props = ['src', 'alt', 'title', 'tagline'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Hero> was created with unknown prop '${key}'`);
	});

	function onwindowscroll() {
		sy = window.pageYOffset; $$invalidate('sy', sy);
	}

	$$self.$set = $$props => {
		if ('src' in $$props) $$invalidate('src', src = $$props.src);
		if ('alt' in $$props) $$invalidate('alt', alt = $$props.alt);
		if ('title' in $$props) $$invalidate('title', title = $$props.title);
		if ('tagline' in $$props) $$invalidate('tagline', tagline = $$props.tagline);
	};

	return {
		src,
		alt,
		title,
		tagline,
		sy,
		onwindowscroll
	};
}

class Hero extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["src", "alt", "title", "tagline"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.src === undefined && !('src' in props)) {
			console.warn("<Hero> was created without expected prop 'src'");
		}
		if (ctx.alt === undefined && !('alt' in props)) {
			console.warn("<Hero> was created without expected prop 'alt'");
		}
		if (ctx.title === undefined && !('title' in props)) {
			console.warn("<Hero> was created without expected prop 'title'");
		}
		if (ctx.tagline === undefined && !('tagline' in props)) {
			console.warn("<Hero> was created without expected prop 'tagline'");
		}
	}

	get src() {
		throw new Error("<Hero>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set src(value) {
		throw new Error("<Hero>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get alt() {
		throw new Error("<Hero>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set alt(value) {
		throw new Error("<Hero>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get title() {
		throw new Error("<Hero>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set title(value) {
		throw new Error("<Hero>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get tagline() {
		throw new Error("<Hero>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set tagline(value) {
		throw new Error("<Hero>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/index.svelte generated by Svelte v3.6.2 */

const file$1 = "src/routes/index.svelte";

function create_fragment$1(ctx) {
	var t0, t1, br0, t2, br1, t3, br2, t4, br3, t5, br4, t6, br5, t7, br6, t8, br7, t9, br8, t10, br9, t11, br10, t12, br11, t13, br12, t14, br13, t15, br14, t16, br15, t17, br16, t18, br17, t19, br18, t20, br19, t21, br20, t22, br21, t23, br22, t24, br23, t25, br24, t26, br25, t27, br26, t28, br27, t29, br28, t30, br29, t31, br30, t32, br31, t33, br32, t34, br33, t35, br34, t36, br35, t37, br36, t38, br37, t39, br38, t40, br39, t41, br40, t42, br41, t43, br42, t44, br43, t45, br44, t46, br45, t47, br46, t48, br47, t49, br48, t50, br49, t51, br50, t52, br51, t53, br52, t54, br53, t55, br54, t56, br55, t57, br56, t58, br57, t59, br58, t60, br59, t61, br60, t62, br61, t63, br62, t64, p, t65, a, t66, current;

	var hero = new Hero({
		props: {
		title: "Theta Tau",
		tagline: "Epsilon Delta",
		src: "icons/garnett-unfilled.svg",
		alt: "a hero"
	},
		$$inline: true
	});

	return {
		c: function create() {
			t0 = space();
			hero.$$.fragment.c();
			t1 = space();
			br0 = element("br");
			t2 = space();
			br1 = element("br");
			t3 = space();
			br2 = element("br");
			t4 = space();
			br3 = element("br");
			t5 = space();
			br4 = element("br");
			t6 = space();
			br5 = element("br");
			t7 = space();
			br6 = element("br");
			t8 = space();
			br7 = element("br");
			t9 = space();
			br8 = element("br");
			t10 = space();
			br9 = element("br");
			t11 = space();
			br10 = element("br");
			t12 = space();
			br11 = element("br");
			t13 = space();
			br12 = element("br");
			t14 = space();
			br13 = element("br");
			t15 = space();
			br14 = element("br");
			t16 = space();
			br15 = element("br");
			t17 = space();
			br16 = element("br");
			t18 = space();
			br17 = element("br");
			t19 = space();
			br18 = element("br");
			t20 = space();
			br19 = element("br");
			t21 = space();
			br20 = element("br");
			t22 = space();
			br21 = element("br");
			t23 = space();
			br22 = element("br");
			t24 = space();
			br23 = element("br");
			t25 = space();
			br24 = element("br");
			t26 = space();
			br25 = element("br");
			t27 = space();
			br26 = element("br");
			t28 = space();
			br27 = element("br");
			t29 = space();
			br28 = element("br");
			t30 = space();
			br29 = element("br");
			t31 = space();
			br30 = element("br");
			t32 = space();
			br31 = element("br");
			t33 = space();
			br32 = element("br");
			t34 = space();
			br33 = element("br");
			t35 = space();
			br34 = element("br");
			t36 = space();
			br35 = element("br");
			t37 = space();
			br36 = element("br");
			t38 = space();
			br37 = element("br");
			t39 = space();
			br38 = element("br");
			t40 = space();
			br39 = element("br");
			t41 = space();
			br40 = element("br");
			t42 = space();
			br41 = element("br");
			t43 = space();
			br42 = element("br");
			t44 = space();
			br43 = element("br");
			t45 = space();
			br44 = element("br");
			t46 = space();
			br45 = element("br");
			t47 = space();
			br46 = element("br");
			t48 = space();
			br47 = element("br");
			t49 = space();
			br48 = element("br");
			t50 = space();
			br49 = element("br");
			t51 = space();
			br50 = element("br");
			t52 = space();
			br51 = element("br");
			t53 = space();
			br52 = element("br");
			t54 = space();
			br53 = element("br");
			t55 = space();
			br54 = element("br");
			t56 = space();
			br55 = element("br");
			t57 = space();
			br56 = element("br");
			t58 = space();
			br57 = element("br");
			t59 = space();
			br58 = element("br");
			t60 = space();
			br59 = element("br");
			t61 = space();
			br60 = element("br");
			t62 = space();
			br61 = element("br");
			t63 = space();
			br62 = element("br");
			t64 = space();
			p = element("p");
			t65 = text("Icons from ");
			a = element("a");
			t66 = text("icons8");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");
			hero.$$.fragment.l(nodes);
			t1 = claim_text(nodes, "\n\n\n\n\n\n\n");

			br0 = claim_element(nodes, "BR", {}, false);
			var br0_nodes = children(br0);

			br0_nodes.forEach(detach);
			t2 = claim_text(nodes, "\n");

			br1 = claim_element(nodes, "BR", {}, false);
			var br1_nodes = children(br1);

			br1_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n");

			br2 = claim_element(nodes, "BR", {}, false);
			var br2_nodes = children(br2);

			br2_nodes.forEach(detach);
			t4 = claim_text(nodes, "\n");

			br3 = claim_element(nodes, "BR", {}, false);
			var br3_nodes = children(br3);

			br3_nodes.forEach(detach);
			t5 = claim_text(nodes, "\n");

			br4 = claim_element(nodes, "BR", {}, false);
			var br4_nodes = children(br4);

			br4_nodes.forEach(detach);
			t6 = claim_text(nodes, "\n");

			br5 = claim_element(nodes, "BR", {}, false);
			var br5_nodes = children(br5);

			br5_nodes.forEach(detach);
			t7 = claim_text(nodes, "\n");

			br6 = claim_element(nodes, "BR", {}, false);
			var br6_nodes = children(br6);

			br6_nodes.forEach(detach);
			t8 = claim_text(nodes, "\n");

			br7 = claim_element(nodes, "BR", {}, false);
			var br7_nodes = children(br7);

			br7_nodes.forEach(detach);
			t9 = claim_text(nodes, "\n");

			br8 = claim_element(nodes, "BR", {}, false);
			var br8_nodes = children(br8);

			br8_nodes.forEach(detach);
			t10 = claim_text(nodes, "\n");

			br9 = claim_element(nodes, "BR", {}, false);
			var br9_nodes = children(br9);

			br9_nodes.forEach(detach);
			t11 = claim_text(nodes, "\n");

			br10 = claim_element(nodes, "BR", {}, false);
			var br10_nodes = children(br10);

			br10_nodes.forEach(detach);
			t12 = claim_text(nodes, "\n");

			br11 = claim_element(nodes, "BR", {}, false);
			var br11_nodes = children(br11);

			br11_nodes.forEach(detach);
			t13 = claim_text(nodes, "\n");

			br12 = claim_element(nodes, "BR", {}, false);
			var br12_nodes = children(br12);

			br12_nodes.forEach(detach);
			t14 = claim_text(nodes, "\n");

			br13 = claim_element(nodes, "BR", {}, false);
			var br13_nodes = children(br13);

			br13_nodes.forEach(detach);
			t15 = claim_text(nodes, "\n");

			br14 = claim_element(nodes, "BR", {}, false);
			var br14_nodes = children(br14);

			br14_nodes.forEach(detach);
			t16 = claim_text(nodes, "\n");

			br15 = claim_element(nodes, "BR", {}, false);
			var br15_nodes = children(br15);

			br15_nodes.forEach(detach);
			t17 = claim_text(nodes, "\n");

			br16 = claim_element(nodes, "BR", {}, false);
			var br16_nodes = children(br16);

			br16_nodes.forEach(detach);
			t18 = claim_text(nodes, "\n");

			br17 = claim_element(nodes, "BR", {}, false);
			var br17_nodes = children(br17);

			br17_nodes.forEach(detach);
			t19 = claim_text(nodes, "\n");

			br18 = claim_element(nodes, "BR", {}, false);
			var br18_nodes = children(br18);

			br18_nodes.forEach(detach);
			t20 = claim_text(nodes, "\n");

			br19 = claim_element(nodes, "BR", {}, false);
			var br19_nodes = children(br19);

			br19_nodes.forEach(detach);
			t21 = claim_text(nodes, "\n");

			br20 = claim_element(nodes, "BR", {}, false);
			var br20_nodes = children(br20);

			br20_nodes.forEach(detach);
			t22 = claim_text(nodes, "\n");

			br21 = claim_element(nodes, "BR", {}, false);
			var br21_nodes = children(br21);

			br21_nodes.forEach(detach);
			t23 = claim_text(nodes, "\n");

			br22 = claim_element(nodes, "BR", {}, false);
			var br22_nodes = children(br22);

			br22_nodes.forEach(detach);
			t24 = claim_text(nodes, "\n");

			br23 = claim_element(nodes, "BR", {}, false);
			var br23_nodes = children(br23);

			br23_nodes.forEach(detach);
			t25 = claim_text(nodes, "\n");

			br24 = claim_element(nodes, "BR", {}, false);
			var br24_nodes = children(br24);

			br24_nodes.forEach(detach);
			t26 = claim_text(nodes, "\n");

			br25 = claim_element(nodes, "BR", {}, false);
			var br25_nodes = children(br25);

			br25_nodes.forEach(detach);
			t27 = claim_text(nodes, "\n");

			br26 = claim_element(nodes, "BR", {}, false);
			var br26_nodes = children(br26);

			br26_nodes.forEach(detach);
			t28 = claim_text(nodes, "\n");

			br27 = claim_element(nodes, "BR", {}, false);
			var br27_nodes = children(br27);

			br27_nodes.forEach(detach);
			t29 = claim_text(nodes, "\n");

			br28 = claim_element(nodes, "BR", {}, false);
			var br28_nodes = children(br28);

			br28_nodes.forEach(detach);
			t30 = claim_text(nodes, "\n");

			br29 = claim_element(nodes, "BR", {}, false);
			var br29_nodes = children(br29);

			br29_nodes.forEach(detach);
			t31 = claim_text(nodes, "\n");

			br30 = claim_element(nodes, "BR", {}, false);
			var br30_nodes = children(br30);

			br30_nodes.forEach(detach);
			t32 = claim_text(nodes, "\n");

			br31 = claim_element(nodes, "BR", {}, false);
			var br31_nodes = children(br31);

			br31_nodes.forEach(detach);
			t33 = claim_text(nodes, "\n");

			br32 = claim_element(nodes, "BR", {}, false);
			var br32_nodes = children(br32);

			br32_nodes.forEach(detach);
			t34 = claim_text(nodes, "\n");

			br33 = claim_element(nodes, "BR", {}, false);
			var br33_nodes = children(br33);

			br33_nodes.forEach(detach);
			t35 = claim_text(nodes, "\n");

			br34 = claim_element(nodes, "BR", {}, false);
			var br34_nodes = children(br34);

			br34_nodes.forEach(detach);
			t36 = claim_text(nodes, "\n");

			br35 = claim_element(nodes, "BR", {}, false);
			var br35_nodes = children(br35);

			br35_nodes.forEach(detach);
			t37 = claim_text(nodes, "\n");

			br36 = claim_element(nodes, "BR", {}, false);
			var br36_nodes = children(br36);

			br36_nodes.forEach(detach);
			t38 = claim_text(nodes, "\n");

			br37 = claim_element(nodes, "BR", {}, false);
			var br37_nodes = children(br37);

			br37_nodes.forEach(detach);
			t39 = claim_text(nodes, "\n");

			br38 = claim_element(nodes, "BR", {}, false);
			var br38_nodes = children(br38);

			br38_nodes.forEach(detach);
			t40 = claim_text(nodes, "\n");

			br39 = claim_element(nodes, "BR", {}, false);
			var br39_nodes = children(br39);

			br39_nodes.forEach(detach);
			t41 = claim_text(nodes, "\n");

			br40 = claim_element(nodes, "BR", {}, false);
			var br40_nodes = children(br40);

			br40_nodes.forEach(detach);
			t42 = claim_text(nodes, "\n");

			br41 = claim_element(nodes, "BR", {}, false);
			var br41_nodes = children(br41);

			br41_nodes.forEach(detach);
			t43 = claim_text(nodes, "\n");

			br42 = claim_element(nodes, "BR", {}, false);
			var br42_nodes = children(br42);

			br42_nodes.forEach(detach);
			t44 = claim_text(nodes, "\n");

			br43 = claim_element(nodes, "BR", {}, false);
			var br43_nodes = children(br43);

			br43_nodes.forEach(detach);
			t45 = claim_text(nodes, "\n");

			br44 = claim_element(nodes, "BR", {}, false);
			var br44_nodes = children(br44);

			br44_nodes.forEach(detach);
			t46 = claim_text(nodes, "\n");

			br45 = claim_element(nodes, "BR", {}, false);
			var br45_nodes = children(br45);

			br45_nodes.forEach(detach);
			t47 = claim_text(nodes, "\n");

			br46 = claim_element(nodes, "BR", {}, false);
			var br46_nodes = children(br46);

			br46_nodes.forEach(detach);
			t48 = claim_text(nodes, "\n");

			br47 = claim_element(nodes, "BR", {}, false);
			var br47_nodes = children(br47);

			br47_nodes.forEach(detach);
			t49 = claim_text(nodes, "\n");

			br48 = claim_element(nodes, "BR", {}, false);
			var br48_nodes = children(br48);

			br48_nodes.forEach(detach);
			t50 = claim_text(nodes, "\n");

			br49 = claim_element(nodes, "BR", {}, false);
			var br49_nodes = children(br49);

			br49_nodes.forEach(detach);
			t51 = claim_text(nodes, "\n");

			br50 = claim_element(nodes, "BR", {}, false);
			var br50_nodes = children(br50);

			br50_nodes.forEach(detach);
			t52 = claim_text(nodes, "\n");

			br51 = claim_element(nodes, "BR", {}, false);
			var br51_nodes = children(br51);

			br51_nodes.forEach(detach);
			t53 = claim_text(nodes, "\n");

			br52 = claim_element(nodes, "BR", {}, false);
			var br52_nodes = children(br52);

			br52_nodes.forEach(detach);
			t54 = claim_text(nodes, "\n");

			br53 = claim_element(nodes, "BR", {}, false);
			var br53_nodes = children(br53);

			br53_nodes.forEach(detach);
			t55 = claim_text(nodes, "\n");

			br54 = claim_element(nodes, "BR", {}, false);
			var br54_nodes = children(br54);

			br54_nodes.forEach(detach);
			t56 = claim_text(nodes, "\n");

			br55 = claim_element(nodes, "BR", {}, false);
			var br55_nodes = children(br55);

			br55_nodes.forEach(detach);
			t57 = claim_text(nodes, "\n");

			br56 = claim_element(nodes, "BR", {}, false);
			var br56_nodes = children(br56);

			br56_nodes.forEach(detach);
			t58 = claim_text(nodes, "\n");

			br57 = claim_element(nodes, "BR", {}, false);
			var br57_nodes = children(br57);

			br57_nodes.forEach(detach);
			t59 = claim_text(nodes, "\n");

			br58 = claim_element(nodes, "BR", {}, false);
			var br58_nodes = children(br58);

			br58_nodes.forEach(detach);
			t60 = claim_text(nodes, "\n");

			br59 = claim_element(nodes, "BR", {}, false);
			var br59_nodes = children(br59);

			br59_nodes.forEach(detach);
			t61 = claim_text(nodes, "\n");

			br60 = claim_element(nodes, "BR", {}, false);
			var br60_nodes = children(br60);

			br60_nodes.forEach(detach);
			t62 = claim_text(nodes, "\n");

			br61 = claim_element(nodes, "BR", {}, false);
			var br61_nodes = children(br61);

			br61_nodes.forEach(detach);
			t63 = claim_text(nodes, "\n");

			br62 = claim_element(nodes, "BR", {}, false);
			var br62_nodes = children(br62);

			br62_nodes.forEach(detach);
			t64 = claim_text(nodes, "\n");

			p = claim_element(nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			t65 = claim_text(p_nodes, "Icons from ");

			a = claim_element(p_nodes, "A", { href: true }, false);
			var a_nodes = children(a);

			t66 = claim_text(a_nodes, "icons8");
			a_nodes.forEach(detach);
			p_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			document.title = "Sapper project template";
			add_location(br0, file$1, 57, 0, 830);
			add_location(br1, file$1, 58, 0, 836);
			add_location(br2, file$1, 59, 0, 842);
			add_location(br3, file$1, 60, 0, 848);
			add_location(br4, file$1, 61, 0, 854);
			add_location(br5, file$1, 62, 0, 860);
			add_location(br6, file$1, 63, 0, 866);
			add_location(br7, file$1, 64, 0, 872);
			add_location(br8, file$1, 65, 0, 878);
			add_location(br9, file$1, 66, 0, 884);
			add_location(br10, file$1, 67, 0, 890);
			add_location(br11, file$1, 68, 0, 896);
			add_location(br12, file$1, 69, 0, 902);
			add_location(br13, file$1, 70, 0, 908);
			add_location(br14, file$1, 71, 0, 914);
			add_location(br15, file$1, 72, 0, 920);
			add_location(br16, file$1, 73, 0, 926);
			add_location(br17, file$1, 74, 0, 932);
			add_location(br18, file$1, 75, 0, 938);
			add_location(br19, file$1, 76, 0, 944);
			add_location(br20, file$1, 77, 0, 950);
			add_location(br21, file$1, 78, 0, 956);
			add_location(br22, file$1, 79, 0, 962);
			add_location(br23, file$1, 80, 0, 968);
			add_location(br24, file$1, 81, 0, 974);
			add_location(br25, file$1, 82, 0, 980);
			add_location(br26, file$1, 83, 0, 986);
			add_location(br27, file$1, 84, 0, 992);
			add_location(br28, file$1, 85, 0, 998);
			add_location(br29, file$1, 86, 0, 1004);
			add_location(br30, file$1, 87, 0, 1010);
			add_location(br31, file$1, 88, 0, 1016);
			add_location(br32, file$1, 89, 0, 1022);
			add_location(br33, file$1, 90, 0, 1028);
			add_location(br34, file$1, 91, 0, 1034);
			add_location(br35, file$1, 92, 0, 1040);
			add_location(br36, file$1, 93, 0, 1046);
			add_location(br37, file$1, 94, 0, 1052);
			add_location(br38, file$1, 95, 0, 1058);
			add_location(br39, file$1, 96, 0, 1064);
			add_location(br40, file$1, 97, 0, 1070);
			add_location(br41, file$1, 98, 0, 1076);
			add_location(br42, file$1, 99, 0, 1082);
			add_location(br43, file$1, 100, 0, 1088);
			add_location(br44, file$1, 101, 0, 1094);
			add_location(br45, file$1, 102, 0, 1100);
			add_location(br46, file$1, 103, 0, 1106);
			add_location(br47, file$1, 104, 0, 1112);
			add_location(br48, file$1, 105, 0, 1118);
			add_location(br49, file$1, 106, 0, 1124);
			add_location(br50, file$1, 107, 0, 1130);
			add_location(br51, file$1, 108, 0, 1136);
			add_location(br52, file$1, 109, 0, 1142);
			add_location(br53, file$1, 110, 0, 1148);
			add_location(br54, file$1, 111, 0, 1154);
			add_location(br55, file$1, 112, 0, 1160);
			add_location(br56, file$1, 113, 0, 1166);
			add_location(br57, file$1, 114, 0, 1172);
			add_location(br58, file$1, 115, 0, 1178);
			add_location(br59, file$1, 116, 0, 1184);
			add_location(br60, file$1, 117, 0, 1190);
			add_location(br61, file$1, 118, 0, 1196);
			add_location(br62, file$1, 119, 0, 1202);
			attr(a, "href", "https://icons8.com/icons");
			add_location(a, file$1, 120, 14, 1222);
			attr(p, "class", "svelte-1hsgy2r");
			add_location(p, file$1, 120, 0, 1208);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			mount_component(hero, target, anchor);
			insert(target, t1, anchor);
			insert(target, br0, anchor);
			insert(target, t2, anchor);
			insert(target, br1, anchor);
			insert(target, t3, anchor);
			insert(target, br2, anchor);
			insert(target, t4, anchor);
			insert(target, br3, anchor);
			insert(target, t5, anchor);
			insert(target, br4, anchor);
			insert(target, t6, anchor);
			insert(target, br5, anchor);
			insert(target, t7, anchor);
			insert(target, br6, anchor);
			insert(target, t8, anchor);
			insert(target, br7, anchor);
			insert(target, t9, anchor);
			insert(target, br8, anchor);
			insert(target, t10, anchor);
			insert(target, br9, anchor);
			insert(target, t11, anchor);
			insert(target, br10, anchor);
			insert(target, t12, anchor);
			insert(target, br11, anchor);
			insert(target, t13, anchor);
			insert(target, br12, anchor);
			insert(target, t14, anchor);
			insert(target, br13, anchor);
			insert(target, t15, anchor);
			insert(target, br14, anchor);
			insert(target, t16, anchor);
			insert(target, br15, anchor);
			insert(target, t17, anchor);
			insert(target, br16, anchor);
			insert(target, t18, anchor);
			insert(target, br17, anchor);
			insert(target, t19, anchor);
			insert(target, br18, anchor);
			insert(target, t20, anchor);
			insert(target, br19, anchor);
			insert(target, t21, anchor);
			insert(target, br20, anchor);
			insert(target, t22, anchor);
			insert(target, br21, anchor);
			insert(target, t23, anchor);
			insert(target, br22, anchor);
			insert(target, t24, anchor);
			insert(target, br23, anchor);
			insert(target, t25, anchor);
			insert(target, br24, anchor);
			insert(target, t26, anchor);
			insert(target, br25, anchor);
			insert(target, t27, anchor);
			insert(target, br26, anchor);
			insert(target, t28, anchor);
			insert(target, br27, anchor);
			insert(target, t29, anchor);
			insert(target, br28, anchor);
			insert(target, t30, anchor);
			insert(target, br29, anchor);
			insert(target, t31, anchor);
			insert(target, br30, anchor);
			insert(target, t32, anchor);
			insert(target, br31, anchor);
			insert(target, t33, anchor);
			insert(target, br32, anchor);
			insert(target, t34, anchor);
			insert(target, br33, anchor);
			insert(target, t35, anchor);
			insert(target, br34, anchor);
			insert(target, t36, anchor);
			insert(target, br35, anchor);
			insert(target, t37, anchor);
			insert(target, br36, anchor);
			insert(target, t38, anchor);
			insert(target, br37, anchor);
			insert(target, t39, anchor);
			insert(target, br38, anchor);
			insert(target, t40, anchor);
			insert(target, br39, anchor);
			insert(target, t41, anchor);
			insert(target, br40, anchor);
			insert(target, t42, anchor);
			insert(target, br41, anchor);
			insert(target, t43, anchor);
			insert(target, br42, anchor);
			insert(target, t44, anchor);
			insert(target, br43, anchor);
			insert(target, t45, anchor);
			insert(target, br44, anchor);
			insert(target, t46, anchor);
			insert(target, br45, anchor);
			insert(target, t47, anchor);
			insert(target, br46, anchor);
			insert(target, t48, anchor);
			insert(target, br47, anchor);
			insert(target, t49, anchor);
			insert(target, br48, anchor);
			insert(target, t50, anchor);
			insert(target, br49, anchor);
			insert(target, t51, anchor);
			insert(target, br50, anchor);
			insert(target, t52, anchor);
			insert(target, br51, anchor);
			insert(target, t53, anchor);
			insert(target, br52, anchor);
			insert(target, t54, anchor);
			insert(target, br53, anchor);
			insert(target, t55, anchor);
			insert(target, br54, anchor);
			insert(target, t56, anchor);
			insert(target, br55, anchor);
			insert(target, t57, anchor);
			insert(target, br56, anchor);
			insert(target, t58, anchor);
			insert(target, br57, anchor);
			insert(target, t59, anchor);
			insert(target, br58, anchor);
			insert(target, t60, anchor);
			insert(target, br59, anchor);
			insert(target, t61, anchor);
			insert(target, br60, anchor);
			insert(target, t62, anchor);
			insert(target, br61, anchor);
			insert(target, t63, anchor);
			insert(target, br62, anchor);
			insert(target, t64, anchor);
			insert(target, p, anchor);
			append(p, t65);
			append(p, a);
			append(a, t66);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			transition_in(hero.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(hero.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
			}

			destroy_component(hero, detaching);

			if (detaching) {
				detach(t1);
				detach(br0);
				detach(t2);
				detach(br1);
				detach(t3);
				detach(br2);
				detach(t4);
				detach(br3);
				detach(t5);
				detach(br4);
				detach(t6);
				detach(br5);
				detach(t7);
				detach(br6);
				detach(t8);
				detach(br7);
				detach(t9);
				detach(br8);
				detach(t10);
				detach(br9);
				detach(t11);
				detach(br10);
				detach(t12);
				detach(br11);
				detach(t13);
				detach(br12);
				detach(t14);
				detach(br13);
				detach(t15);
				detach(br14);
				detach(t16);
				detach(br15);
				detach(t17);
				detach(br16);
				detach(t18);
				detach(br17);
				detach(t19);
				detach(br18);
				detach(t20);
				detach(br19);
				detach(t21);
				detach(br20);
				detach(t22);
				detach(br21);
				detach(t23);
				detach(br22);
				detach(t24);
				detach(br23);
				detach(t25);
				detach(br24);
				detach(t26);
				detach(br25);
				detach(t27);
				detach(br26);
				detach(t28);
				detach(br27);
				detach(t29);
				detach(br28);
				detach(t30);
				detach(br29);
				detach(t31);
				detach(br30);
				detach(t32);
				detach(br31);
				detach(t33);
				detach(br32);
				detach(t34);
				detach(br33);
				detach(t35);
				detach(br34);
				detach(t36);
				detach(br35);
				detach(t37);
				detach(br36);
				detach(t38);
				detach(br37);
				detach(t39);
				detach(br38);
				detach(t40);
				detach(br39);
				detach(t41);
				detach(br40);
				detach(t42);
				detach(br41);
				detach(t43);
				detach(br42);
				detach(t44);
				detach(br43);
				detach(t45);
				detach(br44);
				detach(t46);
				detach(br45);
				detach(t47);
				detach(br46);
				detach(t48);
				detach(br47);
				detach(t49);
				detach(br48);
				detach(t50);
				detach(br49);
				detach(t51);
				detach(br50);
				detach(t52);
				detach(br51);
				detach(t53);
				detach(br52);
				detach(t54);
				detach(br53);
				detach(t55);
				detach(br54);
				detach(t56);
				detach(br55);
				detach(t57);
				detach(br56);
				detach(t58);
				detach(br57);
				detach(t59);
				detach(br58);
				detach(t60);
				detach(br59);
				detach(t61);
				detach(br60);
				detach(t62);
				detach(br61);
				detach(t63);
				detach(br62);
				detach(t64);
				detach(p);
			}
		}
	};
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment$1, safe_not_equal, []);
	}
}

export default Index;
