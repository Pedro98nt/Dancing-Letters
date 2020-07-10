var resetLetters;
var createLetterTimeline;

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

jQuery(document).ready(function($) {
	
	let theWord, lettersArray;
	
	//	Set each path to a random colour
	
	const pathColors = [
		'#5BFDDD',
		'#57E1C6',
		'#6FFFB2',
		'#68EFA1',
		'#FFFF50',
		'#FFDD53',
		'#FF9541',
		'#FF8D7D',
		'#FF7A6C',
		'#DC9AF7',
		'#CF85EE',
		'#75D9FF',
		'#6AC1FA',
		'#FFE0FF',
		'#FFA9FF',
		'#41FFFF',
		'#42E4E5',
		'#FFFF98',
		'#FFE084',
		'#FFACAC',
		'#FF9394',
		'#95E1FF',
		'#4BFEFF',
		'#5EFFE2',
		'#51EDC5',
		'#FF91D1'
	];
	
	//	Set initial transforms
	
	function initLetters() {
		$('.svg-wrapper g, .svg-wrapper path').each(function(index) {
			//	Do some error-checking, just in case I missed one
			if ($(this).is('[data-origin]')) {
				var tOrig = $(this).attr('data-origin');
				if (tOrig) {
					gsap.set($(this).get(0), { transformOrigin: tOrig });
				} else {
					console.log($(this).attr('class') + ' don`t got no data-origin value');
				}
			} else {
				console.log($(this).attr('class') + ' ain`t got no data-origin AT ALL');
			}
		});
		
		var svgWidth = $('body').width();
		var svgHeight = $('svg').height();
		var wordBounds = getBounds($('.letter-wrapper'));
		var wordWidth = wordBounds.width + 20;
		var wordHeight = wordBounds.height;
		
		var xPos = (svgWidth / 2) - (wordWidth / 2);
		var yPos = (svgHeight / 2) - (wordHeight / 2) + 30;
		var _scale = 1;
		
		if (svgWidth / wordWidth < 1) {
			xPos = 10;
			_scale = svgWidth / wordWidth;
		}
    
		gsap.set('.letter-wrapper', { x: xPos, y: yPos, scale: _scale });
	}
	
	initLetters();
	
	//	Reset letters to their 'start' positions
	
	resetLetters = function() {
		//	Set all the path colors to random
		
		$('.svg-wrapper path').each(function(index) {
			$(this).attr('stroke', pathColors[Math.floor(Math.random() * pathColors.length)]);
		});
		
		if (!$('.cloned').length) {
			return;
		}
		
		//	Now reset all of the positions
		
		//	A
		
		if ($('.cloned.letter.a').length) {
			gsap.set('.cloned.letter.a', { rotation: -27.8 });
			gsap.set('.cloned.letter.a .ascender.right', { rotation: 55.5 });
			gsap.set('.cloned.letter.a .crossbar', { rotation: -62.2 });
		}
		
		//	B
		
		if ($('.cloned.letter.b').length) {
			gsap.set('.cloned.letter.b', { rotation: 90 });
			gsap.set('.cloned.letter.b .bowl-top', { scaleX: 0 });
			gsap.set('.cloned.letter.b .bowl-bottom', { scaleX: 0 });
		}
		
		//	C
		
		if ($('.cloned.letter.c').length) {
			gsap.set('.cloned.letter.c', { rotation: -60 });
			gsap.set('.cloned.letter.c .curve', { drawSVG: '0%' });
		}
		
		//	D
		
		if ($('.cloned.letter.d').length) {
			gsap.set('.cloned.letter.d', { rotation: 90 });
			gsap.set('.cloned.letter.d .ascender', { drawSVG: '0%', rotation: 90 });
			gsap.set('.cloned.letter.d .curve', { drawSVG: '0%' });
		}
		
		//	E
		
		if ($('.cloned.letter.e').length) {
			gsap.set('.cloned.letter.e', { rotation: 90 });
			gsap.set('.cloned.letter.e .bar-top', { drawSVG: '0%' });
			gsap.set('.cloned.letter.e .bar-middle', { drawSVG: '0%' });
			gsap.set('.cloned.letter.e .bar-bottom', { drawSVG: '0%' });
		}
		
		//	F
		
		if ($('.cloned.letter.f').length) {
			gsap.set('.cloned.letter.f', { y: 44 });
			gsap.set('.cloned.letter.f .ascender', { scaleY: 0 });
			gsap.set('.cloned.letter.f .bar-middle', { scaleX: 0 });
		}
		
		//	G
		
		if ($('.cloned.letter.g').length) {
			gsap.set('.cloned.letter.g', { y: -18, xPercent: -50, rotation: 90 });
			gsap.set('.cloned.letter.g .curve', { drawSVG: '0%' });
			gsap.set('.cloned.letter.g .ascender', { scaleY: 0 });
			gsap.set('.cloned.letter.g .bar-middle', { scaleX: 0 });
		}
		
		//	H
		
		if ($('.cloned.letter.h').length) {
			gsap.set('.cloned.letter.h .ascender.left', { scaleY: 0 });
			gsap.set('.cloned.letter.h .ascender.right', { scaleY: 0 });
			gsap.set('.cloned.letter.h .bar-middle', { scaleX: 0 });
		}
		
		//	I
		
		if ($('.cloned.letter.i').length) {
			gsap.set('.cloned.letter.i .ascender', { scaleY: 0 });
			gsap.set('.cloned.letter.i .dot', { scaleY: 0 });
		}
		
		//	J
		
		if ($('.cloned.letter.j').length) {
			gsap.set('.cloned.letter.j', { y: 10 });
			gsap.set('.cloned.letter.j .ascender', { drawSVG: '100% 100%' });
			gsap.set('.cloned.letter.j .curve', { drawSVG: '0%' });
		}
		
		//	K
		
		if ($('.cloned.letter.k').length) {
			gsap.set('.cloned.letter.k .bar-bottom', { drawSVG: '0%' });
			gsap.set('.cloned.letter.k .bar-top', { drawSVG: '0%' });
			gsap.set('.cloned.letter.k .ascender', { drawSVG: '100% 100%' });
		}
		
		//	L
		
		if ($('.cloned.letter.l').length) {
			gsap.set('.cloned.letter.l', { rotation: 90 });
			gsap.set('.cloned.letter.l .ascender', { yPercent: 100, x: -14, scaleY: 0 });
			gsap.set('.cloned.letter.l .bar-bottom', { scaleX: 0 });
		}
		
		//	M
		
		if ($('.cloned.letter.m').length) {
			gsap.set('.cloned.letter.m .ascender.left', { drawSVG: '100% 100%' });
			gsap.set('.cloned.letter.m .ascender.right', { drawSVG: '100% 100%' });
			gsap.set('.cloned.letter.m .v.left', { rotation: -51.2, drawSVG: '0%' });
			gsap.set('.cloned.letter.m .v.right', { rotation: 51.2, drawSVG: '0%' });
		}
		
		//	N
		
		if ($('.cloned.letter.n').length) {
			gsap.set('.cloned.letter.n .ascender.left', { drawSVG: '100% 100%' });
			gsap.set('.cloned.letter.n .ascender.right', { drawSVG: '100% 100%', rotation: 80 });
			gsap.set('.cloned.letter.n .bar-middle', { drawSVG: '100% 100%', yPercent: 100, rotation: -49.5 });
		}
		
		//	O
		
		if ($('.cloned.letter.o').length) {
			gsap.set('.cloned.letter.o', { scale: 0 });
			gsap.set('.cloned.letter.o .circle', { opacity: 0 });
			gsap.set('.cloned.letter.o .pop', { opacity: 0 });
		}
		
		//	P
		
		if ($('.cloned.letter.p').length) {
			gsap.set('.cloned.letter.p', { yPercent: 34 });
			gsap.set('.cloned.letter.p .ascender', { drawSVG: '100% 100%' });
			gsap.set('.cloned.letter.p .bowl', { drawSVG: '100% 100%' });
		}
		
		//	Q
		
		if ($('.cloned.letter.q').length) {
			gsap.set('.cloned.letter.q', { scaleY: 0 });
			gsap.set('.cloned.letter.q .crossbar', { drawSVG: '0%' });
		}
		
		//	R
		
		if ($('.cloned.letter.r').length) {
			gsap.set('.cloned.letter.r', { rotation: 90 });
			gsap.set('.cloned.letter.r .curve', { drawSVG: '0%' });
			gsap.set('.cloned.letter.r .ascender', { drawSVG: '0%', rotation: 90 });
			gsap.set('.cloned.letter.r .leg', { drawSVG: '0%' });
		}
		
		//	S
		
		if ($('.cloned.letter.s').length) {
			gsap.set('.cloned.letter.s', { scaleY: 0 });
		}
		
		//	T
		
		if ($('.cloned.letter.t').length) {
			gsap.set('.cloned.letter.t .ascender', { drawSVG: '100% 100%' });
			gsap.set('.cloned.letter.t .top-left', { drawSVG: '0%', rotation: 60 });
			gsap.set('.cloned.letter.t .top-right', { drawSVG: '100% 100%', rotation: -60 });
			gsap.set('.cloned.letter.t .motion-path', { opacity: 0 });
		}
		
		//	U
		
		if ($('.cloned.letter.u').length) {
			gsap.set('.cloned.letter.u', { rotation: -90 });
			gsap.set('.cloned.letter.u .curve', { drawSVG: '0%' });
		}
		
		//	V
		
		if ($('.cloned.letter.v').length) {
			gsap.set('.cloned.letter.v .ascender.left', { drawSVG: '0%' });
			gsap.set('.cloned.letter.v .ascender.right', { drawSVG: '100% 100%' });
		}
		
		//	W
		
		if ($('.cloned.letter.w').length) {
			gsap.set('.cloned.letter.w .middle-left', { rotation: -23, xPercent: 100 });
			gsap.set('.cloned.letter.w .middle-right', { rotation: 23, xPercent: -100 });
			gsap.set('.cloned.letter.w .ascender.left', { rotation: 22, xPercent: 100 });
			gsap.set('.cloned.letter.w .ascender.right', { rotation: -22, xPercent: -100 });
		}
		
		//	X
		
		if ($('.cloned.letter.x').length) {
			gsap.set('.cloned.letter.x .ascender.to-top-left', { drawSVG: '100% 100%', xPercent: -100, rotation: 41 });
			gsap.set('.cloned.letter.x .ascender.to-top-right', { drawSVG: '100% 100%', xPercent: 100, rotation: -41 });
		}
		
		//	Y
		
		if ($('.cloned.letter.y').length) {
			gsap.set('.cloned.letter.y .ascender', { drawSVG: '0%' });
			gsap.set('.cloned.letter.y .v.left', { drawSVG: '0%', yPercent: 65, rotation: 20 });
			gsap.set('.cloned.letter.y .v.right', { drawSVG: '0%', yPercent: 65, rotation: -20 });
		}
		
		//	Z
		
		if ($('.cloned.letter.z').length) {
			gsap.set('.cloned.letter.z .bar-top', { y: 44, xPercent: 80 });
			gsap.set('.cloned.letter.z .ascender', { rotation: 56.5 });
			gsap.set('.cloned.letter.z .motion-path', { opacity: 0 });
		}
	}
	
	//	Create each letter's timeline
	
	createLetterTimeline = function(elem, offset) {
		var tempTL = gsap.timeline({ delay: offset * 0.6 });
		
		var letter = elem.attr('data-letter');
		var letterID = '#' + elem.attr('id');
		
		tempTL.to(letterID, { opacity: 1, duration: 0.4, ease: 'circ.out' });
		
		switch (letter) {
			case 'a' : {
				tempTL.to(letterID + '.letter.a', { rotation: 62.2, duration: 1, ease: 'bounce.out' });
				tempTL.to(letterID + '.letter.a .ascender.right', { rotation: 0, duration: 1, delay: -0.25, ease: 'elastic.out(2, 0.3)' });
				tempTL.to(letterID + '.letter.a', { y: -50, rotation: 15, duration: 0.45, delay: -0.95, ease: 'power2.out' });
				tempTL.to(letterID + '.letter.a', { y: 0, rotation: 0, duration: 0.6, delay: -0.2, ease: 'bounce.out' });
				tempTL.to(letterID + '.letter.a .crossbar', { rotation: 0, duration: 1, delay: -0.5, ease: 'bounce.out' });
				break;
			}
			
			case 'b' : {
				tempTL.to(letterID + '.letter.b .bowl-bottom', { scaleX: 1, duration: 0.6, ease: 'elastic.out(2, 0.3)' });
				tempTL.to(letterID + '.letter.b', { y: -50, rotation: 690, delay: -0.55, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.b', { y: 0, rotation: 720, duration: 0.5, ease: 'bounce.out' });
				tempTL.to(letterID + '.letter.b .bowl-top', { scaleX: 1, duration: 0.6, delay: 0.3, ease: 'bounce.out' });
				tempTL.to(letterID + '.letter.b', { rotation: 705, duration: 0.3, delay: -0.55, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.b', { rotation: 720, duration: 0.6, ease: 'bounce.out' });
				break;
			}
			
			case 'c' : {
				tempTL.to(letterID + '.letter.c .curve', { drawSVG: '100%', duration: 1.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.c', { rotation: 0, duration: 2, delay: -1.5, ease: 'elastic.out(2, 0.3)' });
				break;
			}
			
			case 'd' : {
				tempTL.to(letterID + '.letter.d .curve', { drawSVG: '100%', duration: 0.8, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.d .ascender', { drawSVG: '100%', duration: 0.6, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.d', { y: -30, rotation: -5, duration: 0.5, delay:-0.5, ease: 'power2.out' });
				tempTL.to(letterID + '.letter.d .ascender', { rotation: 105, duration: 0.5, delay: -0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.d .ascender', { rotation: 0, duration: 1, ease: 'bounce.out' });
				tempTL.to(letterID + '.letter.d', { y: 0, rotation: 0, duration: 0.6, delay: -0.95, ease: 'bounce.out' });
				break;
			}
			
			case 'e' : {
				tempTL.to(letterID + '.letter.e .bar-bottom', { drawSVG: '100%', duration: 0.05, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.e', { y: -36, rotation: 135, duration: 0.25, delay: -0.025, ease: 'power2.out' });
				tempTL.to(letterID + '.letter.e', { y: -26, rotation: 125, duration: 0.4, ease: 'bounce.out' });
				tempTL.to(letterID + '.letter.e .bar-top', { drawSVG: '100%', duration: 0.05, delay: 0.1, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.e', { y: -40, rotation: 80, duration: 0.25, delay: -0.025, ease: 'power2.out' });
				tempTL.to(letterID + '.letter.e', { y: -30, rotation: 90, duration: 0.4, ease: 'bounce.out' });
				tempTL.to(letterID + '.letter.e .bar-middle', { drawSVG: '200%', duration: 0.05, delay: 0.1, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.e', { y: -50, rotation: 0, duration: 0.4, delay: -0.025, ease: 'power2.out' });
				tempTL.to(letterID + '.letter.e', { y: 0, duration: 0.6, ease: 'bounce.out' });
				break;
			}
			
			case 'f' : {
				tempTL.to(letterID + '.letter.f .ascender', { scaleY: 1, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
				tempTL.to(letterID + '.letter.f', { y: -30, duration: 0.6, delay: -0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.f', { y: 0, duration: 0.3, ease: 'power2.out' });
				tempTL.to(letterID + '.letter.f', { scaleX: 1.1, scaleY: 0.6, duration: 0.2, delay: -0.2, ease: 'power2.out' });
				tempTL.to(letterID + '.letter.f', { scaleX: 1, scaleY: 1, duration: 1, ease: 'elastic.out(1, 0.3)' });
				tempTL.to(letterID + '.letter.f .bar-middle', { scaleX: 1, duration: 0.4, delay: -0.9, ease: 'elastic.out(1, 0.3)' });
				break;
			}
			
			case 'g' : {
				tempTL.to(letterID + '.letter.g .curve', { drawSVG: '100%', duration: 0.8, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.g .ascender', { scaleY: 1, duration: 0.3, delay: -0.2, ease: 'power2.out' });
				tempTL.to(letterID + '.letter.g .bar-middle', { scaleX: 1, duration: 0.3, delay: -0.15, ease: 'power2.out' });
				tempTL.to(letterID + '.letter.g .bar-middle', { rotation: 90, duration: 0.8, ease: 'elastic.out(1.5, 0.3)' });
				tempTL.to(letterID + '.letter.g', { y: -40, xPercent: 0, rotation: -5, duration: 1, delay: -0.75, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.g', { y: 0, rotation: 0, duration: 0.7, delay: -0.5, ease: 'bounce.out' });
				tempTL.to(letterID + '.letter.g .bar-middle', { rotation: 0, duration: 0.7, delay: -0.5, ease: 'bounce.out' });
				break;
			}
			
			case 'h' : {
				tempTL.to(letterID + '.letter.h .ascender.left', { scaleY: 1, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
				tempTL.to(letterID + '.letter.h .ascender.right', { scaleY: 1, duration: 0.7, delay: -0.2, ease: 'elastic.out(1, 0.3)' });
				tempTL.to(letterID + '.letter.h .ascender.right', { rotation: -41, duration: 0.7, ease: 'bounce.out' });
				tempTL.to(letterID + '.letter.h .bar-middle', { scaleX: 1, duration: 0.6, ease: 'power2.out' });
				tempTL.to(letterID + '.letter.h .ascender.right', { rotation: 35, duration: 0.7, delay: -0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.h .ascender.right', { rotation: 0, duration: 0.7, ease: 'bounce.out' });
				break;
			}
			
			case 'i' : {
				tempTL.to(letterID + '.letter.i .ascender', { scaleY: 1, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
				tempTL.to(letterID + '.letter.i .dot', { y: -40, scaleY: 1, duration: 0.7, delay: -0.6, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.i .dot', { y: -10, duration: 0.7, ease: 'bounce.out' });
				break;
			}
			
			case 'j' : {
				tempTL.to(letterID + '.letter.j .ascender', { drawSVG: '100% 0%', duration: 0.7, ease: 'circ.out' });
				tempTL.to(letterID + '.letter.j .curve', { drawSVG: '100%', duration: 0.7, ease: 'circ.out' });
				tempTL.to(letterID + '.letter.j', { y: -18, xPercent: -50, rotation: -120, duration: 0.7, delay: -0.7, ease: 'circ.out' });
				tempTL.to(letterID + '.letter.j', { y: 0, xPercent: 0, rotation: 0, duration: 1.5, ease: 'elastic.out(1.5, 0.3)' });
				break;
			}
			
			case 'k' : {
				tempTL.to(letterID + '.letter.k .bar-bottom', { drawSVG: '100%', duration: 0.5, ease: 'circ.out' });
				tempTL.to(letterID + '.letter.k .bar-bottom', { rotation: -50.4, duration: 0.5, ease: 'bounce.out' });
				tempTL.to(letterID + '.letter.k .ascender', { drawSVG: '100% 0%', duration: 1, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.k .bar-bottom', { rotation: -15, duration: 1, delay: -1, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.k .bar-top', { drawSVG: '100%', duration: 0.8, delay: -0.3, ease: 'elastic.out(1, 0.3)' });
				tempTL.to(letterID + '.letter.k .bar-bottom', { rotation: 50, duration: 0.3, delay: -0.75, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.k .bar-bottom', { rotation: 0, duration: 0.5, ease: 'bounce.out' });
			}
			
			case 'l' : {
				tempTL.to(letterID + '.letter.l .bar-bottom', { scaleX: 1.45, duration: 0.6, ease: 'circ.in' });
				tempTL.to(letterID + '.letter.l .ascender', { scaleY: 0.69, duration: 0.4, ease: 'circ.out' });
				tempTL.to(letterID + '.letter.l', { rotation: 0, xPercent: 45, duration: 1, ease: 'bounce.out' });
				tempTL.to(letterID + '.letter.l .ascender', { yPercent: -60, scaleY: 1, duration: 0.6, delay: -0.75, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.l .bar-bottom', { xPercent: -20, duration: 0.5, delay: -0.6, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.l .ascender', { yPercent: 0, x: -18, duration: 0.5, ease: 'expo.in' });
				tempTL.set(letterID + '.letter.l .bar-bottom', { transformOrigin: '0% 0%' });
				tempTL.to(letterID + '.letter.l .bar-bottom', { rotation: -30, scaleX: 1.2, duration: 0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.l .bar-bottom', { rotation: 0, scaleX: 1, duration: 0.5, ease: 'bounce.out' });
				break;
			}
			
			case 'm' : {
				tempTL.to(letterID + '.letter.m .ascender.left', { drawSVG: '100% 0%', duration: 0.7, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.m .ascender.right', { drawSVG: '100% 0%', duration: 0.7, delay: -0.2, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.m .v.left', { drawSVG: '50%', duration: 0.5, delay: -0.2, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.m .v.right', { drawSVG: '50%', duration: 0.5, delay: -0.5, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.m .ascender.left', { rotation: -15, duration: 0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.m .v.left', { drawSVG: '100%', xPercent: -50, yPercent: 5, duration: 0.5, delay: -0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.m .ascender.right', { rotation: 15, duration: 0.5, delay: -0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.m .v.right', { drawSVG: '100%', xPercent: 50, yPercent: 5, duration: 0.5, delay: -0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.m .ascender.left', { rotation: 0, duration: 1, ease: 'elastic.out(1, 0.3)' });
				tempTL.to(letterID + '.letter.m .v.left', { rotation: 0, xPercent: 0, yPercent: 0, duration: 1, delay: -1, ease: 'elastic.out(1, 0.3)' });
				tempTL.to(letterID + '.letter.m .ascender.right', { rotation: 0, duration: 1, delay: -1, ease: 'elastic.out(1, 0.3)' });
				tempTL.to(letterID + '.letter.m .v.right', { rotation: 0, xPercent: 0, yPercent: 0, duration: 1, delay: -1, ease: 'elastic.out(1, 0.3)' });
				break;
			}
			
			case 'n' : {
				tempTL.to(letterID + '.letter.n .bar-middle', { drawSVG: '100% 0%', duration: 0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.n .ascender.right', { drawSVG: '100% 0%', rotation: 0, duration: 0.7, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.n .bar-middle', { rotation: -99, duration: 0.7, delay: -0.7, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.n .ascender.left', { drawSVG: '100% 0%', duration: 0.7, delay: -0.4, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.n .bar-middle', { rotation: -49.5, duration: 0.7, delay: -0.7, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.n .bar-middle', { yPercent: -50, rotation: 310, duration: 1, delay: -0.3, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.n .bar-middle', { yPercent: 0, duration: 0.6, delay: -0.1, ease: 'bounce.out' });
				tempTL.to(letterID + '.letter.n .bar-middle', { rotation: 360, duration: 1, delay: -0.4, ease: 'bounce.out' });
				break;
			}
			
			case 'o' : {
				tempTL.to(letterID + '.letter.o', { scale: 1, yPercent: -70, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
				tempTL.to(letterID + '.letter.o .bubble', { y:'+=10', duration: 0.5, yoyo: true, repeat: 3, ease: 'sine.inOut' });
				tempTL.set(letterID + '.letter.o .bubble', { opacity: 0 });
				tempTL.set(letterID + '.letter.o .pop', { opacity: 1 });
				tempTL.to(letterID + '.letter.o .pop-1', { y:'-=16', duration: 0.3, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.o .pop-2', { x: '+=10', y:'-=10', duration: 0.3, delay: -0.3, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.o .pop-3', { x: '+=18', duration: 0.3, delay: -0.3, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.o .pop-4', { x: '+=11', y: '+=9', duration: 0.3, delay: -0.3, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.o .pop-5', { y: '+=19', duration: 0.3, delay: -0.3, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.o .pop-6', { x: '-=9', y: '+=10', duration: 0.3, delay: -0.3, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.o .pop-7', { x: '-=18', duration: 0.3, delay: -0.3, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.o .pop-8', { x: '-=8', y: '-=10', duration: 0.3, delay: -0.3, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.o .pop-1', { y: '+=20', opacity: 0, duration: 3, delay: -0.1, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.o .pop-2', { y: '+=24', opacity: 0, duration: 3, delay: -3, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.o .pop-3', { y: '+=18', opacity: 0, duration: 3, delay: -3, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.o .pop-4', { y: '+=20', opacity: 0, duration: 3, delay: -3, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.o .pop-5', { y: '+=22', opacity: 0, duration: 3, delay: -3, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.o .pop-6', { y: '+=17', opacity: 0, duration: 3, delay: -3, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.o .pop-7', { y: '+=21', opacity: 0, duration: 3, delay: -3, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.o .pop-8', { y: '+=15', opacity: 0, duration: 3, delay: -3, ease: 'expo.out' });
				tempTL.set(letterID + '.letter.o .circle', { opacity: 1, delay: -3 });
				tempTL.to(letterID + '.letter.o .circle', { yPercent: 80, duration: 0.5, delay: -3, ease: 'power2.in' });
				tempTL.to(letterID + '.letter.o .circle', { scaleY: 0.8, duration: 0.3, delay: -2.5, ease: 'power2.out' });
				tempTL.to(letterID + '.letter.o .circle', { yPercent: 30, scaleY: 1.05, duration: 0.3, delay: -2.5, ease: 'power2.out' });
				tempTL.to(letterID + '.letter.o .circle', { yPercent: 80, scaleY: 1, duration: 1, delay: -2.1, ease: 'bounce.out' });
				break;
			}
			
			case 'p' : {
				tempTL.to(letterID + '.letter.p .ascender.top', { drawSVG: '100% 0%', duration: 0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.p .bowl', { drawSVG: '100% 0%', duration: 0.5, delay: -0.1, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.p .ascender.bottom', { drawSVG: '100% 0%', duration: 0.5, delay: -0.1, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.p', { yPercent: -30, duration: 0.5, delay: -0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.p', { yPercent: 0, duration: 0.5, ease: 'bounce.out' });
				tempTL.to(letterID + '.letter.p', { rotation: 40, duration: 0.5, delay: 0.1, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.p', { rotation: 00, duration: 1.5, ease: 'elastic.out(1.5, 0.5)' });
				break;
			}
			
			case 'q' : {
				tempTL.to(letterID + '.letter.q', { scaleY: 1, yPercent: -70, duration: 1, ease: 'elastic.out(1.5, 0.5)' });
				tempTL.set(letterID + '.letter.q', { rotation: -135, delay: -0.4 });
				tempTL.to(letterID + '.letter.q', { yPercent: 0, duration: 1, delay: -0.4, ease: 'bounce.out' });
				tempTL.to(letterID + '.letter.q .crossbar', { drawSVG: '100%', duration: 0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.q', { rotation: 0, duration: 1.5, ease: 'bounce.out' });
				break;
			}
			
			case 'r' : {
				tempTL.to(letterID + '.letter.r .curve', { drawSVG: '100%', duration: 0.5, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.r .ascender', { drawSVG: '100%', duration: 0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.r .ascender', { rotation: 0, duration: 0.5, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.r', { rotation: -30, duration: 0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.r', { rotation: 40, duration: 0.5, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.r .leg', { drawSVG: '100%', duration: 0.3, delay: -0.1, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.r', { rotation: -20, duration: 0.5, delay: -0.1, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.r', { rotation: 0, duration: 1, ease: 'bounce.out' });
				break;
			}
			
			case 's' : {
				tempTL.to(letterID + '.letter.s', { scaleY: 1, yPercent: -70, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
				tempTL.to(letterID + '.letter.s', { scaleY: 0.85, yPercent: 0, duration: 0.7, delay: -0.3, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.s', { scaleY: 1.05, yPercent: -50, duration: 0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.s', { scaleY: 1, yPercent: 0, duration: 0.5, delay: -0.2, ease: 'bounce.out' });
				break;
			}
			
			case 't' : {
				tempTL.to(letterID + '.letter.t .ascender', { drawSVG: '100% 0%', duration: 0.5, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.t .top-left', { drawSVG: '100%', duration: 0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.t .top-right', { drawSVG: '100% 0%', duration: 0.5, delay: -0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.t .top-left', { rotation: -90, duration: 1.5, delay: -0.5, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.t .top-right', { rotation: 90, duration: 1.5, delay: -1.5, ease: 'expo.in' });
				tempTL.set(letterID + '.letter.t .top-left', { transformOrigin: '0% 0%' });
				tempTL.to(letterID + '.letter.t .top-right', { rotation: 200, duration: 1, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.t .top-left', { motionPath: { path: letterID + '.letter.t .motion-path', align: letterID + '.letter.t .motion-path' }, duration: 1, delay: -1, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.t .top-left', { rotation: 20, duration: 0.6, ease: 'expo.in' });
				tempTL.set(letterID + '.letter.t .top-left', { transformOrigin: '100% 0%' });
				tempTL.to(letterID + '.letter.t .top-left', { rotation: 180, duration: 0.6, ease: 'bounce.out' });
				tempTL.to(letterID + '.letter.t .top-right', { rotation: 180, duration: 0.6, delay: -0.6, ease: 'bounce.out' });
				break;
			}
			
			case 'u' : {
				tempTL.to(letterID + '.letter.u', { rotation: 0, duration: 2.5, ease: 'elastic.out(0.5, 0.1)' });
				tempTL.to(letterID + '.letter.u .curve', { drawSVG: '100%', duration: 2.5, delay: -2.5, ease: 'elastic.out(0.5, 0.1)' });
				break;
			}
			
			case 'v' : {
				tempTL.to('.cloned.letter.v .ascender.left', { drawSVG: '50%', duration: 0.5, ease: 'expo.out' });
				tempTL.to('.cloned.letter.v .ascender.right', { drawSVG: '50% 100%', duration: 0.5, delay: -0.5, ease: 'expo.out'  });
				tempTL.to('.cloned.letter.v .ascender.left', { rotation: -45, duration: 0.8, ease: 'circ.out' });
				tempTL.to('.cloned.letter.v .ascender.right', { rotation: 45, duration: 0.8, delay: -0.8, ease: 'circ.out' });
				tempTL.to('.cloned.letter.v .ascender.left', { rotation: 0, duration: 0.4, ease: 'expo.out' });
				tempTL.to('.cloned.letter.v .ascender.right', { rotation: 0, duration: 0.4, delay: -0.4, ease: 'expo.out' });
				tempTL.to('.cloned.letter.v .ascender.left', { rotation: -45, duration: 0.25, ease: 'expo.out' });
				tempTL.to('.cloned.letter.v .ascender.right', { rotation: 45, duration: 0.25, delay: -0.25, ease: 'expo.out' });
				tempTL.to('.cloned.letter.v', { y: -10, duration: 0.25, delay: -0.25, ease: 'expo.out' });
				tempTL.to('.cloned.letter.v', { y: -5, duration: 0.25, ease: 'circ.out' });
				tempTL.to('.cloned.letter.v .ascender.left', { rotation: 0, duration: 0.1, delay: -0.25, ease: 'expo.out' });
				tempTL.to('.cloned.letter.v .ascender.right', { rotation: 0, duration: 0.1, delay: -0.25, ease: 'expo.out' });
				tempTL.to('.cloned.letter.v .ascender.left', { rotation: -65, duration: 0.1, ease: 'expo.out' });
				tempTL.to('.cloned.letter.v .ascender.right', { rotation: 65, duration: 0.1, delay: -0.1, ease: 'expo.out' });
				tempTL.to('.cloned.letter.v', { y: -20, duration: 0.1, delay: -0.1, ease: 'expo.out' });
				tempTL.to('.cloned.letter.v', { y: -15, duration: 0.1, ease: 'circ.out' });
				tempTL.to('.cloned.letter.v .ascender.left', { rotation: -25, duration: 0.1, delay: -0.1, yoyo: true, repeat: 32, ease: 'expo.out' });
				tempTL.to('.cloned.letter.v .ascender.right', { rotation: 25, duration: 0.1, delay: -3.3, yoyo: true, repeat: 32, ease: 'expo.out' });
				tempTL.to('.cloned.letter.v', { y: -55, duration: 1.7, delay: -3.3, ease: 'circ.in' });
				tempTL.to('.cloned.letter.v', { y: -5, duration: 1.7, delay: -1.7, ease: 'circ.in' });
				tempTL.to('.cloned.letter.v .ascender.left', { rotation: -45, duration: 0.25, yoyo: true, repeat: 3, ease: 'expo.out' });
				tempTL.to('.cloned.letter.v .ascender.right', { rotation: 45, duration: 0.25, delay: -1, yoyo: true, repeat: 3, ease: 'expo.out' });
				tempTL.to('.cloned.letter.v', { y: 0, duration: 1, delay: -1, ease: 'circ.out' });
				tempTL.to('.cloned.letter.v .ascender.left', { drawSVG: '100%', rotation: 0, duration: 1, ease: 'expo.out' });
				tempTL.to('.cloned.letter.v .ascender.right', { drawSVG: '100% 0%', rotation: 0, duration: 1, delay: -1, ease: 'expo.out' });
				break;
			}
			
			case 'w' : {
				tempTL.to(letterID + '.letter.w .ascender.left', { rotation: -15, duration: 2, ease: 'elastic.out(1, 0.2)' });
				tempTL.to(letterID + '.letter.w .ascender.right', { rotation: 15, duration: 2, delay: -2, ease: 'elastic.out(1, 0.2)' });
				tempTL.to(letterID + '.letter.w .middle-left', { xPercent: 0, rotation: 0, duration: 0.1, delay: -0.5, ease: 'circ.in' });
				tempTL.to(letterID + '.letter.w .middle-right', { xPercent: 0, rotation: 0, duration: 0.1, delay: -0.5, ease: 'circ.in' });
				tempTL.to(letterID + '.letter.w .ascender.left', { xPercent: 0, duration: 0.1, delay: -0.5, ease: 'circ.in' });
				tempTL.to(letterID + '.letter.w .ascender.right', { xPercent: 0, duration: 0.1, delay: -0.5, ease: 'circ.in' });
				tempTL.to(letterID + '.letter.w .ascender.left', { rotation: 45, duration: 0.5, delay: -0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.w .ascender.right', { rotation: -45, duration: 0.5, delay: -0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.w .ascender.left', { rotation: 0, duration: 2, delay: -0.4, ease: 'elastic.out(1, 0.2)' });
				tempTL.to(letterID + '.letter.w .ascender.right', { rotation: 0, duration: 2, delay: -2, ease: 'elastic.out(1, 0.2)' });
				break;
			}
			
			case 'x' : {
				tempTL.to(letterID + '.letter.x .ascender.to-top-left', { drawSVG: '100% 0%', duration: 0.5, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.x .ascender.to-top-right', { drawSVG: '100% 0%', duration: 0.5, delay: -0.4, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.x .ascender.to-top-left', { rotation: 131, duration: 0.6, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.x .ascender.to-top-right', { rotation: -131, duration: 0.6, delay: -0.6, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.x .ascender.to-top-left', { rotation: 30, duration: 0.4, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.x .ascender.to-top-right', { rotation: -30, duration: 0.4, delay: -0.4, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.x .ascender.to-top-left', { rotation: 131, duration: 0.6, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.x .ascender.to-top-right', { rotation: -131, duration: 0.6, delay: -0.6, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.x .ascender.to-top-left', { rotation: 20, duration: 0.4, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.x .ascender.to-top-right', { rotation: -20, duration: 0.4, delay: -0.4, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.x .ascender.to-top-left', { rotation: 131, duration: 0.6, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.x .ascender.to-top-right', { rotation: -131, duration: 0.6, delay: -0.6, ease: 'expo.in' });
				tempTL.set(letterID + '.letter.x .ascender.to-top-left', { transformOrigin: '0% 0%' });
				tempTL.set(letterID + '.letter.x .ascender.to-top-right', { transformOrigin: '100% 0%' });
				tempTL.to(letterID + '.letter.x .ascender.to-top-left', { xPercent: -155, rotation: -200, duration: 0.4, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.x .ascender.to-top-right', { xPercent: 155, rotation: 200, duration: 0.4, delay: -0.4, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.x .ascender.to-top-left', { rotation: -180, duration: 0.4, ease: 'back.out(2)' });
				tempTL.to(letterID + '.letter.x .ascender.to-top-right', { rotation: 180, duration: 0.4, delay: -0.4, ease: 'back.out(2)' });
				tempTL.to(letterID + '.letter.x .ascender.to-top-left', { yPercent: -30, duration: 0.2, delay: -0.8, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.x .ascender.to-top-right', { yPercent: -30, duration: 0.2, delay: -0.8, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.x .ascender.to-top-left', { yPercent: 0, duration: 0.2, delay: -0.65, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.x .ascender.to-top-right', { yPercent: 0, duration: 0.2, delay: -0.65, ease: 'expo.in' });
				break;
			}
			
			case 'y' : {
				tempTL.to(letterID + '.letter.y .v.left', { drawSVG: '100%', duration: 0.7, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.y .v.right', { drawSVG: '100%', duration: 0.7, delay: -0.7, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.y .v.left', { rotation: -49, duration: 1, delay: -0.6, ease: 'bounce.out' });
				tempTL.to(letterID + '.letter.y .v.right', { rotation: 49, duration: 1, delay: -1, ease: 'bounce.out' });
				tempTL.set(letterID + '.letter.y .v.left', { transformOrigin: '0% 0%' });
				tempTL.set(letterID + '.letter.y .v.right', { transformOrigin: '100% 0%' });
				tempTL.to(letterID + '.letter.y .ascender', { drawSVG: '100%', duration: 0.7, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.y .v.left', { rotation: -78, xPercent: 17, duration: 0.7, delay: -0.7, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.y .v.right', { rotation: 78, xPercent: -17, duration: 0.7, delay: -0.7, ease: 'expo.in' });
				tempTL.set(letterID + '.letter.y .v.left', { transformOrigin: '100% 100%' });
				tempTL.set(letterID + '.letter.y .v.right', { transformOrigin: '0% 100%' });
				tempTL.to(letterID + '.letter.y .v.left', { rotation: 0, xPercent: 13, duration: 2, ease: 'elastic.out(1, 0.3)' });
				tempTL.to(letterID + '.letter.y .v.right', { rotation: 0, xPercent: -13, duration: 2, delay: -2, ease: 'elastic.out(1, 0.3)' });
				break;
			}
			
			case 'z' : {
				tempTL.to(letterID + '.letter.z .ascender', { rotation: 0, duration: 0.8, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.z .bar-top', { motionPath: { path: letterID + '.letter.z .motion-path', align: letterID + '.letter.z .motion-path', alignOrigin: [1, 0], start: 1, end: 0.5 }, duration: 0.8, delay: -0.8, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.z .bar-top', { rotation: -20, duration: 0.6, delay: -0.1, ease: 'expo.out' });
				tempTL.set(letterID + '.letter.z .bar-bottom', { rotation: 75, delay: -0.6 });
				tempTL.to(letterID + '.letter.z', { yPercent: -80, duration: 1, delay: -0.6, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.z .bar-bottom', { rotation: 10, duration: 1, delay: -1, ease: 'elastic.out(1, 0.1)' });
				tempTL.to(letterID + '.letter.z .ascender', { rotation: -15, duration: 0.25, delay: -1, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.z .bar-top', { motionPath: { path: letterID + '.letter.z .motion-path', align: letterID + '.letter.z .motion-path', alignOrigin: [1, 0], start: 0.5, end: 0.35 }, duration: 0.25, delay: -1, ease: 'expo.out' });
				tempTL.to(letterID + '.letter.z', { yPercent: 0, duration: 0.6, delay: -0.4, ease: 'expo.in' });
				tempTL.to(letterID + '.letter.z .bar-top', { rotation: 5, duration: 0.6, delay: -0.2, ease: 'expo.out' });
				tempTL.set(letterID + '.letter.z .bar-bottom', { rotation: 0, delay: -0.6 });
				tempTL.to(letterID + '.letter.z .ascender', { rotation: 25, duration: 0.5, delay: -0.4, ease: 'circ.out' });
				tempTL.to(letterID + '.letter.z .bar-top', { motionPath: { path: letterID + '.letter.z .motion-path', align: letterID + '.letter.z .motion-path', alignOrigin: [1, 0], start: 0.35, end: 0.73 }, duration: 0.5, delay: -0.5, ease: 'circ.out' });
				tempTL.to(letterID + '.letter.z .ascender', { rotation: -10, duration: 0.3, ease: 'circ.out' });
				tempTL.to(letterID + '.letter.z .bar-top', { motionPath: { path: letterID + '.letter.z .motion-path', align: letterID + '.letter.z .motion-path', alignOrigin: [1, 0], start: 0.73, end: 0.4 }, duration: 0.3, delay: -0.3, ease: 'circ.out' });
				tempTL.to(letterID + '.letter.z .ascender', { rotation: 5, duration: 0.2, ease: 'circ.out' });
				tempTL.to(letterID + '.letter.z .bar-top', { motionPath: { path: letterID + '.letter.z .motion-path', align: letterID + '.letter.z .motion-path', alignOrigin: [1, 0], start: 0.4, end: 0.55 }, duration: 0.2, delay: -0.2, ease: 'circ.out' });
				tempTL.to(letterID + '.letter.z .ascender', { rotation: 0, duration: 0.2, ease: 'circ.out' });
				tempTL.to(letterID + '.letter.z .bar-top', { motionPath: { path: letterID + '.letter.z .motion-path', align: letterID + '.letter.z .motion-path', alignOrigin: [1, 0], start: 0.55, end: 0.5 }, duration: 0.2, delay: -0.2, ease: 'circ.out' });
				tempTL.to(letterID + '.letter.z .bar-top', { rotation: 0, duration: 0.5, ease: 'back.out(4)' });
				break;
			}
		}
	}
	
	//	Check the input
	
	$('#getname').on('input paste blur change', '#nameinput', function(e) {
		var field = $(this);
		field.val(field.val().replace(/[^a-zA-Z ]/g, ''));	//	Only allow A-Z because I'm lazy
	});
	
	//	Submit the form
	
	$('#getname').submit(function(e) {
		e.preventDefault();
		theWord = $('#nameinput').val().toLowerCase();
		lettersArray = theWord.split('');
		
		if (!lettersArray.length) {
			alert('Gimme a word!');
			return;
		}
		
		createWord(lettersArray);
	});
	
	//	Create a word!
	
	function createWord(lettersArray) {
		$('.cloned').remove();
		
		var xPos = 0;
		
		var cloneArray = new Array();
		
		$.each(lettersArray, function(index) {
			var letterWidth;
			
			if (lettersArray[index] != ' ') {
				var theLetter = $('.letter:not(.cloned).' + lettersArray[index]).clone().addClass('cloned clone-' + index).attr('id', 'clone-' + index).attr('data-letter', lettersArray[index]).appendTo('.letter-wrapper');
				cloneArray.push(theLetter);
				var letterBounds = getBounds(theLetter);
				letterWidth = letterBounds.width + 14;
        
        if (theLetter.is('[data-spacing]')) {
					letterWidth = letterBounds.width + parseInt(theLetter.attr('data-spacing'));
				}
			} else {
				letterWidth = 20;
			}
			
			console.log(lettersArray[index] + '[' + index + ']: ' + letterWidth);
			
			gsap.set(theLetter, { x: xPos });
			xPos += letterWidth + 4;
		});
		
		console.log(xPos);
		
		initLetters();
		resetLetters();
		
		$.each(cloneArray, function(index) {
			createLetterTimeline(cloneArray[index], index);
		});
	}
		
	//	SVG <g>s are always at 0, 0 and have no dimensions, so this will give us that info
	
	function getBounds(elem) {
		if (elem.find('.motion-path').length) {
			elem.find('.motion-path').css({ 'display': 'none' })
		}
		
		//var bounds = elem.get(0).getBoundingClientRect();
		var bounds = elem.get(0).getBBox();
		
		if (elem.find('.motion-path').length) {
			elem.find('.motion-path').css({ 'display': '' })
		}
		
		if (elem.is('[data-width]')) {
			bounds.width = parseInt(elem.attr('data-width'));
		}
		
		return bounds;
	}
});