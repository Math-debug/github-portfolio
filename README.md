# Página de Portfólio do GitHub

Uma landing page moderna em React Native para exibir seus repositórios do GitHub.

## Funcionalidades
- Design moderno e responsivo
- Integração com repositórios do GitHub
- Cards de projetos com detalhes dos repositórios
- Suporte automático a temas claro/escuro

## Como Começar

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm start
```

3. Execute na plataforma de sua preferência:
- Pressione `a` para Android
- Pressione `i` para iOS
- Pressione `w` para web

## Publicando no GitHub Pages

Para publicar este projeto no GitHub Pages, siga estes passos:

1. Crie um repositório no GitHub chamado `github-portfolio` (ou outro nome de sua preferência)

2. Inicialize o Git e conecte ao seu repositório:
```bash
git init
git add .
git commit -m "Primeira versão da landing page"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/github-portfolio.git
git push -u origin main
```

3. Faça o deploy para o GitHub Pages:
```bash
npm run deploy
```

4. Acesse seu site em: `https://SEU-USUARIO.github.io/github-portfolio`

## Tecnologias Utilizadas
- React Native
- Expo
- React Native Paper
- Axios para chamadas de API
