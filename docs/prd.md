## 🎬 1. Visão Geral e Objetivo

O Movio é uma aplicação web que permite aos usuários explorar um catálogo de filmes, visualizar informações sobre diferentes títulos e gerenciar uma lista de filmes favoritos.

O sistema utiliza a TMDb API para obter dados atualizados sobre filmes, como título, sinopse, avaliação e imagens. Além disso, permite que usuários criem uma conta e salvem seus filmes preferidos, proporcionando uma experiência personalizada de navegação e descoberta de conteúdos.

---

## 👥 2. Atores do Sistema

**Visitante:** Usuário não autenticado que acessa o site e pode visualizar filmes e realizar buscas.

**Usuário:** Usuário autenticado que pode salvar filmes na sua lista de favoritos.

**Sistema:** Responsável por consumir a API de filmes, exibir os dados na interface e gerenciar as informações dos usuários por meio de JSON/API fake.

---

## 🎬 3. Histórias de Usuário e Escopo

### 👤 Épico 1: Conta

**US01 - Cadastro**  
Como um visitante, quero me cadastrar com nome, e-mail e senha para criar uma conta.

**US02 - Login**  
Como um usuário, quero fazer login com e-mail e senha para acessar o sistema.

---

### 🎬 Épico 2: Filmes

**US03 - Ver filmes**  
Como um usuário, quero visualizar filmes para descobrir novos títulos.

**US04 - Buscar filmes**  
Como um usuário, quero pesquisar filmes pelo nome.

**US05 - Ver detalhes**  
Como um usuário, quero ver informações de um filme ao clicar nele.

---

### ⭐ Épico 3: Favoritos

**US06 - Adicionar favorito**  
Como um usuário, quero salvar filmes para ver depois.

**US07 - Ver favoritos**  
Como um usuário, quero visualizar meus filmes salvos.

**US08 - Remover favorito**  
Como um usuário, quero remover filmes da minha lista.
