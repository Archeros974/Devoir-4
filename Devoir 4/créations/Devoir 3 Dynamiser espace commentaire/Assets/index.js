

// document.addEventListener("DOMContentLoaded", function() { 

    const form = document.querySelector("form");
    const commentList = document.getElementById("comment-list");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Récupérer les valeurs du formulaire
      const firstName = form.querySelector("#first-name").value;
      const lastName = form.querySelector("#last-name").value;
      const message = form.querySelector("#message").value;
  
      // Créer un nouveau commentaire
      const newComment = document.createElement("div");
      newComment.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");
      newComment.innerHTML = `
        <div class="flex-1 py-10 border-t border-gray-200">
          <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
          <div class="prose prose-sm mt-4 max-w-none text-gray-500">
            <p>${message}</p>
          </div>
        </div>
      `;
  
      // Ajouter le nouveau commentaire à la liste
      commentList.appendChild(newComment);
  
      // Effacer les champs du formulaire
      form.reset();
    });
  // }); 