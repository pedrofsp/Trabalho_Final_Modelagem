### Trabalho Final de Modelagem e Implementação de Software

#### Para rodar o projeto de maneira local é necessário:

-Instalar o Node.js, para instalação e mais informções acesse: https://nodejs.org/en/

-Instalar o Ionic a partir do comando em terminal:
```console
npm install -g @ionic/cli
```

-Para garantir o funcionamento da API 'Open Weather' é necessário criar uma conta no site https://openweathermap.org/ e gerar uma API KEY, a qual deve ser copiada para o arquivo ./Trabalho_Final_Modelagem/App-Trabalho/src/environments/api-config.ts no formato:
```javascript
export const OPEN_WEATHER_CONFIG = {
  api_key: '<insira aqui a sua chave>',
  api_url: 'https://api.openweathermap.org/data/2.5/onecall',
  api_icon_url: 'http://openweathermap.org/img/wn',
};

```

-Abra o terminal e cerifique-se de que está no diretório do projeto, pasta de nome App-Trabalho

-Para rodar o programa, execute o comando no terminal:
```console
ionic serve
```

-Por ultimo , acesse o app através da url: http://localhost:8100

Aluno: Pedro Henrique Falleiros Sampaio Presotto - 201911255 - 14A
