import domready from 'domready';
import fastclick from 'fastclick';
import document from 'global/document';

domready(addFastClick);

function addFastClick() {
  if('addEventListener' in document) {
    fastclick.attach(document.body);
  }
}
