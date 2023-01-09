import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const Pdf = ({file}) => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	return (
		<div>
			<Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} />
			</Document>
		</div>
	);
};

export default Pdf;