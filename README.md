# Desenvolver uma página web para consulta a API do [GitHub](https://github.com)

Criar um aplicativo Web para consultar a [API do GitHub](https://developer.github.com/v3/) e trazer os repositórios mais populares de Javascript. Basear-se no mockup fornecido:

![Captura de tela de 2015-10-22 11-28-03.png](https://bitbucket.org/repo/7ndaaA/images/3102804929-Captura%20de%20tela%20de%202015-10-22%2011-28-03.png)

### **Deve conter** ###

- __Lista de repositórios__. Exemplo de chamada na API: `https://api.github.com/search/repositories?q=language:Javascript&sort=stars&page=1`
  * Paginação na tela de lista, com endless scroll / scroll infinito (incrementando o parâmetro `page`).
  * Cada repositório deve exibir Nome do repositório, Descrição do Repositório, Nome / Foto do autor, Número de Stars, Número de Forks
  * Ao clicar em um item, deve levar a lista de Pull Requests do repositório
- __Pull Requests de um repositório__. Exemplo de chamada na API: `https://api.github.com/repos/<criador>/<repositório>/pulls`
  * Cada item da lista deve exibir Nome / Foto do autor do PR, Título do PR, Data do PR e Body do PR
  * Ao clicar em um item, deve abrir no browser a página do Pull Request em questão

### **A página DEVE ** ##
* Conter sistema de build com melhores práticas de performance
* Ser implementada em React/Redux
* Ser responsiva (mobile-first)

### **Ganha + pontos se conter** ###

* Testes no projeto (unitários e por tela)
* Testes funcionais (que naveguem pelo aplicativo como casos de uso)

### **OBS** ###

A foto do mockup é meramente ilustrativa.  


### **Processo de submissão** ###

O candidato deverá implementar a solução e enviar um pull request para este repositório com a solução.

O processo de Pull Request funciona da seguinte maneira:

1. Candidato fará um fork desse repositório (não irá clonar direto!)
2. Fará seu projeto nesse fork.
3. Commitará e subirá as alterações para o __SEU__ fork.
4. Pela interface do GitHub, irá enviar um Pull Request.

Se possível deixar o fork público para facilitar a inspeção do código.

### **ATENÇÃO** ###

Não se deve tentar fazer o PUSH diretamente para ESTE repositório!