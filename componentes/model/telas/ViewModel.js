import { useState } from 'react';
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
// Importa o servi�o de autentica��o
import { fazerLogin, salvarTokenNoCelular } from '../servicos/authService';

export default function TelaLogin({ aoLogarComSucesso }) {
  // ViewModel: Nossas variaveis de estado
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  // Fun��o disparada ao clicar no bot�o Entrar
  const botaoEntrarPressionado = async () => {
    // Valida��o minima
    if (email === '' || senha === '') {
      Alert.alert('Aten��o', 'Preencha todos os campos!');
      return;
    }

    setCarregando(true); // spinner carregando

    try {
      // 1. Chama o Model para ir na API
      const tokenRecebido = await fazerLogin(email, senha);

      // 2. Chama o Model para salvar token
      await salvarTokenNoCelular(tokenRecebido);

      // 3. Avisa o aplicativo que deu tudo certo para trocar de tela
      aoLogarComSucesso();

    } catch (erro) {
      // Se a API retornar erro (senha errada), mostra um alerta
      Alert.alert('Erro', erro.message);
    } finally {
      setCarregando(false); // Para o spinner
    }
  };

  // View: O que aparece na tela
  return (
    <View>
      <Text>Acesso ao Sistema</Text>
      <TextInput
        placeholder='Digite seu e-mail'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <TextInput
        placeholder='Digite sua senha'
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true} // Esconde a senha com asteriscos
      />
      {/* Renderização condicional: se estiver carregando, mostra a spinner, senao mostra o botão */}
      {carregando ? (
        <ActivityIndicator size='large' color='#0000ff' />
      ) : (
        <TouchableOpacity onPress={botaoEntrarPressionado}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
