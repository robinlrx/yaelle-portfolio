
import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const ReactLightbox = ({poster, sources, thumbnails}) => {

	const [open, setOpen] = useState(false);

	return (
		<>
			<img src={poster} width={"80%"} alt="" onClick={() => setOpen(true)} style={{cursor: 'pointer', marginBottom: '20px'}} />
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={sources}
				plugins={thumbnails == true ? [Thumbnails, Zoom] : [Zoom]}
			/>

		</>
	);
};

export default ReactLightbox;