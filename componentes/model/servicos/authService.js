import AsyncStorage from '@react-native-async-storage/async-storage';

// 1. Função que chama a API
export const fazerLogin = async (emailDigitado, senhaDigitada) => {
  try {
    const resposta = await fetch(
      'https://api.liliaborges.com.br/api/auth/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailDigitado, password: senhaDigitada }),
      }
    );

    const dados = await resposta.json();
    // retorna o token da propriedade ccess_token
    return dados.access_token;
  } catch (erro) {
    throw new Error(erro); // Repassa o erro para a tela
  }
};

// 2. Função para salvar o token no celular
export const salvarTokenNoCelular = async (token) => {
  try {
    await AsyncStorage.setItem('@token_salvo', token);
  } catch (erro) {
    console.error('Erro ao salvar o token', erro);
  }
};

// 3. Pegar o token salvo
export const pegarTokenDoCelular = async () => {
  try {
    // o @ aqui é uma convenção (boas praticas)
    const token = await AsyncStorage.getItem('@token_salvo');
    return token;
  } catch (erro) {
    console.error('Erro ao recuperar o token', erro);
    return null;
  }
};
