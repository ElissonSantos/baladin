export interface Evento {
    id: number;
    name: string;
    data: string;
    balada: number;
    estilo: string;
    img: string;
}

export interface EventoReturn {
    id: number;
    name: string;
    data: Date;
    nomeBalada: string;
    enderecoBalada: string;
    estilo: string;
    descricao: string;
    img: string;
}
