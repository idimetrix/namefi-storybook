import { Button } from '../lib/components';
import iPhoneMaskSVG from '../lib/assets/iPhoneMask.svg?raw';
import { default as Done, ReactComponent as DoneIcon } from '../lib/assets/Done.svg';
// import { default as Done2Icon } from '../lib/assets/Done.svg?react';
import image from '../lib/assets/purple-cat.png';

import './index.css';

function App() {
	return (
		<h1>
			Vite is amazing!{' '}
			<Button
				onClick={() => {
					console.log({
						iPhoneMaskSVG,
						Done,
						DoneIcon,
						// Done2Icon,
						image,
					});
				}}>
				TestingApp 2 <img src={Done} />
			</Button>
		</h1>
	);
}

export default App;
