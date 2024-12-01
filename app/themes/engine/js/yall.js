import yall from 'yall-js';

yall({
    observeChanges: true,
    events: {      
      load: function load(event) {        
        if (!event.target.classList.contains("lazy") && event.target.nodeName === "IMG") {
          event.target.classList.add("yall-loaded");
        }
      }
    }
});  