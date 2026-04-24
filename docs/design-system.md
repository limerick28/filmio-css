# 🎨 Design System - Filmio

Neste projeto, utilizamos um framework UI e aplicamos customizações para refletir a identidade visual de uma plataforma de catálogo de filmes.

---

### 1. Framework Base

- **Framework escolhido:** Bootstrap  
- **Motivação:** Permite desenvolvimento rápido com componentes prontos, facilitando a criação de layouts responsivos e consistentes.

---

### 2. Paleta de Cores (Customização)

As cores foram definidas para criar uma identidade moderna e imersiva, inspirada em plataformas de streaming.

- **Cor Primária (Destaque):** `#ffb5a0`  
  _Uso:_ Botões principais, ações do usuário (login, favoritar) e elementos interativos.

- **Cor Secundária (Base):** `#191c1f`  
  _Uso:_ Navbar, cards e superfícies da interface.

- **Cor de Fundo (Background):** `#111417`  
  _Uso:_ Fundo geral da aplicação.

- **Cor de Sucesso:** `#d43800`  
  _Uso:_ Feedback visual de ações concluídas (ex: filme adicionado aos favoritos).

- **Cor de Texto Principal:** `#e1e2e7`  
  _Uso:_ Textos em geral, garantindo legibilidade sobre fundos escuros.

---

### 3. Tipografia

Importada via Google Fonts para criar uma identidade moderna e legível:

- **Títulos e Destaques:** `Epilogue, sans-serif` (Peso: 600 ou 700)  
- **Textos gerais:** `Inter, sans-serif` (Peso: 400)

---

### 4. Diretrizes de Uso de Componentes

Regras para uso dos componentes dentro da interface do Filmio:

- **Navbar:**  
  Deve conter o nome/logo do sistema, campo de busca e acesso ao login ou perfil do usuário.

- **Cards de Filme:**  
  Utilizados para exibir os filmes com imagem, título e avaliação.  
  Devem usar a cor de superfície (`#191c1f`) e ter efeito hover para indicar interatividade.

- **Botões (`.btn`):**  
  - Ações principais utilizam a cor primária (`#ffb5a0`)  
  - Ações secundárias utilizam estilo outline ou cores neutras  

- **Formulários (`input`, `form`):**  
  Inputs centralizados, com foco em simplicidade e validação visual clara para login e cadastro.

- **Imagens:**  
  Posters de filmes devem manter proporção usando `object-fit: cover`, garantindo consistência visual.

---

### 5. Experiência do Usuário

O foco da interface é proporcionar uma navegação simples, intuitiva e visualmente agradável, facilitando a descoberta de filmes e o gerenciamento da lista de favoritos.

A aplicação prioriza:
- Clareza na exibição das informações  
- Facilidade de navegação  
- Feedback visual nas ações do usuário  