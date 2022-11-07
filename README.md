<h1 align="center">NLW Copa</h1>

## 🔖Layout
   Você pode visualizar o layout do projeto através do link abaixo:

-   [Layout](https://www.figma.com/community/file/1169028343875283461)

Lembrando que você precisa ter uma conta no  [Figma](http://figma.com/).

## 📜 Sobre
<p>
	Aplicação para participar de bolões da Copa do Mundo 2022.
</p>

## 🚀 Tecnologias
- TypeScript
- React
- React Native
- Expo
- Fastify
- Prisma
- E muitas outras...

## 💻 Iniciando o Projeto

<p>Em todos os projetos, ao acessar a pasta, é preciso baixar os pacotes com o gerenciador de sua preferencia.</p>

**🚀Como executar o server**
- Instale os pacotes com  `npm install`.
- Faça uma copia do arquivo  `.env.example`  para  `.env`  e altere caso necessário.
- Execute  `npx prisma migrate dev`  para rodar as migrations. (Esse comando também já vai executar as seeds)
- Execute  `npm run dev`  para iniciar o servidor.

**🚀Como executar o projeto Web**
<p>Para que esse projeto funcione corretamente, é preciso estar com o servidor rodando. </p>

- Instale os pacotes com  `npm install`.
- Execute  `npm run dev`  para iniciar o cliente web.

**🚀Como executar o projeto Mobile**
<p>Para que esse projeto funcione corretamente, é preciso estar com o servidor rodando. </p>

- Instale os pacotes com  `npm install`.
- Criar o app no google para poder ter acesso ao OAuth ([https://docs.expo.dev/guides/authentication/#google](https://docs.expo.dev/guides/authentication/#google))
- Faça uma copia do arquivo  `.env.example`  para  `.env`  e preencha corretamente.
- Alterar o endereço do arquivo  `src/services/api.ts`  colocando o IP da máquina.
- Execute  `npm run dev`  para iniciar o servidor do Expo.

---
Feito por Andrey Dantas 👋 Siga minhas redes sociais:
- [Instagram](https://www.instagram.com/andreydantasvf/)
- [Twitter](https://twitter.com/andreydantasvf)
- [Linkedin](https://www.linkedin.com/in/andreydantasvf/)