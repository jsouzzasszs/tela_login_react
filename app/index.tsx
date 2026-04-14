import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const entrar = async () => {
        if (!email || !password) {
            Alert.alert('Erro', 'Por Favor, Preencha todos os campos');
            return;
        }

        setLoading(true);

        setTimeout(() => {
            Alert.alert('Sucesso', `login realizado com: ${email}`)

            setLoading(false);
        }, 1500);

    };
    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >

            <View style={styles.avatarContainer}>
                <MaterialCommunityIcons
                    name="account-circle"
                    size={120}
                    color="#007AFF" />
            </View>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Entre com as suas credenciaias</Text>

            <View style={styles.inputContainer}>
                <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color="#999"
                    style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.inputContainer}>
                <MaterialCommunityIcons
                    name="lock-outline"
                    size={20}
                    color="#999"
                    style={styles.inputIcon}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#999"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeIcon}>
                    <MaterialCommunityIcons
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        size={20}
                        color="#999"
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.loginButton, loading && styles.loginButtonDisabled]}
                onPress={entrar}
                disabled={loading}
            >
                <MaterialCommunityIcons
                    name="login-variant"
                    size={20}
                    color="#fff"
                    style={{ marginRight: 8 }}
                />
                <Text style={styles.loginButtonText}>{loading ? 'Carregando...' : 'Entrar'}
                </Text>
            </TouchableOpacity>

            <View style={styles.dividerContainer}>
                <View style={styles.dividerContainer} />
                <Text style={styles.dividerText}>Ou</Text>
                <View style={styles.dividerContainer} />
            </View>
            <TouchableOpacity style={styles.googleButton}>
                {/* Ícone do Google */}
                <MaterialCommunityIcons
                    name="google"
                    size={20}
                    color="#DB4437"
                    style={{ marginRight: 12 }}
                />
                <Text style={styles.googleButtonText}>Continuar com Google</Text>
            </TouchableOpacity>
               <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Não tem uma conta? </Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
            

        </View>
    );
};
const styles = StyleSheet.create({
  // Container principal que ocupa toda a tela
  container: {
    flex: 1,                     // Ocupa 100% da altura disponível
    backgroundColor: '#fff',     // Fundo branco
  },
  
  // Conteúdo dentro do ScrollView
  scrollContent: {
    flexGrow: 1,                 // Cresce para preencher espaço
    paddingHorizontal: 20,       // 20 pixels de espaço esquerda e direita
    paddingTop: 40,              // 40 pixels de espaço no topo
    paddingBottom: 20,           // 20 pixels de espaço no rodapé
    justifyContent: 'center',    // Centraliza verticalmente
  },
  
  // Container do avatar (ícone)
  avatarContainer: {
    alignItems: 'center',        // Centra horizontalmente
    marginBottom: 30,            // 30 pixels de espaço abaixo
  },
  
  // Estilo do título "Login"
  title: {
    fontSize: 32,                // Tamanho do texto: 32 pixels
    fontWeight: '700',           // Negrito forte
    color: '#000',               // Cor preta
    textAlign: 'center',         // Texto alinhado no centro
    marginBottom: 8,             // 8 pixels de espaço abaixo
  },
  
  // Estilo do subtítulo "Entre com suas credenciais"
  subtitle: {
    fontSize: 14,                // Tamanho do texto: 14 pixels
    color: '#666',               // Cor cinza médio
    textAlign: 'center',
    marginBottom: 30,            // 30 pixels de espaço abaixo
  },
  
  // Container dos inputs (email e senha)
  // Este container agrupa o ícone + TextInput + botão olho
  inputContainer: {
    flexDirection: 'row',        // Coloca itens em linha (não em coluna)
    alignItems: 'center',        // Alinha verticalmente no centro
    backgroundColor: '#f5f5f5',  // Fundo cinza claro
    borderRadius: 12,            // Bordas arredondadas (12 pixels)
    marginBottom: 16,            // 16 pixels de espaço abaixo
    paddingHorizontal: 15,       // 15 pixels de espaço interno esquerda/direita
    borderWidth: 1,              // Borda com 1 pixel
    borderColor: '#e0e0e0',      // Cor da borda: cinza muito claro
  },
  
  // Ícone dentro do input
  inputIcon: {
    marginRight: 10,             // 10 pixels de espaço à direita
  },
  
  // Campo de entrada de texto (email/senha)
  input: {
    flex: 1,                     // Ocupa todo espaço disponível
    paddingVertical: 14,         // 14 pixels de espaço cima e baixo
    fontSize: 16,                // Tamanho do texto: 16 pixels
    color: '#000',               // Texto preto
  },
  
  // Botão do ícone "olho"
  eyeIcon: {
    padding: 8,                  // 8 pixels de espaço interno
  },
  
  // Container do link "Esqueci minha senha"
  forgotPasswordContainer: {
    alignItems: 'flex-end',      // Alinha à direita
    marginBottom: 24,            // 24 pixels de espaço abaixo
  },
  
  // Estilo do texto "Esqueci minha senha"
  forgotPasswordText: {
    color: '#007AFF',            // Azul (cor de link)
    fontSize: 13,                // Tamanho do texto
    fontWeight: '500',           // Semi-negrito
  },
  
  // Estilo do botão "Entrar"
  loginButton: {
    backgroundColor: '#007AFF',  // Fundo azul
    paddingVertical: 14,         // 14 pixels de espaço cima e baixo
    borderRadius: 12,            // Bordas arredondadas
    flexDirection: 'row',        // Coloca ícone e texto lado a lado
    justifyContent: 'center',    // Centraliza horizontalmente
    alignItems: 'center',        // Centraliza verticalmente
    marginBottom: 24,            // 24 pixels de espaço abaixo
    shadowColor: '#007AFF',      // Cor da sombra: azul
    shadowOffset: { width: 0, height: 4 },  // Sombra 4 pixels abaixo
    shadowOpacity: 0.2,          // Opacidade da sombra: 20%
    shadowRadius: 8,             // Desfoque da sombra: 8 pixels
    elevation: 5,                // Sombra para Android
  },
  
  // Quando o botão está em estado "carregando"
  loginButtonDisabled: {
    opacity: 0.6,                // Reduz a opacidade para 60% (fica mais transparente)
  },
  
  // Texto do botão "Entrar"
  loginButtonText: {
    color: '#fff',               // Texto branco
    fontSize: 16,                // Tamanho do texto
    fontWeight: '600',           // Semi-negrito
  },
  
  // Container do divisor "ou"
  dividerContainer: {
    flexDirection: 'row',        // Coloca em linha
    alignItems: 'center',        // Centraliza verticalmente
    marginVertical: 20,          // 20 pixels de espaço cima e baixo
  },
  
  // Linhas horizontais do divisor
  dividerLine: {
    flex: 1,                     // Ocupa espaço disponível
    height: 1,                   // Altura: 1 pixel
    backgroundColor: '#e0e0e0',  // Cor: cinza claro
  },
  
  // Texto "ou" do divisor
  dividerText: {
    marginHorizontal: 12,        // 12 pixels de espaço esquerda e direita
    color: '#999',               // Cor cinza
    fontSize: 13,                // Tamanho do texto
  },
  
  // Botão "Continuar com Google"
  googleButton: {
    flexDirection: 'row',        // Coloca ícone e texto lado a lado
    justifyContent: 'center',    // Centraliza horizontalmente
    alignItems: 'center',        // Centraliza verticalmente
    paddingVertical: 12,         // 12 pixels de espaço cima e baixo
    borderRadius: 12,            // Bordas arredondadas
    borderWidth: 1.5,            // Borda com 1.5 pixels
    borderColor: '#e0e0e0',      // Cor da borda: cinza claro
    marginBottom: 24,            // 24 pixels de espaço abaixo
  },
  
  // Texto do botão Google
  googleButtonText: {
    color: '#000',               // Texto preto
    fontSize: 14,                // Tamanho do texto
    fontWeight: '600',           // Semi-negrito
  },
  
  // Container do link "Cadastre-se"
  signupContainer: {
    flexDirection: 'row',        // Coloca em linha
    justifyContent: 'center',    // Centraliza horizontalmente
    marginTop: 16,               // 16 pixels de espaço acima
  },
  
  // Texto "Não tem uma conta?"
  signupText: {
    color: '#666',               // Cinza médio
    fontSize: 13,
  },
  
  // Link "Cadastre-se"
  signupLink: {
    color: '#007AFF',            // Azul
    fontSize: 13,
    fontWeight: '600',           // Semi-negrito
  },
});
