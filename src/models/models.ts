export interface ResponseGenericApi{
    codeError: string;
    errorMessage: string;
    response: object;
}

export interface FileTest{
    reglas: [string];
    resultado: [string];
}

export interface LoginResponse{
    accessToken: string;
}

export interface Archivo{
    idInsercion: number;
    fechaAlta: string;
    nombreArchivo: string;
    reglasArchivo: any;
    resultadoArchivo: any;
}
