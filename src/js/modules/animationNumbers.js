function animationNumbers(arrObjects) {
	arrObjects.forEach(({ selectorNum, speedAmimation = 5, startNum, endNum, step = 1 }) => {
		let number = document.querySelector(selectorNum);
		onScroll();
		window.addEventListener('scroll', onScroll);
		function onScroll() {
			if (isElementInViewport(number)) {
				window.removeEventListener('scroll', onScroll);
				let interval = setInterval(() => {
					if (startNum <= endNum) {
						number.textContent = startNum;
						startNum += step;
					} else {
						clearInterval(interval);
					}
				}, speedAmimation);
			}
		}
	});
}

function isElementInViewport(el) {
	let top = el.offsetTop,
		left = el.offsetLeft,
		width = el.offsetWidth,
		height = el.offsetHeight;

	while (el.offsetParent) {
		el = el.offsetParent;
		top += el.offsetTop;
		left += el.offsetLeft;
	}

	return (
		top < (window.pageYOffset + window.innerHeight) &&
		left < (window.pageXOffset + window.innerWidth) &&
		(top + height) > window.pageYOffset &&
		(left + width) > window.pageXOffset
	);
}

export default animationNumbers;