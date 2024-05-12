export class GrupoColunas {
    ListaColunas: Array<GraficoColunasModel>;
    ListaDescricao: Array<GraficoBaseDescricao>;
    ListaStatus: Array<ColunaDinamica>;
    TituloGrafico: string;
}


export class GraficoColunasModel {

    ColunasDinamica: Array<ColunaDinamica>;
    Descricao: string;

}

export class ColunaDinamica {
    Coluna: number;
    Cor: string;
    Valor: number;
    Quebra: string;
}

export class GraficoBaseDescricao {
    Texto: string;
    Ordem: number;
}