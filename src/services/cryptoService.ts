import * as Crypto from 'expo-crypto';

export function gerarUUID(): string {
    const id = Crypto.randomUUID();

    return id
}

export async function gerarHash(senha: string): Promise<string> {
    const senhaCifrada = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, senha);

    return senhaCifrada;
}

export function gerarRandomBytes(): string {
    const bytes = Crypto.getRandomBytes(12);

    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';

    const senhaAleatoria = Array.from(bytes).map(byte => caracteres[byte % caracteres.length]).join('');

    return senhaAleatoria
}
