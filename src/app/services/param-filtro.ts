import { PadraoComboFiltro } from "../models/padrao-combo-filtro/padrao-combo-filtro";

export class ParamGeralFiltro{
    CodOndaParam:number;
    CodUserParam:number;
    CodIdiomaParam:number;
    Regiao: Array<PadraoComboFiltro>;
    ParamBIA: number;

    CodGraficoParam:Number;

    CodSLParam:Array<PadraoComboFiltro>;
}