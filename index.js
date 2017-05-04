// React Document
const { createElement } = React
const { render } = ReactDOM


const title = createElement(
	'h1',
	{id: 'title', className: 'header'},
	'THE SOLAR SYSTEM'
)

render(
	title,
	document.getElementById('react-container')
)