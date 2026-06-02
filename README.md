# 🚀 Serverest API Cypress
![CI](https://github.com/OlafDigital/serverest-api-cypress/actions/workflows/ci.yml/badge.svg)
![Cypress](https://img.shields.io/badge/Cypress-14.x-green)
![Node.js](https://img.shields.io/badge/Node.js-LTS-brightgreen)
![API Testing](https://img.shields.io/badge/API%20Testing-Automated-blue)
![Schema Validation](https://img.shields.io/badge/Schema%20Validation-JSON%20Schema-orange)

Projeto de automação de testes de API utilizando Cypress para validação dos principais recursos da API pública Serverest.

---

# 📋 Objetivo

Este projeto tem como objetivo demonstrar boas práticas de automação de APIs REST utilizando:

* Cypress
* Cypress Plugin API
* JSON Schema Validation
* Mochawesome Reports
* JUnit Reports
* GitHub Actions
* Fixtures
* Custom Commands

A suíte contempla testes completos de CRUD para:

* Usuários
* Login
* Produtos
* Carrinhos
* Exclusão de registros

---

# 🛠 Tecnologias Utilizadas

* Cypress
* JavaScript
* Node.js
* Cypress Plugin API
* Faker
* Mochawesome Reporter
* Mocha JUnit Reporter
* Chai JSON Schema
* GitHub Actions

---

# 📁 Estrutura do Projeto

```text
📦 serverest-api-cypress
┣ 📂 .github
┃ ┗ 📂 workflows
┃   ┗ 📜 ci.yml
┃
┣ 📂 cypress
┃ ┣ 📂 e2e
┃ ┃ ┗ 📜 API.cy.js
┃ ┃
┃ ┣ 📂 fixtures
┃ ┃ ┣ 📜 usuario.json
┃ ┃ ┗ 📜 produto.json
┃ ┃
┃ ┣ 📂 reports
┃ ┃ ┣ 📂 junit
┃ ┃ ┗ 📂 mochawesome
┃ ┃
┃ ┣ 📂 screenshots
┃ ┃
┃ ┣ 📂 videos
┃ ┃
┃ ┗ 📂 support
┃   ┣ 📂 schemas
┃   ┃ ┣ 📜 usuario.schema.js
┃   ┃ ┣ 📜 login.schema.js
┃   ┃ ┣ 📜 produto.schema.js
┃   ┃ ┗ 📜 carrinho.schema.js
┃   ┃
┃   ┣ 📜 commands.js
┃   ┗ 📜 e2e.js
┃
┣ 📜 cypress.config.js
┣ 📜 package.json
┣ 📜 package-lock.json
┣ 📜 .gitignore
┗ 📜 README.md
```

---

# ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de possuir instalado:

* Node.js
* npm

Verifique as versões:

```bash
node -v
npm -v
```

---

# 📥 Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/serverest-api-cypress.git
```

Acesse a pasta:

```bash
cd serverest-api-cypress
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Executando os Testes

## Executar todos os testes

```bash
npm run cy:run
```

ou

```bash
npx cypress run
```

---

## Abrir interface gráfica

```bash
npm run cy:open
```

ou

```bash
npx cypress open
```

---

## Executar um arquivo específico

```bash
npx cypress run --spec "cypress/e2e/API.cy.js"
```

---

# 🔎 Funcionalidades Automatizadas

## 👤 Usuários

* Criar usuário
* Buscar todos os usuários
* Buscar usuário por ID
* Atualizar usuário
* Excluir usuário

---

## 🔐 Login

* Autenticação
* Obtenção de Token JWT

---

## 📦 Produtos

* Criar produto
* Buscar todos os produtos
* Buscar produto por ID
* Atualizar produto
* Excluir produto

---

## 🛒 Carrinhos

* Criar carrinho
* Buscar carrinhos
* Buscar carrinho por ID
* Cancelar compra

---

# ✅ Validação de Schemas

O projeto utiliza JSON Schema Validation para garantir que os contratos da API permaneçam consistentes.

Exemplo:

```javascript
expect(response.body)
    .to.be.jsonSchema(usuarioSchema.criarUsuario)
```

Os schemas estão centralizados em:

```text
cypress/support/schemas/
```

Benefícios:

* Validação estrutural da resposta
* Detecção rápida de quebras de contrato
* Maior confiabilidade da API
* Fácil manutenção

---

# 📊 Relatórios

O projeto gera relatórios automáticos em:

## Mochawesome

```text
cypress/reports/
```

## JUnit XML

```text
cypress/reports/junit/
```

Esses relatórios podem ser utilizados em:

* Jenkins
* Azure DevOps
* GitHub Actions
* GitLab CI/CD

---

# 🚀 Integração Contínua

Os testes são executados automaticamente através do GitHub Actions.

Workflow:

```text
.github/workflows/ci.yml
```

Execução automática em:

* Push
* Pull Request

---

# 📈 Boas Práticas Aplicadas

* Custom Commands
* Reutilização de código
* Fixtures
* JSON Schema Validation
* Relatórios automatizados
* Organização por responsabilidade
* Integração contínua
* Testes independentes
* Código limpo e reutilizável

---

# 👨‍💻 Autor

**Olavo Luiz Tavares Júnior**

QA Engineer | Test Automation | Cypress | Robot Framework | API Testing

---

# ⭐ Projeto Educacional

Projeto desenvolvido com foco em aprendizado, evolução contínua e aplicação de boas práticas de automação de testes de API.
