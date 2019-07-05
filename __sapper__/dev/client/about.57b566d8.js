import { S as SvelteComponentDev, i as init, s as safe_not_equal, D as add_render_callback, e as element, t as text, c as claim_element, b as children, d as claim_text, f as detach, g as attr, h as add_location, H as listen, j as insert, k as append, n as noop, O as create_bidirectional_transition, a as space, q as transition_in, B as group_outros, r as transition_out, C as check_outros, w as set_data, J as onMount, m as mount_component, u as destroy_component } from './chunk.cebb6f67.js';
import { f as fade } from './chunk.2eabe72b.js';
import { P as Pillars } from './chunk.e0035de7.js';

/* src/components/Carousel.svelte generated by Svelte v3.6.2 */

const file = "src/components/Carousel.svelte";

// (134:4) {#if iw > 1000}
function create_if_block_2(ctx) {
	var button, t, dispose;

	return {
		c: function create() {
			button = element("button");
			t = text("<");
			this.h();
		},

		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true }, false);
			var button_nodes = children(button);

			t = claim_text(button_nodes, "<");
			button_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(button, "class", "carousel-button button-left svelte-bgbr7d");
			add_location(button, file, 134, 6, 2587);
			dispose = listen(button, "click", ctx.handlePrevClick);
		},

		m: function mount(target, anchor) {
			insert(target, button, anchor);
			append(button, t);
		},

		p: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(button);
			}

			dispose();
		}
	};
}

// (140:6) {#if visible}
function create_if_block_1(ctx) {
	var div, img, img_transition, current;

	return {
		c: function create() {
			div = element("div");
			img = element("img");
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			img = claim_element(div_nodes, "IMG", { src: true, alt: true, class: true }, false);
			var img_nodes = children(img);

			img_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(img, "src", ctx.image);
			attr(img, "alt", "pillar image");
			attr(img, "class", "svelte-bgbr7d");
			add_location(img, file, 141, 10, 2794);
			attr(div, "class", "carousel svelte-bgbr7d");
			add_location(div, file, 140, 8, 2761);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			append(div, img);
			current = true;
		},

		p: function update(changed, ctx) {
			if (!current || changed.image) {
				attr(img, "src", ctx.image);
			}
		},

		i: function intro(local) {
			if (current) return;
			add_render_callback(() => {
				if (!img_transition) img_transition = create_bidirectional_transition(img, fade, { duration: 200 }, true);
				img_transition.run(1);
			});

			current = true;
		},

		o: function outro(local) {
			if (!img_transition) img_transition = create_bidirectional_transition(img, fade, { duration: 200 }, false);
			img_transition.run(0);

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
				if (img_transition) img_transition.end();
			}
		}
	};
}

// (149:4) {#if iw > 1000}
function create_if_block(ctx) {
	var button, t, dispose;

	return {
		c: function create() {
			button = element("button");
			t = text(">");
			this.h();
		},

		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true }, false);
			var button_nodes = children(button);

			t = claim_text(button_nodes, ">");
			button_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(button, "class", "carousel-button button-right svelte-bgbr7d");
			add_location(button, file, 149, 6, 2969);
			dispose = listen(button, "click", ctx.handleNextClick);
		},

		m: function mount(target, anchor) {
			insert(target, button, anchor);
			append(button, t);
		},

		p: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(button);
			}

			dispose();
		}
	};
}

function create_fragment(ctx) {
	var figure, div1, t0, div0, t1, t2, figcaption, t3, current, dispose;

	add_render_callback(ctx.onwindowresize);

	var if_block0 = (ctx.iw > 1000) && create_if_block_2(ctx);

	var if_block1 = (ctx.visible) && create_if_block_1(ctx);

	var if_block2 = (ctx.iw > 1000) && create_if_block(ctx);

	return {
		c: function create() {
			figure = element("figure");
			div1 = element("div");
			if (if_block0) if_block0.c();
			t0 = space();
			div0 = element("div");
			if (if_block1) if_block1.c();
			t1 = space();
			if (if_block2) if_block2.c();
			t2 = space();
			figcaption = element("figcaption");
			t3 = text(ctx.caption);
			this.h();
		},

		l: function claim(nodes) {
			figure = claim_element(nodes, "FIGURE", { class: true }, false);
			var figure_nodes = children(figure);

			div1 = claim_element(figure_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			if (if_block0) if_block0.l(div1_nodes);
			t0 = claim_text(div1_nodes, "\n    ");

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			if (if_block1) if_block1.l(div0_nodes);
			div0_nodes.forEach(detach);
			t1 = claim_text(div1_nodes, "\n    ");
			if (if_block2) if_block2.l(div1_nodes);
			div1_nodes.forEach(detach);
			t2 = claim_text(figure_nodes, "\n  ");

			figcaption = claim_element(figure_nodes, "FIGCAPTION", { class: true }, false);
			var figcaption_nodes = children(figcaption);

			t3 = claim_text(figcaption_nodes, ctx.caption);
			figcaption_nodes.forEach(detach);
			figure_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(div0, "class", "carousel-wrapper svelte-bgbr7d");
			add_location(div0, file, 138, 4, 2702);
			attr(div1, "class", "button-wrapper svelte-bgbr7d");
			add_location(div1, file, 132, 2, 2532);
			attr(figcaption, "class", "carousel-caption svelte-bgbr7d");
			add_location(figcaption, file, 154, 2, 3092);
			attr(figure, "class", "figure-wrapper svelte-bgbr7d");
			add_location(figure, file, 131, 0, 2498);
			dispose = listen(window, "resize", ctx.onwindowresize);
		},

		m: function mount(target, anchor) {
			insert(target, figure, anchor);
			append(figure, div1);
			if (if_block0) if_block0.m(div1, null);
			append(div1, t0);
			append(div1, div0);
			if (if_block1) if_block1.m(div0, null);
			append(div1, t1);
			if (if_block2) if_block2.m(div1, null);
			append(figure, t2);
			append(figure, figcaption);
			append(figcaption, t3);
			current = true;
		},

		p: function update(changed, ctx) {
			if (ctx.iw > 1000) {
				if (if_block0) {
					if_block0.p(changed, ctx);
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					if_block0.m(div1, t0);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (ctx.visible) {
				if (if_block1) {
					if_block1.p(changed, ctx);
					transition_in(if_block1, 1);
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(div0, null);
				}
			} else if (if_block1) {
				group_outros();
				transition_out(if_block1, 1, () => {
					if_block1 = null;
				});
				check_outros();
			}

			if (ctx.iw > 1000) {
				if (if_block2) {
					if_block2.p(changed, ctx);
				} else {
					if_block2 = create_if_block(ctx);
					if_block2.c();
					if_block2.m(div1, null);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}

			if (!current || changed.caption) {
				set_data(t3, ctx.caption);
			}
		},

		i: function intro(local) {
			if (current) return;
			transition_in(if_block1);
			current = true;
		},

		o: function outro(local) {
			transition_out(if_block1);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(figure);
			}

			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { images, caption } = $$props;

  let image = images[0];
  let index = 0;
  let visible = true;
  let interval;
  let iw;

  // Lowkey a race condition, but we will fix that later
  function nextImage() {
    $$invalidate('visible', visible = false);
    setTimeout(() => {
      $$invalidate('visible', visible = true);
      index = (index + 1) % images.length;
      $$invalidate('image', image = images[index]);
    }, 500);
  }

  function prevImage() {
    $$invalidate('visible', visible = false);
    setTimeout(() => {
      $$invalidate('visible', visible = true);
      index = (index + images.length - 1) % images.length;
      $$invalidate('image', image = images[index]);
    }, 500);
  }

  function handleNextClick() {
    clearInterval(interval);
    if (!visible) {
      index = (index + 1) % images.length;
      return;
    }
    nextImage();
    interval = setInterval(nextImage, 3900);
  }

  function handlePrevClick() {
    clearInterval(interval);
    if (!visible) {
      index = (index + images.length - 1) % images.length;
      return;
    }
    prevImage();
    interval = setInterval(prevImage, 3900);
  }

  onMount(() => {
    interval = setInterval(nextImage, 3900);

    return () => clearInterval(interval);
  });

	const writable_props = ['images', 'caption'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Carousel> was created with unknown prop '${key}'`);
	});

	function onwindowresize() {
		iw = window.innerWidth; $$invalidate('iw', iw);
	}

	$$self.$set = $$props => {
		if ('images' in $$props) $$invalidate('images', images = $$props.images);
		if ('caption' in $$props) $$invalidate('caption', caption = $$props.caption);
	};

	return {
		images,
		caption,
		image,
		visible,
		iw,
		handleNextClick,
		handlePrevClick,
		onwindowresize
	};
}

class Carousel extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["images", "caption"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.images === undefined && !('images' in props)) {
			console.warn("<Carousel> was created without expected prop 'images'");
		}
		if (ctx.caption === undefined && !('caption' in props)) {
			console.warn("<Carousel> was created without expected prop 'caption'");
		}
	}

	get images() {
		throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set images(value) {
		throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get caption() {
		throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set caption(value) {
		throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/Origin.svelte generated by Svelte v3.6.2 */

const file$1 = "src/components/Origin.svelte";

function create_fragment$1(ctx) {
	var div, h1, t0, t1, p0, t2, t3, p1, strong0, t4, t5, t6, p2, strong1, t7, t8, strong2, t9, t10, strong3, t11, t12, strong4, t13, t14, strong5, t15, t16, strong6, t17, t18, strong7, t19, t20, strong8, t21, t22, strong9, t23, t24, strong10, t25, t26, strong11, t27, t28, strong12, t29, t30, strong13, t31, t32, t33, p3, t34, strong14, t35, t36, strong15, t37, t38, t39, img0, t40, img1;

	return {
		c: function create() {
			div = element("div");
			h1 = element("h1");
			t0 = text("The Origins of Theta Tau");
			t1 = space();
			p0 = element("p");
			t2 = text("In the Spring of 2009, several students of UCSD's Jacobs School of\n    Engineering felt that there was a lack of engineering representation in the\n    Greek community on campus. Luckily an opportunity arose for them to change\n    that.");
			t3 = space();
			p1 = element("p");
			strong0 = element("strong");
			t4 = text("Jennifer Young");
			t5 = text(",\n    with the help of a Theta Tau alumnus,\n    thirteen founding fathers took the first step towards establishing a\n    chapter of the nation's oldest and largest professional engineering\n    fraternity on the UCSD campus.");
			t6 = space();
			p2 = element("p");
			strong1 = element("strong");
			t7 = text("Ashay Verma");
			t8 = text(",\n    ");
			strong2 = element("strong");
			t9 = text("Errynne Bell");
			t10 = text(",\n    ");
			strong3 = element("strong");
			t11 = text("Takahiro Kuwayama");
			t12 = text(",\n    ");
			strong4 = element("strong");
			t13 = text("Amelia Chu");
			t14 = text(",\n    ");
			strong5 = element("strong");
			t15 = text("Xiumei Wu");
			t16 = text(",\n    ");
			strong6 = element("strong");
			t17 = text("Chris Lam");
			t18 = text(",\n    ");
			strong7 = element("strong");
			t19 = text("Chuong Do");
			t20 = text(",\n    ");
			strong8 = element("strong");
			t21 = text("Joe Shao");
			t22 = text(",\n    ");
			strong9 = element("strong");
			t23 = text("Michelle Mojica");
			t24 = text(",\n    ");
			strong10 = element("strong");
			t25 = text("Tanakorn Best Techajongchareon");
			t26 = text(",\n    ");
			strong11 = element("strong");
			t27 = text("Scott Louie");
			t28 = text(",\n    ");
			strong12 = element("strong");
			t29 = text("Alan Leung");
			t30 = text(",\n    and ");
			strong13 = element("strong");
			t31 = text("John Phu Nguyen");
			t32 = text(".");
			t33 = space();
			p3 = element("p");
			t34 = text("On November 20th, 2010, UCSD was installed as the \n    ");
			strong14 = element("strong");
			t35 = text("Epsilon Delta Chapter");
			t36 = text(" of \n    ");
			strong15 = element("strong");
			t37 = text("Theta Tau");
			t38 = text(".");
			t39 = space();
			img0 = element("img");
			t40 = space();
			img1 = element("img");
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { id: true, class: true }, false);
			var div_nodes = children(div);

			h1 = claim_element(div_nodes, "H1", { id: true, class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "The Origins of Theta Tau");
			h1_nodes.forEach(detach);
			t1 = claim_text(div_nodes, "\n  ");

			p0 = claim_element(div_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t2 = claim_text(p0_nodes, "In the Spring of 2009, several students of UCSD's Jacobs School of\n    Engineering felt that there was a lack of engineering representation in the\n    Greek community on campus. Luckily an opportunity arose for them to change\n    that.");
			p0_nodes.forEach(detach);
			t3 = claim_text(div_nodes, "\n  ");

			p1 = claim_element(div_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			strong0 = claim_element(p1_nodes, "STRONG", {}, false);
			var strong0_nodes = children(strong0);

			t4 = claim_text(strong0_nodes, "Jennifer Young");
			strong0_nodes.forEach(detach);
			t5 = claim_text(p1_nodes, ",\n    with the help of a Theta Tau alumnus,\n    thirteen founding fathers took the first step towards establishing a\n    chapter of the nation's oldest and largest professional engineering\n    fraternity on the UCSD campus.");
			p1_nodes.forEach(detach);
			t6 = claim_text(div_nodes, "\n  ");

			p2 = claim_element(div_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			strong1 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong1_nodes = children(strong1);

			t7 = claim_text(strong1_nodes, "Ashay Verma");
			strong1_nodes.forEach(detach);
			t8 = claim_text(p2_nodes, ",\n    ");

			strong2 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong2_nodes = children(strong2);

			t9 = claim_text(strong2_nodes, "Errynne Bell");
			strong2_nodes.forEach(detach);
			t10 = claim_text(p2_nodes, ",\n    ");

			strong3 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong3_nodes = children(strong3);

			t11 = claim_text(strong3_nodes, "Takahiro Kuwayama");
			strong3_nodes.forEach(detach);
			t12 = claim_text(p2_nodes, ",\n    ");

			strong4 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong4_nodes = children(strong4);

			t13 = claim_text(strong4_nodes, "Amelia Chu");
			strong4_nodes.forEach(detach);
			t14 = claim_text(p2_nodes, ",\n    ");

			strong5 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong5_nodes = children(strong5);

			t15 = claim_text(strong5_nodes, "Xiumei Wu");
			strong5_nodes.forEach(detach);
			t16 = claim_text(p2_nodes, ",\n    ");

			strong6 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong6_nodes = children(strong6);

			t17 = claim_text(strong6_nodes, "Chris Lam");
			strong6_nodes.forEach(detach);
			t18 = claim_text(p2_nodes, ",\n    ");

			strong7 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong7_nodes = children(strong7);

			t19 = claim_text(strong7_nodes, "Chuong Do");
			strong7_nodes.forEach(detach);
			t20 = claim_text(p2_nodes, ",\n    ");

			strong8 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong8_nodes = children(strong8);

			t21 = claim_text(strong8_nodes, "Joe Shao");
			strong8_nodes.forEach(detach);
			t22 = claim_text(p2_nodes, ",\n    ");

			strong9 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong9_nodes = children(strong9);

			t23 = claim_text(strong9_nodes, "Michelle Mojica");
			strong9_nodes.forEach(detach);
			t24 = claim_text(p2_nodes, ",\n    ");

			strong10 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong10_nodes = children(strong10);

			t25 = claim_text(strong10_nodes, "Tanakorn Best Techajongchareon");
			strong10_nodes.forEach(detach);
			t26 = claim_text(p2_nodes, ",\n    ");

			strong11 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong11_nodes = children(strong11);

			t27 = claim_text(strong11_nodes, "Scott Louie");
			strong11_nodes.forEach(detach);
			t28 = claim_text(p2_nodes, ",\n    ");

			strong12 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong12_nodes = children(strong12);

			t29 = claim_text(strong12_nodes, "Alan Leung");
			strong12_nodes.forEach(detach);
			t30 = claim_text(p2_nodes, ",\n    and ");

			strong13 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong13_nodes = children(strong13);

			t31 = claim_text(strong13_nodes, "John Phu Nguyen");
			strong13_nodes.forEach(detach);
			t32 = claim_text(p2_nodes, ".");
			p2_nodes.forEach(detach);
			t33 = claim_text(div_nodes, "\n  ");

			p3 = claim_element(div_nodes, "P", { class: true }, false);
			var p3_nodes = children(p3);

			t34 = claim_text(p3_nodes, "On November 20th, 2010, UCSD was installed as the \n    ");

			strong14 = claim_element(p3_nodes, "STRONG", {}, false);
			var strong14_nodes = children(strong14);

			t35 = claim_text(strong14_nodes, "Epsilon Delta Chapter");
			strong14_nodes.forEach(detach);
			t36 = claim_text(p3_nodes, " of \n    ");

			strong15 = claim_element(p3_nodes, "STRONG", {}, false);
			var strong15_nodes = children(strong15);

			t37 = claim_text(strong15_nodes, "Theta Tau");
			strong15_nodes.forEach(detach);
			t38 = claim_text(p3_nodes, ".");
			p3_nodes.forEach(detach);
			t39 = claim_text(div_nodes, "\n  ");

			img0 = claim_element(div_nodes, "IMG", { id: true, src: true, alt: true, class: true }, false);
			var img0_nodes = children(img0);

			img0_nodes.forEach(detach);
			t40 = claim_text(div_nodes, "\n  ");

			img1 = claim_element(div_nodes, "IMG", { src: true, alt: true, class: true }, false);
			var img1_nodes = children(img1);

			img1_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(h1, "id", "letter-header");
			attr(h1, "class", "svelte-1lbiaoq");
			add_location(h1, file$1, 42, 2, 865);
			attr(p0, "class", "svelte-1lbiaoq");
			add_location(p0, file$1, 43, 2, 920);
			add_location(strong0, file$1, 50, 4, 1181);
			attr(p1, "class", "svelte-1lbiaoq");
			add_location(p1, file$1, 49, 2, 1173);
			add_location(strong1, file$1, 57, 4, 1453);
			add_location(strong2, file$1, 58, 4, 1487);
			add_location(strong3, file$1, 59, 4, 1522);
			add_location(strong4, file$1, 60, 4, 1562);
			add_location(strong5, file$1, 61, 4, 1595);
			add_location(strong6, file$1, 62, 4, 1627);
			add_location(strong7, file$1, 63, 4, 1659);
			add_location(strong8, file$1, 64, 4, 1691);
			add_location(strong9, file$1, 65, 4, 1722);
			add_location(strong10, file$1, 66, 4, 1760);
			add_location(strong11, file$1, 67, 4, 1813);
			add_location(strong12, file$1, 68, 4, 1847);
			add_location(strong13, file$1, 69, 8, 1884);
			attr(p2, "class", "svelte-1lbiaoq");
			add_location(p2, file$1, 56, 2, 1445);
			add_location(strong14, file$1, 73, 4, 1990);
			add_location(strong15, file$1, 74, 4, 2037);
			attr(p3, "class", "svelte-1lbiaoq");
			add_location(p3, file$1, 71, 2, 1927);
			attr(img0, "id", "founders");
			attr(img0, "src", "images/founders.jpg");
			attr(img0, "alt", "the mighty founders");
			attr(img0, "class", "svelte-1lbiaoq");
			add_location(img0, file$1, 76, 2, 2074);
			attr(img1, "src", "images/hamntongs.png");
			attr(img1, "alt", "the seals");
			attr(img1, "class", "svelte-1lbiaoq");
			add_location(img1, file$1, 77, 2, 2148);
			attr(div, "id", "letter");
			attr(div, "class", "svelte-1lbiaoq");
			add_location(div, file$1, 41, 0, 845);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			append(div, h1);
			append(h1, t0);
			append(div, t1);
			append(div, p0);
			append(p0, t2);
			append(div, t3);
			append(div, p1);
			append(p1, strong0);
			append(strong0, t4);
			append(p1, t5);
			append(div, t6);
			append(div, p2);
			append(p2, strong1);
			append(strong1, t7);
			append(p2, t8);
			append(p2, strong2);
			append(strong2, t9);
			append(p2, t10);
			append(p2, strong3);
			append(strong3, t11);
			append(p2, t12);
			append(p2, strong4);
			append(strong4, t13);
			append(p2, t14);
			append(p2, strong5);
			append(strong5, t15);
			append(p2, t16);
			append(p2, strong6);
			append(strong6, t17);
			append(p2, t18);
			append(p2, strong7);
			append(strong7, t19);
			append(p2, t20);
			append(p2, strong8);
			append(strong8, t21);
			append(p2, t22);
			append(p2, strong9);
			append(strong9, t23);
			append(p2, t24);
			append(p2, strong10);
			append(strong10, t25);
			append(p2, t26);
			append(p2, strong11);
			append(strong11, t27);
			append(p2, t28);
			append(p2, strong12);
			append(strong12, t29);
			append(p2, t30);
			append(p2, strong13);
			append(strong13, t31);
			append(p2, t32);
			append(div, t33);
			append(div, p3);
			append(p3, t34);
			append(p3, strong14);
			append(strong14, t35);
			append(p3, t36);
			append(p3, strong15);
			append(strong15, t37);
			append(p3, t38);
			append(div, t39);
			append(div, img0);
			append(div, t40);
			append(div, img1);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}
		}
	};
}

class Origin extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment$1, safe_not_equal, []);
	}
}

/* src/routes/about.svelte generated by Svelte v3.6.2 */

function create_fragment$2(ctx) {
	var t0, t1, t2, current;

	var pillars = new Pillars({ $$inline: true });

	var carousel = new Carousel({
		props: {
		images: ctx.images,
		caption: ctx.pillarMsg
	},
		$$inline: true
	});

	var origin = new Origin({ $$inline: true });

	return {
		c: function create() {
			t0 = space();
			pillars.$$.fragment.c();
			t1 = space();
			carousel.$$.fragment.c();
			t2 = space();
			origin.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");
			pillars.$$.fragment.l(nodes);
			t1 = claim_text(nodes, "\n\n");
			carousel.$$.fragment.l(nodes);
			t2 = claim_text(nodes, "\n\n");
			origin.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			document.title = "About";
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			mount_component(pillars, target, anchor);
			insert(target, t1, anchor);
			mount_component(carousel, target, anchor);
			insert(target, t2, anchor);
			mount_component(origin, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var carousel_changes = {};
			if (changed.images) carousel_changes.images = ctx.images;
			if (changed.pillarMsg) carousel_changes.caption = ctx.pillarMsg;
			carousel.$set(carousel_changes);
		},

		i: function intro(local) {
			if (current) return;
			transition_in(pillars.$$.fragment, local);

			transition_in(carousel.$$.fragment, local);

			transition_in(origin.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(pillars.$$.fragment, local);
			transition_out(carousel.$$.fragment, local);
			transition_out(origin.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
			}

			destroy_component(pillars, detaching);

			if (detaching) {
				detach(t1);
			}

			destroy_component(carousel, detaching);

			if (detaching) {
				detach(t2);
			}

			destroy_component(origin, detaching);
		}
	};
}

function instance$1($$self) {
	

  const images = [
    'images/pi_fun.jpg',
    'images/opsanta.JPG',
    'images/ball_is_life/jpg',
    'images/grad19',
    'images/sigma_fun.jpg',
    'images/habitat.JPG',
    'images/bubble_soccer.jpg',
  ];

  const pillarMsg = "Brothers embodying the spirit of Theta Tau through the" + 
    " three pillars.";

	return { images, pillarMsg };
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$2, safe_not_equal, []);
	}
}

export default About;
