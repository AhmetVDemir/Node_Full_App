//#region Imports
import bcrypt from 'bcrypt'
//#endregion

//#region Classes

const saltRound = 10;

export class Cryptography {
    public static Encrypt(passwordPlainText: string) {

        const hash = bcrypt.hashSync(passwordPlainText,saltRound);
        return hash;
    }
    public static Dcrypt(passwordPlainText: string, paswordHashs: string) {
        const result = bcrypt.compareSync(passwordPlainText, paswordHashs);
        return result;
    }
}

//#endregion