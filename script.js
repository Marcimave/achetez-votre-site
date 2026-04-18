const form = document.getElementById("formulaire");
const confirmation = document.getElementById("confirmation");

const nomInput = document.getElementById("nom");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

let offreChoisie = null;

// FORMULAIRE
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nom = nomInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!nom || !email || !message) {
    confirmation.textContent = "Veuillez remplir tous les champs.";
    confirmation.style.color = "red";
    return;
  }

  confirmation.textContent = "Message envoyé avec succès !";
  confirmation.style.color = "green";

  form.reset();
});

// CHOIX OFFRE
function choisirOffre(nom, prix, element) {
  offreChoisie = { nom, prix };

  // effet visuel
  document.querySelectorAll(".carte").forEach(c => c.classList.remove("active"));
  element.parentElement.classList.add("active");

  // sauvegarde
  localStorage.setItem("offre", JSON.stringify(offreChoisie));

  document.getElementById("selection").textContent =
    `Offre sélectionnée : ${nom} - ${prix}€`;
}

// COMMANDER
function commander() {
  if (!offreChoisie) {
    alert("Veuillez choisir une offre !");
    return;
  }

  alert(`Commande confirmée : ${offreChoisie.nom} - ${offreChoisie.prix}€`);
}

// CHARGEMENT PAGE
window.onload = function() {
  const saved = localStorage.getItem("offre");

  if (saved) {
    offreChoisie = JSON.parse(saved);

    element.parentElement.querySelector(".selection").textContent =
  `Offre sélectionnée : ${nom} - ${prix}€`;
};
