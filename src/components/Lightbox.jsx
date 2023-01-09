
import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

const Lightbox = ({poster}) => {

	const [toggler, setToggler] = useState(false);

	return (
		<>
			<img src={poster} width={"80%"} alt=""onClick={() => setToggler(!toggler)} style={{cursor: 'pointer', marginBottom: '20px'}} />
			<FsLightbox
				toggler={toggler}
				sources={[
					poster
				]}
			/>

		</>
	);
};

export default Lightbox;