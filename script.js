
  AOS.init();


  const btn = document.getElementById('button');
  const user_name = document.getElementById('from_name');
  const email = document.getElementById('email_id');
  const message = document.getElementById('message');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   message.value = '';
   email.value = '';
   user_name.value = '';

   const serviceID = 'default_service';
   const templateID = 'template_mxte8pe';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});