$('#registerAccountForm').submit(function(event) {
    event.preventDefault(); // Eviter que le formulaire se soumette
    var formData = $('#registerAccountForm').serialize();
    $.ajax({
        url: 'controller/register.php',
        type : 'POST',
        data: formData
    })
        .done(function(data){
            if(data == "success") {
                $('#Logout #resultArea').html(Flash('success', 'Créer !', 'Votre compte à été créé.'));
            } else if(data == 'alreadyUsed') {
                $('#Logout #resultArea').html(Flash('danger', 'Erreur !', "Pseudo déjà pris"));
            }
            resetForm('#registerAccountForm'); // On vide le formulaire
        })
        .fail(function() {
            $('#Logout #resultArea').html(Flash('danger', 'Erreur !', "Vous n'avez pas de connection internet !"));
        })
        .always(function() {
            removeLoader("#registerAccountSubmit");
        });
});