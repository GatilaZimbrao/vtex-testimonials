# Vtex Testimonials

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Vtex](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-vtex-io-cli-install).

### Rodando o Sistema 😎

```bash

# Primeiramente clone este repositório

git clone <https://github.com/GatilaZimbrao/vtex-testimonials>

# Acesse a pasta do projeto no terminal/cmd

cd vtex-testimonials

# Abrir o projeto no Visual Studio Code

code .

# Agora já no projeto você verá 2 pastas,

# uma responsável pela criação do bloco customizado e outra pela storefront aonde o bloco será chamado, na home

# será necessário instalar as depências e rodar cada uma

# vamos começar pelo custom-apps:

# No terminal e execute:

cd custom-apps

# Instale as dependências

yarn

# Agora acesse o manifest.json e altere o nome do vendor para o nome do seu ambiente vtex.

# Inicia a aplicação

vtex link

# agora será necessário abrir um novo terminal

# e rodar os seguintes comandos:

cd storefront

# Instale as dependências

yarn

# Agora acesse o manifest.json e altere o nome do vendor para o nome do seu ambiente vtex.
# e na lista de dependencia altere o nome de "vendor.custom-apps": "1.x"
# para o nome do seu ambiente seguido do: .custom-apps": "1.x"

# Inicia a aplicação

vtex link

# Agora acesse o link gerado no terminal
```

### Tecnologias 💻

As seguintes ferramentas foram usadas na construção do projeto:

- [Vtex](https://developers.vtex.com/)

- [React](https://pt-br.reactjs.org/)

- [TypeScript](https://www.typescriptlang.org/)

### Autor

---

<a href="https://github.com/GatilaZimbrao">
    <img src="https://avatars.githubusercontent.com/u/61389317?v=4" width="100px;" alt="GitHubImage" style="border-radius: 50%;"/>
</a>

### Gabriel Zimbrão 👨‍💻

[![GitHub Badge](https://img.shields.io/badge/-GatilaZimbrao-lightgrey?style=flat-square&logo=github&logoColor=white&link=https://github.com/GatilaZimbrao/)](https://github.com/GatilaZimbrao)

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-%C3%A1tila-zimbr%C3%A3o-a642831a5/)](https://www.linkedin.com/in/gabriel-%C3%A1tila-zimbr%C3%A3o-a642831a5/)
