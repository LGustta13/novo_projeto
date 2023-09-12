<h1 align="center"> Shorts Summary </h1>

<p align="center">
Aplicação que resume e cria descrições de vídeos do Youtube. <br/>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-anotações">Anotações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<br>

<p align="center">
  <img alt="imagem representando um preview do projeto" src="./public/preview.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML e CSS
- JavaScript
- Git e Github
- Transformers.js
- NodeJS

## 💻 Projeto

O Shorts é uma aplicação web que permite ao usuário realizar pequenos resumos ou descrições sobre vídeos shorts que podem ser encontrados no Youtube.

- [Acesse o projeto finalizado, online](#)

## 🔖 Layout

Acesse o Layout do projeto [aqui](<https://www.figma.com/file/8goMDWHGJOed9hFbnzbviG/Shorts-Summary-%E2%80%A2-Trilha-Foundations-(Community)?type=design&mode=design&t=S3MO19etkC8MjD4T-1>)

Acesse o Notion com informações da aplicação [aqui](https://efficient-sloth-d85.notion.site/NLW-13-IA-dc54c0a8b5c04d8198cef71627852d73)

## 📋 Anotações

### Tópicos

<ul>
<li><a href="#-conteudo">Conteúdo</a></li>
<li><a href="#-vite">Vite</a></li>
<li><a href="#-deploy">Deploy</a></li>
<li><a href="#-backend">Backend</a></li>
</ul>

### Conteúdo

- web: pasta no qual se encontra a aplicação FrontEnd
- server: pasta que se encontra os serviços do BackEnd
- tmp: pasta temporária com o vídeo até a aplicação fazer a descrição

### Vite

Utilizado para criar o Front-end. Com o borderplate do Vite, é possível utilizar um template de projeto para inicializar o desenvolvimento. A princípio pede-se:

- Nome do projeto;
- Framework: Vanilla;
- Variant: JavaScript;

```Javascript
npm create vite@latest
npm install
npm run web
```

### Deploy

Para o Deploy da aplicação foi utilizado o Github Actions. Dessa forma, o arquivo de configuração se encontra na pasta .github, segundo a documentação do site [ViteJS](https://vitejs.dev/guide/static-deploy.html)

### Backend

Utilização do NodeJS para a criação do serviço web. Permitir a execução do JavaScript fora do navegador (quando inicia o servidor, as rotas criadas entendem o código JavaScript, resultando em um serviço)

```
GET https://localhost:3333/summary/7
<method> <protocol>://<address>:<port>/<resource>/<route params>
```

```
npm install express cors axios ytdl-core@4.10.0
```

A **ytdl** possibilita baixar vídeos do Youtube
O **cors** possibilita que qualquer ou alguma origem específica consiga requisitar nas rotas do BackEnd
O **express** é utilizado para criar as rotas das APIs
O **axios** é utilizado para buscar uma rota, tanto no FrontEnd quanto no BackEnd

Para ficar observando as mudanças no servidor (não precisa reiniciar com mudanças no código)

```
 node --watch ./index.js  <!--versão >18.11-->
```

---
