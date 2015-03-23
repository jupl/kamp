import 'browsernizr/test/touchevents';
import modernizr from 'browsernizr';
import fastclick from 'fastclick';
import document from 'global/document';

addFastClick();

function addFastClick() {
  if('addEventListener' in document) {
    fastclick.attach(document.body);
  }
}
