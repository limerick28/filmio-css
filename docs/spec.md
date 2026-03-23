# 🛠️ Especificação Técnica (Tech Spec) - filmio

Este documento detalha a arquitetura técnica, o modelo de dados e os contratos de API (via JSON Server) necessários para o funcionamento da aplicação de catálogo de filmes filmio.

---

## 1. Modelo de Dados (Diagrama ER)

Abaixo está o Diagrama Entidade-Relacionamento (DER) que representa a estrutura do nosso "banco de dados" (`db.json`) e como as informações se conectam.

```mermaid
erDiagram
USUARIO ||--o{ FAVORITO : "possui"

USUARIO {
string id PK "Gerado automaticamente"
string nome
string email "Usado para login"
string senha
}

FAVORITO {
string id PK
string usuarioId FK "Vínculo com o usuário"
number filmeId "ID do filme na API"
string titulo
string poster
}
```

## 2. Dicionário de Dados

Breve explicação das tabelas principais:

- **Usuários:** Responsável por armazenar os dados de autenticação dos usuários do sistema.
  - id: Identificador único gerado pelo JSON Server.
  - email: Utilizado para login do usuário.
  - senha: Armazenada em formato simples para fins didáticos.

- **Favoritos:** Armazena os filmes salvos pelos usuários.
  - usuarioId: Chave estrangeira que vincula o favorito ao usuário.
  - filmeId: Identificador do filme obtido da API externa.
  - titulo: Nome do filme salvo.
  - poster: Caminho da imagem do filme.

---

## 3. Rotas da API (JSON Server)

A aplicação consome a API local simulada pelo JSON Server. Abaixo os principais endpoints:

- `GET /usuarios` - Retorna a lista de usuários.
- `POST /usuarios` - Cadastra um novo usuário.
- `GET /favoritos?usuarioId=1` - Retorna os filmes favoritos de um usuário.
- `POST /favoritos` - Adiciona um filme aos favoritos.
- `DELETE /favoritos/:id` - Remove um filme dos favoritos.

---

## 4. Estrutura do Banco de Dados (db.json)

Esta é a representação em formato JSON do banco de dados simulado:

```json
{
  "usuarios": [
    {
      "id": "1",
      "nome": "Erick",
      "email": "erick@email.com",
      "senha": "123456"
    }
  ],
  "favoritos": [
    {
      "id": "1",
      "usuarioId": "1",
      "filmeId": 550,
      "titulo": "Fight Club",
      "poster": "/poster.jpg"
    }
  ]
}
```
