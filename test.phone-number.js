function phoneMask() { 
    var num = $(this).val().replace(/\D/g,''); 
    $(this).val('(' + num.substring(0,3) + ')' + num.substring(3,6) + '-' + num.substring(6,10)); 
}
$('[type="tel"]').keyup(phoneMask);