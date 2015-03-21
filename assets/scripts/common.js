import 'browsernizr/test/touchevents';
import modernizr from 'browsernizr';
import domready from 'domready';
import fastclick from 'fastclick';
import document from 'global/document';

domready(addFastClick);
domready(checkIfTouch);

function addFastClick() {
  if('addEventListener' in document) {
    fastclick.attach(document.body);
  }
}

function checkIfTouch() {
  document.body.className = modernizr.touchevents ? 'touch' : 'no-touch';
}
