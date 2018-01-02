import _ from 'lodash';
import markdownFile from './src/portfolio/test.md';
import marked from 'marked';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = marked(markdownFile);

    return element;
}

document.body.appendChild(component());