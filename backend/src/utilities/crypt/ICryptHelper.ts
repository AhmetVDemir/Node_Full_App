export interface Cryptography {
    encrypt: (value: string) => Promise<string>
}

export interface Dcryptography {
    dcrypt: (value: string, compared: string) => Promise<Boolean>
}