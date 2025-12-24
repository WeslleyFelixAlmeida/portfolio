const observer = new IntersectionObserver((elementos) => {
    elementos.forEach((elemento) => {
        if (elemento.isIntersecting) {
            const elementoId = elemento.target.id;
            elemento.target.classList.add("mostrar");

            adicionandoBordaNavItens(elementoId);
        } else {
            elemento.target.classList.remove("mostrar");
        }
    });
}, {
    root: null,
    rootMargin: "-45% 0px -40% 0px",
    threshold: 0
});

const todoElements = document.querySelectorAll(".breakpoints");

todoElements.forEach((elemento) => observer.observe(elemento));

const navLinks = document.querySelectorAll(".navLinks");

const adicionandoBordaNavItens = (elementoId) => {
    const adicionarBorda = (item) => {
        navLinks.forEach((link) => {
            link.classList.remove("link_selecionado");
        });

        navLinks[item].classList.add("link_selecionado");
    }
    switch (elementoId) {
        case "titulo_principal":
            adicionarBorda(0);
            break;
        case "projetos":
            adicionarBorda(1);
            break;
        case "contatos":
            adicionarBorda(2);
            break;
        case "formacao":
            adicionarBorda(3);
            break;
    }
}

const navegar = (projeto) => {
    let url = "";
    switch (projeto) {
        case "stockhub":
            url = "https://github.com/WeslleyFelixAlmeida/Controle_de_estoque";
            break;
        case "tasklist":
            url = "https://github.com/WeslleyFelixAlmeida/TaskList";
            break;
        case "schedule":
            url = "https://github.com/WeslleyFelixAlmeida/Schedule";
            break;
        default:
            url = "https://github.com/WeslleyFelixAlmeida";
            break;
    }

    window.open(url, "_blank");
}