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


const gitImagens = document.querySelectorAll(".githubImagens");
const githubLogoBranco = "imagens/github-white-icon.png";
const githubLogoPreto = "imagens/github_icon.png";

const imagem_formacao = document.querySelector("#imagem_formacao");
const imagem_form_branco_url = "imagens/outros/formacao_fundo_branco.png";
const imagem_form_preto_url = "imagens/outros/formacao.png";

const imagem_email = document.querySelector("#email_icone");
const imagem_email_branco = "imagens/email_branco.png";
const imagem_email_preto = "imagens/email_icon.png";

let darkTheme = false;

const trocarCor = () => {
    const body = document.querySelector(".body");

    if (!darkTheme) {
        body.classList.add("dark_theme");

        gitImagens.forEach((img) => {
            img.src = githubLogoBranco;
        })

        imagem_formacao.src = imagem_form_branco_url;
        imagem_email.src = imagem_email_branco;
        darkTheme = true;
        return null;
    }

    body.classList.remove("dark_theme");

    gitImagens.forEach((img) => {
        img.src = githubLogoPreto;
    })

    imagem_formacao.src = imagem_form_preto_url;
    imagem_email.src = imagem_email_preto;
    darkTheme = false;
}