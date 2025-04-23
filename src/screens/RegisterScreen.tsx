import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { handleRegister } from '../services/registerService';
import { Usuario } from '../shared/models/usuario';

const usuario = new Usuario();
const usuarios = new Array<Usuario>;

export default function RegisterScreen() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();

    const criar = () => {
        handleRegister(nome, email, senha);
    }

    const verUsuarios = () => {
        navigation.navigate('Lista de Usuários' as never);
    }

  return (
    <View style={styles.container}>
      <Text style={styles.cadastroTitulo}>Faça o seu cadastro</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput 
        style={styles.textInput}
        value={nome}
        onChangeText={setNome}
        ></TextInput>

        <Text style={styles.label}>E-mail:</Text>
        <TextInput 
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        ></TextInput>

        <Text style={styles.label}>Senha:</Text>
        <TextInput 
        style={styles.textInput} 
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
        //keyboardType='visible-password'
        ></TextInput>
      </View>

      <Pressable style={styles.botaoCadastrar} onPress={criar}>
        <Text style={styles.textoBotaoCadastrar}>Cadastrar</Text>
      </Pressable>

      <Pressable style={[styles.botaoCadastrar, styles.botaoListar]} onPress={verUsuarios}>
        <Text style={styles.textoBotaoCadastrar}>Ver Usuários</Text>
      </Pressable>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cadastroTitulo: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#000000',
    marginBottom: 40,
  },
  formContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 5,
  },
  textInput: {
    width: 300,
    height: 50,
    marginBottom: 25,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
  },
  botaoCadastrar: {
    backgroundColor: '#708090',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 100,
  },
  textoBotaoCadastrar: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
  botaoListar: {
    marginTop: 15,
    backgroundColor: '#4682B4',
  },
});
