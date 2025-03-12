// Array para armazenar os nomes
const names = [];

// Seleciona os elementos do DOM
const inputField = document.getElementById('amigo');
const itemList = document.getElementById('listaAmigos');
const addButton = document.querySelector('.button-add');

// Adiciona o evento ao botão
addButton.addEventListener('click', () => {
  const inputValue = inputField.value;

  // Verifica se o campo não está vazio
  if (inputValue.trim() !== "") {
    // Adiciona o nome ao array
    names.push(inputValue);

    // Cria um novo elemento <li> e insere na lista
    const listItem = document.createElement('li');
    listItem.textContent = inputValue;
    itemList.appendChild(listItem);

    // Limpa o campo de entrada
    inputField.value = '';
  } else {
    alert('Por favor, insira um nome válido!');
  }
});

function sortearAmigo() {  
    if (names.length === 0) {
        alert("A lista está vazia! Adicione nomes antes de realizar o sorteio.");
        return;
      }
    
      // Sorteia um índice aleatório
      const indiceSorteado = Math.floor(Math.random() * names.length);
    
      // Obtém o nome correspondente
      const amigoSorteado = names[indiceSorteado];
    
       // Exibe o resultado
      const resultado = document.getElementById('resultado');
      resultado.textContent = ''; // Limpa o conteúdo anterior

      // Cria um novo elemento <li> para exibir o resultado
      const listItem = document.createElement('li');
      listItem.textContent = `O amigo sorteado é: ${amigoSorteado}`;

      // Adiciona o elemento à lista de resultados
      resultado.appendChild(listItem);
   

  }
  
