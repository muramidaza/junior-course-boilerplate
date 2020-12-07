import React from 'react';

export default function RatingComponent({ isFilled }) {
	const icon = isFilled ? '★' : '☆';
	const className = `starElem-${isFilled ? 'fill' : 'empty'}`;
	return <span className={className}>{icon}</span>;
}
