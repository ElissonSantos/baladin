export interface EventoDomain {
    id: number;
    name: string;
    data: string;
    balada: number;
    estilo: string;
    img: string;
}

export interface EventoResouce {
    id: number;
    name: string;
    nomeBalada: string;
    enderecoBalada: string;
    imgBalada: string;
    data: string;
    descricao: string;
    estilo: string;
}
