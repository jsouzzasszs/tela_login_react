import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import { pegarTokenDoCelular, salvarTokenNoCelular } from './authService';
import TelaLogin from './telas/ViewModel';

export default function App() {
  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState(false);
  const [verificandoToken, setVerificandoToken] = useState(true);

  // Assim que o app abre, verifica se ja existe um token gravado
  useEffect(() => {
    const verificarAcesso = async () => {
      const token = await pegarTokenDoCelular();
      if (token) {
        setUsuarioEstaLogado(true);
      }
      setVerificandoToken(false);
    };

    verificarAcesso();
  }, []);

  // Fun��o para fazer Logout (apagar o token)
  const sairDoSistema = async () => {
    await salvarTokenNoCelular(''); // Limpa o token deixa vazio
    setUsuarioEstaLogado(false);
  };

  // Se o app ainda estiver lendo a mem�ria do celular
  if (verificandoToken) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Se o usu�rio n�o estiver logado, mostra a tela de Login
  if (!usuarioEstaLogado) {
    return (
      <TelaLogin aoLogarComSucesso={() => setUsuarioEstaLogado(true)} />
    );
  }

  // Se passou pelos IFs acima, o usuário está logado! Mostramos a tela principal.
  return (
    <View>
      <Text>Bem-vindo ao Sistema Interno!</Text>
      <Text>Seu token está salvo e validado.</Text>
      <Button title="Sair do App" onPress={sairDoSistema} />
    </View>
  );
}
