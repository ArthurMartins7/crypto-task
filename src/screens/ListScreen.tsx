import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { findAll } from '../services/registerService';
import { Usuario } from '../shared/models/usuario';

const Stack = createNativeStackNavigator();

export default function UserList() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        listAll();
    }, []);

    const listAll = () => {
        const result = findAll();
        setUsuarios(result);
    }

    const renderItem = ({ item }: { item: Usuario }) => (
        <View style={styles.linha}>
            <Text style={[styles.celula, styles.celulaId]} numberOfLines={1} ellipsizeMode="middle">{item.id}</Text>
            <Text style={styles.celula}>{item.nome}</Text>
            <Text style={styles.celula}>{item.email}</Text>
            <Text style={[styles.celula, styles.celulaSenha]} numberOfLines={1} ellipsizeMode="middle">{item.senha}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Usuários</Text>
            
            <View style={styles.containerTabela}>
                <View style={styles.cabecalhoTabela}>
                    <Text style={[styles.celulaCabecalho, styles.celulaId]}>ID</Text>
                    <Text style={styles.celulaCabecalho}>Nome</Text>
                    <Text style={styles.celulaCabecalho}>Email</Text>
                    <Text style={[styles.celulaCabecalho, styles.celulaSenha]}>Senha (hash)</Text>
                </View>
                
                <FlatList
                    data={usuarios}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={styles.lista}
                />
            </View>
            
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    containerTabela: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        overflow: 'hidden',
    },
    cabecalhoTabela: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        padding: 12,
        borderBottomWidth: 2,
        borderBottomColor: '#ddd',
    },
    celulaCabecalho: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 16,
        paddingHorizontal: 8,
    },
    lista: {
        flex: 1,
    },
    linha: {
        flexDirection: 'row',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        alignItems: 'center',
    },
    celula: {
        flex: 1,
        fontSize: 15,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    celulaId: {
        flex: 0.8,
        fontFamily: 'monospace',
    },
    celulaSenha: {
        flex: 1.2,
        fontFamily: 'monospace',
    },
});