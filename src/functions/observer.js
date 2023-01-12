export const showElements = () => {

	const ratio = 0.1; // 10%
	const options = {
		root: null,
		rootMargin: "0px",
		threshold: .1
	};

	const callback = function (entries, observe) {
		entries.forEach(function (entrie) {
			entrie.intersectionRatio > ratio && (entrie.target.classList.add("reveal-visible"), observe.unobserve(entrie.target))
		})
	};

	const observer = new IntersectionObserver(callback, options);
	const items = document.querySelectorAll('[class*="reveal-"]')
	items.forEach(function (item) {
		observer.observe(item)
	});

}