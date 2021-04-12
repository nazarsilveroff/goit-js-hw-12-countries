import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';


export default {
  tooManyMatches() {
    error({
      text: 'Too many matches found! Please enter a more spesific query!',
    });
  },
  badRequest() {
    error({
      text: 'oh crap something went wrong! You entered the wrong country! Or remove your CAT from the keyboard'
    });
  },
  
};
