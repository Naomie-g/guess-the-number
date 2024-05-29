window.addEventListener('DOMContentLoaded', function () {
    console.log('coucou');

    // Je déclare une variable pour compter les essaie de l'utilisateur et une variable pour le chiffre a deviner

    let nombreAleatoire;
    let essais;

    // Récupération du meilleur score depuis le stockage local
    const meilleurScore = localStorage.getItem('meilleurScore');

    // Affichage du meilleur score s'il existe
    if (meilleurScore !== null) {
        document.getElementById("score").textContent = "Votre meilleur score est de " + meilleurScore + " tours";
    } else {
        document.getElementById("score").textContent = "Aucun score enregistré";
    }

    

    // Puis j'attribut une valeurs a mes variables dans une fonction startGame

    function startGame() {
        nombreAleatoire = Math.floor(Math.random() * 100);       // Math.random() génère un nombre aléatoire entre 0 et 1 ; * 100 on multiplie ce nombre par 100 ; 
        // Math.floor() enleve les chiffres après la virgule pour faire un nombre entier

        essais = 1

        // charger le meilleur score precedent et si il existe l'afficher
        const miseAJourScore = localStorage.getItem('meilleur score')
        if (miseAJourScore != null) {
            document.getElementById("score")
                .textContent = miseAJourScore

        }

        // Je rajoute ici un console.log() qui permet d'afficher le nombre qui a été tiré au hasard
        console.log('Le nombre à deviner est :' + nombreAleatoire);

    }
    startGame();

    // Je déclare une variable form et j'écoute l'élement submit de "guess_form" et je recupere l'evenement "submit"(Valider) dans le DOM 

    const form = document.getElementById("guess_form")
    form.addEventListener('submit', submitForm);

    // Je declare un fonction qui s'éxécutera quand l'évenement est émis, j'enleve le rechargement de la page par defaut du formulaire 

    function submitForm(event) {
        event.preventDefault();
        console.log('soumission du formulaire')



        // ici recuperer un element dans le html grace a son id 
        const messageElement = document.getElementById("message")


        // Je déclare une variable qui recupère le nombre que l'utilisateur aura entré dans le champs input et compare les nombres
        const value = form.guess.value
        console.log(form.guess.value);


        if (nombreAleatoire == value) {


            //dans cet element remplacer le texte par "Bravo, vous avez trouvé le nombre mystère en " "
            messageElement.textContent = ("Bravo, vous avez trouvé le nombre mystère en " + essais + " essais")
            // recuperer le nombre de tours sauvés precedemmment 
            const meilleurScorePrecedent = localStorage.getItem('meilleur score')
            console.log(meilleurScorePrecedent)
            if (meilleurScorePrecedent === null || essais < meilleurScorePrecedent) {
                localStorage.setItem('meilleur score', essais)
                document.getElementById("score")
                    .textContent = essais
            }



            // enregistrer dans le local storage le nombre de tours actuel

            //si la partie est terminée, rappeler la fonction startGame() 
            startGame()
        }

        else if (nombreAleatoire > value) {
            messageElement.textContent = ("Tours " + essais + " C'est plus !")

            essais++
        }
        else if (nombreAleatoire < value) {
            messageElement.textContent = ("Tours " + essais + " C'est moins !")

            essais++

        }





    }






});


