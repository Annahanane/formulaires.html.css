
 //Ajoutez une validation de saisie à chaque champ en utilisant des expressions régulières (regex) pour vérifier que les données saisies sont valides.
 // Par exemple, vérifiez que l'adresse électronique contient un "@" et un ".".
 //Ajoutez des messages d'erreur pour chaque champ qui s'affichent lorsque la validation échoue. Utilisez CSS pour styliser ces messages d'erreur.
 //Ajoutez une fonction JavaScript pour envoyer les données du formulaire lorsque tous les champs sont valides. 
 //Utilisez la fonction console.log() pour afficher les données dans la console du navigateur.
 //Ajoutez un bouton de soumission de formulaire et une fonction JavaScript pour empêcher l'envoi des données tant que tous les champs ne sont pas valides.
 //Ajoutez une fonction javascript pour effacer les champs du formulaire après l'envoi.
 //Ajoutez un bouton de reset pour effacer les champs du formulaire.const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    let error = false;

    const errors = {
        firstName: document.getElementById('firstNameError'),
        lastName: document.getElementById('lastNameError'),
        email: document.getElementById('emailError'),
        phone: document.getElementById('phoneError'),
        password: document.getElementById('passwordError')
    }

    const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    const nameRegex = /^[a-zA-Z ]+$/;
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;


    formData.forEach((valeurDuChamp, nomDuChamp) => {
        if (!valeurDuChamp) {
            error = true;
            errors[nomDuChamp].style.display = 'block';
        } else {

            if ((nomDuChamp ==='firstName' || nomDuChamp ==='lastName') && !nameRegex.test(valeurDuChamp)) {
                error = true;
                return errors[nomDuChamp].style.display = 'block';
            } else if (nomDuChamp ==='email' && !emailRegex.test(valeurDuChamp)) {
                error = true;
                return errors[nomDuChamp].style.display = 'block';
            } else if (nomDuChamp === 'phone' && !phoneRegex.test(valeurDuChamp)) {
                error = true;
                return errors[nomDuChamp].style.display = 'block';
            } else if (nomDuChamp === 'password' && valeurDuChamp.length < 8) {
                error = true;
                return errors[nomDuChamp].style.display = 'block';
            }

            error = false;
            errors[nomDuChamp].style.display = 'none';
        }
    });

    if (!error) {
        console.log(formData)
        contactForm.reset();
    }
});