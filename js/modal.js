$( function() {
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

const openModal = () =>{
  $( "#tabs img" ).on( "click", function(e) {
    $( "#dialog-confirm" ).html('<div><img alt=""></div>')
    $( "#dialog-confirm" ).dialog( "open" )
    $( "#dialog-confirm" ).find('img').attr('src', e.target.src)
    $(".ui-widget-overlay").on('click', function(){
        $( "#dialog-confirm" ).dialog( "close" );
    })
  });
}