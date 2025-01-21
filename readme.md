# Amigo Secreto

Este projeto foi desenvolvido como parte de um desafio proposto pela Oracle One. O objetivo é criar uma aplicação web onde os usuários podem adicionar nomes à lista de "amigos" e, em seguida, realizar um sorteio de um amigo secreto. 

A aplicação é composta por um formulário onde os usuários digitam os nomes de seus amigos e, ao clicar no botão "Adicionar", os nomes são exibidos em uma lista. Ao clicar no botão "Sortear amigo", um nome aleatório é sorteado e exibido na tela.

## Funcionalidades

- **Adicionar nome:** O usuário pode digitar o nome de um amigo no campo de entrada e clicar em "Adicionar". O nome será adicionado à lista de amigos e exibido na tela.
- **Sortear amigo:** Ao clicar no botão "Sortear amigo", a aplicação escolhe um nome aleatório da lista de amigos e exibe quem foi sorteado.

## Tecnologias Utilizadas

- **HTML**: Para estruturação da página web.
- **CSS**: Para estilização da página (arquivo `style.css`).
- **JavaScript**: Para a lógica de adicionar amigos à lista e realizar o sorteio.

## Como Funciona

1. **Adicionar amigos:**
    - O usuário digita o nome no campo de entrada e clica no botão "Adicionar".
    - O nome é adicionado à lista de amigos (exibido na tela).
  
2. **Sortear amigo:**
    - Quando o botão "Sortear amigo" é clicado, a aplicação sorteia um nome aleatório da lista de amigos.
    - O nome sorteado é exibido na seção de resultados.

## Estrutura do Código

### HTML

O HTML contém a estrutura básica da página, incluindo:
- O campo de entrada de nome de amigo.
- A lista de amigos digitados.
- O botão para sortear um amigo secreto.

### JavaScript

A lógica é dividida em duas funções principais:

- **`adicionarAmigo()`**: Adiciona o nome do amigo à lista.
- **`sortearAmigo()`**: Sorteia um nome aleatório da lista e exibe o resultado.

### Exemplo de Funcionamento

1. O usuário adiciona os nomes ao clicar no botão "Adicionar".
2. Após adicionar os amigos, o botão "Sortear amigo" permite que o sistema sorteie e exiba um amigo secreto.

## Instruções de Uso

1. Clone o repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em seu navegador.
3. Adicione os nomes dos amigos utilizando o campo de entrada.
4. Clique em "Adicionar" para ver os nomes na lista.
5. Clique em "Sortear amigo" para sortear um amigo secreto da lista.

## Contribuições

Este projeto é um exercício individual proposto pela Oracle One. Contudo, contribuições e melhorias são bem-vindas. Se desejar contribuir, siga os seguintes passos:

1. Faça um fork deste repositório.
2. Crie uma nova branch para sua feature (`git checkout -b feature/feature-name`).
3. Faça commit das suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Envie para o repositório remoto (`git push origin feature/feature-name`).
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
