export interface Evento {
    nome: string;
    horario:string;
}

export interface Culto {
    data: string;
    destaque?:boolean;
    titulo?:string;
    descricao?:string
}

export interface Horarios {
    subtitulo: string;
    titulo: string;
    descricao: string;
    cultos: Culto[];
}

export interface Foto {
    src:string,
    alt:string
}