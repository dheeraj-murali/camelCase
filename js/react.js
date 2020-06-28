'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var App = function App() {
	var _React$useState = React.useState(false),
	    _React$useState2 = _slicedToArray(_React$useState, 2),
	    showBanner = _React$useState2[0],
	    setShowBanner = _React$useState2[1];

	React.useEffect(function () {
		document.addEventListener('scroll', trackScrolling);

		return function () {
			document.removeEventListener('scroll', trackScrolling);
		};
	}, []);

	var isBottom = function isBottom(el) {
		return el.getBoundingClientRect().bottom <= window.innerHeight;
	};

	var trackScrolling = function trackScrolling() {
		var wrappedElement = document.getElementById('education');
		if (isBottom(wrappedElement)) {
			setShowBanner(true);
			document.removeEventListener('scroll', trackScrolling);
		}
	};

	var smoothScroll = function smoothScroll(anchor, duration) {
		// Calculate how far and how fast to scroll
		var startLocation = window.pageYOffset;
		var endLocation = anchor.offsetTop - 40; // Remove 40 pixels for padding
		var distance = endLocation - startLocation;
		var increments = distance / (duration / 16);

		var stopAnimation = function stopAnimation() {
			var travelled = window.pageYOffset;
			if (travelled >= endLocation - increments || window.innerHeight + travelled >= document.body.offsetHeight) {
				clearInterval(runAnimation);
			}
		};

		// Scroll the page by an increment, and check if it's time to stop
		var animateScroll = function animateScroll() {
			window.scrollBy(0, increments);
			stopAnimation();
		};

		// If scrolling down
		if (increments >= 0) {
			// Stop animation when you reach the anchor OR the bottom of the page
			stopAnimation();
		}

		// Loop the animation function
		var runAnimation = setInterval(animateScroll, 16);
	};

	var handleClick = function handleClick() {
		var anchor = document.querySelector('.auth');
		smoothScroll(anchor, 700);
		setShowBanner(false);
	};

	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			'button',
			{
				'class': 'button ctn',
				onClick: function onClick() {
					setShowBanner(true);
				}
			},
			'know more'
		),
		showBanner && React.createElement(
			'div',
			{ id: 'myModal', 'class': 'react-modal' },
			React.createElement(
				'div',
				{ 'class': 'react-modal-content' },
				React.createElement('img', { src: '../images/internship.jpg' }),
				React.createElement(
					'button',
					{
						'class': 'react-scoll-button',
						onClick: handleClick
					},
					'know more'
				),
				React.createElement(
					'button',
					{
						'class': 'button react-close',
						onClick: function onClick() {
							return setShowBanner(false);
						}
					},
					'I\'m not intrested'
				)
			)
		)
	);
};

var domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(App, null), domContainer);