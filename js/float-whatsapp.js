$(function myFunction() {
    $('#WAButton').floatingWhatsApp({
      phone: '1231231231', //WhatsApp Business phone number International format-
      headerTitle: 'Chat with us on WhatsApp!', //Popup Title
      popupMessage: 'Hello, how can we help you?', //Popup Message
      showPopup: true, //Enables popup display
      showOnIE: false,
      buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
      position: "right"    
    });
  });
  