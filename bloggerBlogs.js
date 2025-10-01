const container = document.getElementById("blogger-container");

fetch('https://www.googleapis.com/blogger/v3/blogs/4308986526090368466/posts?key=AIzaSyB_d5lamWcL1IqpS6910sEr907guVILEJ0')
    .then((response) => {
        if(!response.ok) {
            throw new Error("Fehler beim Abruf der Bloginhalte")
        }
        return response.json();
    })
    .then((data) => {
        if(data.items.length === 0) {
            container.innerHTML = "<p>Keine Bloginhalte gefunden.</p>"
            return;
        }
    
        data.items.forEach((post) => {
            const card = document.createElement("div");
            card.className = "blogger-card";

            card.innerHTML = `
                <a href="'${post.url}'" target="_blank">${post.title}</a>
                <p>${new Date(post.published).toLocaleDateString()}</p>
                <div>${post.content}</div>
                `;

            container.appendChild(card);

        });
    })
        .catch((error) => {
        console.error('Fehler:', error);
        container.innerHTML = "<p>Fehler beim Laden der Blogbeiträge.</p>";
    });