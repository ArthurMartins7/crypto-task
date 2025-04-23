import * as Crypto from 'expo-crypto';
import { Usuario } from '../shared/models/usuario';
import { gerarHash, gerarRandomBytes, gerarUUID } from './cryptoService';

const usuarios: Usuario[] = [];

export async function handleRegister(nome: string, email: string, senha: string): Promise<void> {
    const usuario = new Usuario();
    usuario.id = gerarUUID();
    usuario.nome = nome;
    usuario.email = email;
    if(!senha) {
        usuario.senha = gerarRandomBytes();
    } else {
        usuario.senha = await gerarHash(senha);
    }
    
    console.log('User:', usuario);

    register(usuario);
}

export default function register(usuario: Usuario): void {
    usuarios.push(usuario);
}

export function findAll(): Array<Usuario> {
    return usuarios;
}