import { PadraoComboFiltro } from "../padrao-combo-filtro/padrao-combo-filtro";

export class FiltroPadraoTable {

    constructor() {
        this.CodStatusTipo2Param = new Array<PadraoComboFiltro>();
        this.CodSLParam = new Array<PadraoComboFiltro>();
        this.CodAnalistaParam = new Array<PadraoComboFiltro>();
        this.CodGerenteSLParam = new Array<PadraoComboFiltro>();
        this.CodCoordenadorParam = new Array<PadraoComboFiltro>();
    }

    CodIdiomaParam: number;
    CodGraficoParam: number;

    CodStatusTipo2Param: Array<PadraoComboFiltro>;
    CodUserParam: number;

    CodSLParam: Array<PadraoComboFiltro>;
    CodAnalistaParam: Array<PadraoComboFiltro>;
    CodGerenteSLParam: Array<PadraoComboFiltro>;
    CodCoordenadorParam: Array<PadraoComboFiltro>;

    DtInicioParam: Date;
    DtFimParam: Date;
}



