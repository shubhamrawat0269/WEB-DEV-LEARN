const mainContainer = document.querySelector('#main');
const para = React.createElement('p', {className:'para', title: 'para-content'}, 'This is my first React para element');

const root = ReactDOM.createRoot(mainContainer);

root.render(para)