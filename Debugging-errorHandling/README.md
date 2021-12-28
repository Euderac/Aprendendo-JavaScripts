#Tratamento de Erros
Projeto referente ao curso "Tratamento de Erros" ministrado por Stephany Nusch pela Digital Innovation One.

##Atividade: valida��o de erros por tipo
O objetivo � que a fun��o receba um array e retorne ele caso o seu tamanho corresponda ao n�mero enviado como par�metro na fun��o. Caso contr�rio, um erro ser� lan�ado.

- Crie uma fun��o que recebe um array e um n�mero
- Realize as seguintes valida��es
 - Se os par�metros n�o forem enviados, lance um erro do tipo ReferenceError
 - Se o array n�o for do tipo 'object', lance um erro do tipo TypeError
 - Se o n�mero n�o for do tipo 'number', lance um erro do tipo TypeError
 - Se o tamanho do array for diferente do n�mero enviado como par�metro, lance um erro do tipo RangeError
- Utilize a declara��o try...catch
- Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

##Links Auxiliares
- Objeto Error [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error]
- instanceof [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof]
- typeof [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof]
- try...catch [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch]