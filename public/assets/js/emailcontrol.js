function alertMessage() {
   var from_form = $('#name').val();
   var phone = $('#phone').val();
   var from_email = $('#email').val();
  // var companyToSend = $('#comp').val();
   var message = $('#msg').val();

 emailjs.send("elaynnegmail", "template_mAvQvh7h", {
   "phone":phone,
   "to_name":"Elaynne",
   "email":from_email,
   "message_html":message,
   "reply_to":"elaynne.torres@gmail.com",
   "from_name":from_form

 });
//Clear form
alert('Thank you for your contact!');
   $('#name').val('');
   $('#phone').val('');
   $('#email').val('');
  //$('#comp').val('');
   $('#msg').val('');
 }
