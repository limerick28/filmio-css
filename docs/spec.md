# 🛠️ Especificação Técnica (Tech Spec) - Movio

Este documento detalha a arquitetura técnica, o modelo de dados e os contratos de API (via JSON Server) necessários para o funcionamento da aplicação de catálogo de filmes Movio.

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
