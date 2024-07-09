```markdown
Spotify Track Info

Este projeto permite obter informações detalhadas de uma faixa do Spotify a partir de um URL.

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalação

1. Clone o repositório para o seu ambiente local:

   ```
   git clone https://github.com/ThalysonD/Spotify-Track-Names.git
   ```

2. Navegue até o diretório do projeto:

   ```
   cd seu-repositorio
   ```

3. Instale as dependências do projeto:

   ```
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e adicione suas credenciais do Spotify:

   ```plaintext
   SPOTIFY_CLIENT_ID=seu_client_id_aqui
   SPOTIFY_CLIENT_SECRET=seu_client_secret_aqui
   ```

## Obtendo Credenciais do Spotify

1. Acesse o [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).
2. Faça login com sua conta do Spotify.
3. Clique em "Create an App".
4. Preencha os detalhes da aplicação e aceite os termos de uso.
5. Após criar a aplicação, você verá o `Client ID` e o `Client Secret`. Copie esses valores para o seu arquivo `.env`.

## Uso

1. Substitua o URL da faixa do Spotify no arquivo principal (`index.ts`):

   ```typescript
   const spotifyUrl = "https://open.spotify.com/intl-pt/track/1Lo0QY9cvc8sUB2vnIOxDT?si=9ecd33d37b724fc0";
   ```

2. Execute o script:

   ```bash
   npm start
   ```

3. O título completo da faixa será exibido no console.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
