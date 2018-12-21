$( function() {
  /* Модальное окно, взятое из JQuery UI*/
  $( "#dialog-confirm" ).dialog({
    title: false,
    modal: true,
    width: 600,
    height: 500,
    autoOpen: false,
    draggable: false,
    resizable: false,
    buttons: {
      Cancel: function() {
        $( this ).dialog( "close" );
      }
    },
    hide: { 
      effect: "fade", 
      duration: 300 
    },
    show: { 
      effect: "fade", 
      duration: 300 
    }
  });
  openModal()
} );

