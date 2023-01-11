
import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ReactLightbox = ({poster, sources}) => {

	const [open, setOpen] = useState(false);

	return (
		<>
			<img src={poster} width={"80%"} alt="" onClick={() => setOpen(true)} style={{cursor: 'pointer', marginBottom: '20px'}} />
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={[
				// { src: "/image1.jpg" },
				// { src: "/image2.jpg" },
				// { src: "/image3.jpg" },
				sources
				]}
			/>

		</>
	);
};

export default ReactLightbox;