'use strict';

const App = () => {
	const [showBanner, setShowBanner] = React.useState(false);

	React.useEffect(() => {
		document.addEventListener('scroll', trackScrolling);

		return () => {
			document.removeEventListener('scroll', trackScrolling);
		};
	}, []);

	const isBottom = (el) => {
		return el.getBoundingClientRect().bottom <= window.innerHeight;
	};

	const trackScrolling = () => {
		const wrappedElement = document.getElementById('education');
		if (isBottom(wrappedElement)) {
			setShowBanner(true);
			document.removeEventListener('scroll', trackScrolling);
		}
	};

	const smoothScroll = (anchor, duration) => {
		// Calculate how far and how fast to scroll
		const startLocation = window.pageYOffset;
		const endLocation = anchor.offsetTop - 40; // Remove 40 pixels for padding
		const distance = endLocation - startLocation;
		const increments = distance / (duration / 16);

		const stopAnimation = function () {
			const travelled = window.pageYOffset;
			if (
				travelled >= endLocation - increments ||
				window.innerHeight + travelled >= document.body.offsetHeight
			) {
				clearInterval(runAnimation);
			}
		};

		// Scroll the page by an increment, and check if it's time to stop
		const animateScroll = function () {
			window.scrollBy(0, increments);
			stopAnimation();
		};

		// If scrolling down
		if (increments >= 0) {
			// Stop animation when you reach the anchor OR the bottom of the page
			stopAnimation();
		}

		// Loop the animation function
		const runAnimation = setInterval(animateScroll, 16);
	};

	const handleClick = () => {
		const anchor = document.querySelector('.auth');
		smoothScroll(anchor, 700);
		setShowBanner(false);
	};

	return (
		<React.Fragment>
			<button
				class='button ctn'
				onClick={() => {
					setShowBanner(true);
				}}
			>
				know more
			</button>

			{showBanner && (
				<div id='myModal' class='react-modal'>
					<div class='react-modal-content'>
						<img src='../images/internship.jpg' />
						<button
							class='button ctn react-close'
							onClick={handleClick}
						>
							know more
						</button>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

const domContainer = document.querySelector('#react-root');
ReactDOM.render(<App />, domContainer);
