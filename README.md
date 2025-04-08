# 🥑 Hotifruti Da Praça

Este é um projeto web desenvolvido com **React.js** com o objetivo de melhorar a interação entre o supermercado *Da Praça* e seus clientes, trazendo informação, praticidade e um toque de tecnologia para o dia a dia das compras.

## 🧠 Objetivo

O sistema permite que os clientes acessem **benefícios nutricionais** e **receitas práticas** de cada fruta, legume ou verdura disponível no mercado. A navegação é simples e direta: o cliente escaneia um **QR Code** posicionado na bancada do produto e é direcionado a uma página personalizada com informações específicas.

---

## 🌐 Estrutura do Projeto

Apesar de conter diversas páginas diferentes para os produtos, o projeto utiliza apenas **duas páginas React principais**:

- `Home.js` — Página inicial que apresenta os produtos e direciona para suas respectivas páginas.
- `FrutaPage.js` — Página dinâmica que exibe os dados da fruta com base na **rota** acessada.

### 🧩 Como funciona

- Os dados de todos os produtos estão armazenados em um **arquivo JSON** com estrutura personalizada.
- Cada fruta possui:
  - Um `id` (usado como nome para exibição)
  - Uma **chave dinâmica** (ex: `abacate`, `abacaxi`, `bananadaterra`) que contém os dados reais
- As rotas são criadas dinamicamente com base nessa chave.

#### 🏡 Página Inicial (`Home.js`)

A Home serve como hub central do projeto, onde os usuários podem visualizar uma lista de frutas e clicar para acessar seus benefícios:

<img src="./caminho/para/home.png" alt="Página Home" width="400" />

Cada botão exibe o `id` da fruta (ex: "Abacate") e redireciona para a rota `/produto/abacate`, por exemplo.

#### 🍌 Página de Produto (`FrutaPage.js`)

A `FrutaPage.js` usa o nome da rota (ex: `"abacate"`) para acessar os dados correspondentes no JSON e montar dinamicamente:

- Cores
- Títulos
- Imagens
- Benefícios
- Receitas

<img src="./caminho/para/fruta.png" alt="Página Produto" width="400" />

---

## 🚀 Tecnologias Utilizadas

- **React.js**
- **React Router DOM**
- **CSS3**
- Estrutura de dados via **JSON**
- Compatível com leitura por **QR Code**

---

## 📲 Aplicação na prática

Cada produto terá um **QR Code impresso** fixado na sua bancada. Ao escanear, o cliente será direcionado diretamente para a página da fruta, onde verá:

- 10 benefícios para a saúde
- 4 receitas usando aquele ingrediente

### 🛒 Exemplo:
- Escaneando o QR de “Abacate” leva a `/produto/abacate`

---

## 📁 Organização do JSON

```json
{
  "frutas": [
    {
      "id": "Abacate",
      "abacate": {
        "estilo": {
          "backgroundColor": "#A9DFBF"
        },
        "title": "Benefícios do Abacate",
        "beneficios": [ ... ],
        "receitas": [ ... ]
      }
    }
  ]
}
