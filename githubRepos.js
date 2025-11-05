const container = document.getElementById("repo-container");

fetch('https://api.github.com/users/marupx/repos')
    .then((response) => {
        if(!response.ok) {
            throw new Error("Fehler beim Abruf der Repositorys");
        }
        return response.json();
    })
    .then((repos) => {
        if(repos.lenght === 0) {
            container.innerHTML = "<p>Keine Repositorys gefunden.</p>";
            return;
        }


        repos.forEach((repo) => {
            const card = document.createElement("div");
            card.className = "repo-card";

            card.innerHTML = `
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                <p>${repo.description || "Keine Beschreibung verfügbar."}</p>
                <p>Language: ${repo.language}</p>
                `;

            container.appendChild(card);
        });
    });
