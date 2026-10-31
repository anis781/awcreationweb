/* Seul script du site : message du formulaire de démonstration (page contact). */
(function(){
  var f=document.getElementById('contact-form');if(!f)return;
  f.addEventListener('submit',function(e){
    e.preventDefault();
    if(!f.checkValidity()){f.reportValidity();return;}
    var m=document.getElementById('form-msg');
    m.textContent="Merci ! Ce formulaire n'est pas encore relié à une adresse de réception [à compléter]. En attendant, écrivez à anis.creation.sites@gmail.com.";
    m.focus();
  });
})();
