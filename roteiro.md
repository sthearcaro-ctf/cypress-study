Funcionalidade: Cadastro no site Adopet.

Cenário 1: Realizar um cadastro no site com sucesso.

Passos: 
1. O usuário acessa a página de cadastro.
2. O usuário preenche o campo "Nome".
3. O usuário preenche o campo "E-mail" com um endereçõ de e-mail válido.
4. O usuário preenche o campo "Senha" com uma senha válida.
5. O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
6. O usuário clica no botão "Cadastrar".

Resultados esperados:

Regra de negócio:
E-mail e senha são campos obrigatórios para o cadastro.

Cenário 2: Falha na tentativa de cadastro.

Passos: 
1. O usuário acessa a página de cadastro.
2. O usuário deixa os campos obrigatórios (nome, email, senha e confirmação de senha) em branco.
3. O usuário clica no botão "Cadastrar".

Resultados esperados:

O sistema valida os campos obrigatórios em branco.
O sistema exibe mensagens de erro indicando que os campos obrigatórios devem ser preenchidos.

--------------------------------------------------------------

Funcionalidade: Login no site Adopet.

Cenário 1: Login no sistema com sucesso.

Passos:

1. O usuário acessa a página de login.
2. O usuário insere seu e-mail "teste_cyp@gmail.com" e senha "Senha123" nos campos correspondentes.
3. O usuário clica no botão "Entrar".

Resultados esperados:

O sistema autentica as credenciais fornecidas.
O sistema redireciona o usuário para a página "/home".

Cenário 2: Falha no login do sistema.

Passos:

1. O usuário acessa a página de login.
2. O usuário insere um e-mail e senha fora do padrão aceito nos campos correspondentes.
3. O usuário clica no botão de login.

Resultados Esperados:

O sistema valida as credenciais fornecidas.
O sistema exibe mensagens de erro específicas para o e-mail e senha inseridos incorretamente, como: "Por favor, verifique o e-mail digitado" e/ou "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres".

Regra de Negócio:

O e-mail deve ter um formato válido.
A senha deve conter pelo menos uma letra maiuscula, um número e ter entre 6 e 15 caracteres