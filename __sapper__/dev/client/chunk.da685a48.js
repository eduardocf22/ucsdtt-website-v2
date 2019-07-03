import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, t as text, a as space, c as claim_element, b as children, d as claim_text, f as detach, h as add_location, g as attr, j as insert, k as append, n as noop } from './chunk.b5534b6a.js';
import { c as cubicOut } from './chunk.be4ac2db.js';

function fade(node, { delay = 0, duration = 400 }) {
    const o = +getComputedStyle(node).opacity;
    return {
        delay,
        duration,
        css: t => `opacity: ${t * o}`
    };
}
function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 }) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === 'none' ? '' : style.transform;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - (od * u)}`
    };
}

/* src/components/Pillars.svelte generated by Svelte v3.6.2 */

const file = "src/components/Pillars.svelte";

function create_fragment(ctx) {
	var h1, t0, t1, h3, t2, t3, div3, div0, img0, t4, h40, t5, t6, p0, t7, strong0, t8, t9, strong1, t10, t11, t12, div1, img1, t13, h41, t14, t15, p1, t16, strong2, t17, t18, strong3, t19, t20, t21, div2, img2, t22, h42, t23, t24, p2, t25, strong4, t26, t27, strong5, t28, t29, strong6, t30, t31, strong7, t32, t33, strong8, t34, t35;

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("About");
			t1 = space();
			h3 = element("h3");
			t2 = text("Theta Tau bases its moral tenets in three pillars:");
			t3 = space();
			div3 = element("div");
			div0 = element("div");
			img0 = element("img");
			t4 = space();
			h40 = element("h4");
			t5 = text("Brotherhood");
			t6 = space();
			p0 = element("p");
			t7 = text("We strive to make the group as\n      ");
			strong0 = element("strong");
			t8 = text("closely knit as possible");
			t9 = text("\n      throughout one’s college years. Our goal is to develop bonds between our\n      brothers that will last a lifetime. We foster an inviting, safe, and\n      social environment in which our members become\n      ");
			strong1 = element("strong");
			t10 = text("lifelong friends");
			t11 = text(".");
			t12 = space();
			div1 = element("div");
			img1 = element("img");
			t13 = space();
			h41 = element("h4");
			t14 = text("Philanthropy");
			t15 = space();
			p1 = element("p");
			t16 = text("For the purpose of our members’ personal growth, as well as our\n      community’s benefits, we are involved in projects that ");
			strong2 = element("strong");
			t17 = text("give back \n      to the community");
			t18 = text(" around us. Serving alongside brothers will \n      establish strong bonds and also guarantee a truly ");
			strong3 = element("strong");
			t19 = text("meaningful time\n      through one’s college years");
			t20 = text(".");
			t21 = space();
			div2 = element("div");
			img2 = element("img");
			t22 = space();
			h42 = element("h4");
			t23 = text("Professionalism");
			t24 = space();
			p2 = element("p");
			t25 = text("We also seek to shape up one’s professional interests to prepare them for\n      their ");
			strong4 = element("strong");
			t26 = text("life ahead of college");
			t27 = text(". We plan various \n      ");
			strong5 = element("strong");
			t28 = text("networking opportunities");
			t29 = text(" as well as events that provide \n      a sneak peek at different professional careers. Brothers have gone on \n      to work at ");
			strong6 = element("strong");
			t30 = text("top companies");
			t31 = text(", pursue their \n      ");
			strong7 = element("strong");
			t32 = text("passions");
			t33 = text(", and help each other ");
			strong8 = element("strong");
			t34 = text("realize\n      their full potential");
			t35 = text(".");
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "About");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n\n");

			h3 = claim_element(nodes, "H3", {}, false);
			var h3_nodes = children(h3);

			t2 = claim_text(h3_nodes, "Theta Tau bases its moral tenets in three pillars:");
			h3_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n\n");

			div3 = claim_element(nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div0 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			img0 = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true }, false);
			var img0_nodes = children(img0);

			img0_nodes.forEach(detach);
			t4 = claim_text(div0_nodes, "\n    ");

			h40 = claim_element(div0_nodes, "H4", { class: true }, false);
			var h40_nodes = children(h40);

			t5 = claim_text(h40_nodes, "Brotherhood");
			h40_nodes.forEach(detach);
			t6 = claim_text(div0_nodes, "\n    ");

			p0 = claim_element(div0_nodes, "P", {}, false);
			var p0_nodes = children(p0);

			t7 = claim_text(p0_nodes, "We strive to make the group as\n      ");

			strong0 = claim_element(p0_nodes, "STRONG", {}, false);
			var strong0_nodes = children(strong0);

			t8 = claim_text(strong0_nodes, "closely knit as possible");
			strong0_nodes.forEach(detach);
			t9 = claim_text(p0_nodes, "\n      throughout one’s college years. Our goal is to develop bonds between our\n      brothers that will last a lifetime. We foster an inviting, safe, and\n      social environment in which our members become\n      ");

			strong1 = claim_element(p0_nodes, "STRONG", {}, false);
			var strong1_nodes = children(strong1);

			t10 = claim_text(strong1_nodes, "lifelong friends");
			strong1_nodes.forEach(detach);
			t11 = claim_text(p0_nodes, ".");
			p0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t12 = claim_text(div3_nodes, "\n  ");

			div1 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			img1 = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true }, false);
			var img1_nodes = children(img1);

			img1_nodes.forEach(detach);
			t13 = claim_text(div1_nodes, "\n    ");

			h41 = claim_element(div1_nodes, "H4", { class: true }, false);
			var h41_nodes = children(h41);

			t14 = claim_text(h41_nodes, "Philanthropy");
			h41_nodes.forEach(detach);
			t15 = claim_text(div1_nodes, "\n    ");

			p1 = claim_element(div1_nodes, "P", {}, false);
			var p1_nodes = children(p1);

			t16 = claim_text(p1_nodes, "For the purpose of our members’ personal growth, as well as our\n      community’s benefits, we are involved in projects that ");

			strong2 = claim_element(p1_nodes, "STRONG", {}, false);
			var strong2_nodes = children(strong2);

			t17 = claim_text(strong2_nodes, "give back \n      to the community");
			strong2_nodes.forEach(detach);
			t18 = claim_text(p1_nodes, " around us. Serving alongside brothers will \n      establish strong bonds and also guarantee a truly ");

			strong3 = claim_element(p1_nodes, "STRONG", {}, false);
			var strong3_nodes = children(strong3);

			t19 = claim_text(strong3_nodes, "meaningful time\n      through one’s college years");
			strong3_nodes.forEach(detach);
			t20 = claim_text(p1_nodes, ".");
			p1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t21 = claim_text(div3_nodes, "\n  ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			img2 = claim_element(div2_nodes, "IMG", { src: true, alt: true, class: true }, false);
			var img2_nodes = children(img2);

			img2_nodes.forEach(detach);
			t22 = claim_text(div2_nodes, "\n    ");

			h42 = claim_element(div2_nodes, "H4", { class: true }, false);
			var h42_nodes = children(h42);

			t23 = claim_text(h42_nodes, "Professionalism");
			h42_nodes.forEach(detach);
			t24 = claim_text(div2_nodes, "\n    ");

			p2 = claim_element(div2_nodes, "P", {}, false);
			var p2_nodes = children(p2);

			t25 = claim_text(p2_nodes, "We also seek to shape up one’s professional interests to prepare them for\n      their ");

			strong4 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong4_nodes = children(strong4);

			t26 = claim_text(strong4_nodes, "life ahead of college");
			strong4_nodes.forEach(detach);
			t27 = claim_text(p2_nodes, ". We plan various \n      ");

			strong5 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong5_nodes = children(strong5);

			t28 = claim_text(strong5_nodes, "networking opportunities");
			strong5_nodes.forEach(detach);
			t29 = claim_text(p2_nodes, " as well as events that provide \n      a sneak peek at different professional careers. Brothers have gone on \n      to work at ");

			strong6 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong6_nodes = children(strong6);

			t30 = claim_text(strong6_nodes, "top companies");
			strong6_nodes.forEach(detach);
			t31 = claim_text(p2_nodes, ", pursue their \n      ");

			strong7 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong7_nodes = children(strong7);

			t32 = claim_text(strong7_nodes, "passions");
			strong7_nodes.forEach(detach);
			t33 = claim_text(p2_nodes, ", and help each other ");

			strong8 = claim_element(p2_nodes, "STRONG", {}, false);
			var strong8_nodes = children(strong8);

			t34 = claim_text(strong8_nodes, "realize\n      their full potential");
			strong8_nodes.forEach(detach);
			t35 = claim_text(p2_nodes, ".");
			p2_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(h1, file, 44, 0, 706);
			add_location(h3, file, 46, 0, 722);
			attr(img0, "src", "icons/pillar.png");
			attr(img0, "alt", "pillar");
			attr(img0, "class", "svelte-m73rrs");
			add_location(img0, file, 50, 4, 832);
			attr(h40, "class", "svelte-m73rrs");
			add_location(h40, file, 51, 4, 880);
			add_location(strong0, file, 54, 6, 952);
			add_location(strong1, file, 58, 6, 1207);
			add_location(p0, file, 52, 4, 905);
			attr(div0, "class", "pillar svelte-m73rrs");
			add_location(div0, file, 49, 2, 807);
			attr(img1, "src", "icons/pillar.png");
			attr(img1, "alt", "pillar");
			attr(img1, "class", "svelte-m73rrs");
			add_location(img1, file, 62, 4, 1287);
			attr(h41, "class", "svelte-m73rrs");
			add_location(h41, file, 63, 4, 1335);
			add_location(strong2, file, 66, 61, 1496);
			add_location(strong3, file, 68, 56, 1647);
			add_location(p1, file, 64, 4, 1361);
			attr(div1, "class", "pillar svelte-m73rrs");
			add_location(div1, file, 61, 2, 1262);
			attr(img2, "src", "icons/pillar.png");
			attr(img2, "alt", "pillar");
			attr(img2, "class", "svelte-m73rrs");
			add_location(img2, file, 73, 4, 1760);
			attr(h42, "class", "svelte-m73rrs");
			add_location(h42, file, 74, 4, 1808);
			add_location(strong4, file, 77, 12, 1933);
			add_location(strong5, file, 78, 6, 1996);
			add_location(strong6, file, 80, 17, 2164);
			add_location(strong7, file, 81, 6, 2216);
			add_location(strong8, file, 81, 53, 2263);
			add_location(p2, file, 75, 4, 1837);
			attr(div2, "class", "pillar svelte-m73rrs");
			add_location(div2, file, 72, 2, 1735);
			attr(div3, "class", "pillars svelte-m73rrs");
			add_location(div3, file, 48, 0, 783);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, h3, anchor);
			append(h3, t2);
			insert(target, t3, anchor);
			insert(target, div3, anchor);
			append(div3, div0);
			append(div0, img0);
			append(div0, t4);
			append(div0, h40);
			append(h40, t5);
			append(div0, t6);
			append(div0, p0);
			append(p0, t7);
			append(p0, strong0);
			append(strong0, t8);
			append(p0, t9);
			append(p0, strong1);
			append(strong1, t10);
			append(p0, t11);
			append(div3, t12);
			append(div3, div1);
			append(div1, img1);
			append(div1, t13);
			append(div1, h41);
			append(h41, t14);
			append(div1, t15);
			append(div1, p1);
			append(p1, t16);
			append(p1, strong2);
			append(strong2, t17);
			append(p1, t18);
			append(p1, strong3);
			append(strong3, t19);
			append(p1, t20);
			append(div3, t21);
			append(div3, div2);
			append(div2, img2);
			append(div2, t22);
			append(div2, h42);
			append(h42, t23);
			append(div2, t24);
			append(div2, p2);
			append(p2, t25);
			append(p2, strong4);
			append(strong4, t26);
			append(p2, t27);
			append(p2, strong5);
			append(strong5, t28);
			append(p2, t29);
			append(p2, strong6);
			append(strong6, t30);
			append(p2, t31);
			append(p2, strong7);
			append(strong7, t32);
			append(p2, t33);
			append(p2, strong8);
			append(strong8, t34);
			append(p2, t35);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(h3);
				detach(t3);
				detach(div3);
			}
		}
	};
}

class Pillars extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export { Pillars as P, fly as a, fade as f };