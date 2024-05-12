
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { StatusDownloadFile } from '../models/StatusDownloadFile/StatusDownloadFile';
import { Session } from '../pages/home/guards/session';

import { AuthService } from './auth.service';


@Injectable({
    providedIn: 'root'
})


export class UploadFileService {

    private readonly endPoint = environment['endPoint'];

    public statusDownloadFile: StatusDownloadFile;

    constructor(private http: HttpClient, private authService: AuthService,
        public httpClient2: HttpClient, private handler: HttpBackend,
        private session: Session,) {
        this.httpClient2 = new HttpClient(handler);

        this.statusDownloadFile = new StatusDownloadFile();
        this.statusDownloadFile.OpenProgressDownload = false;
    }


    postUploadFile(mes: number, ano: number, tabelas: string, request) {
        var user = this.authService.getUser();
        var dadosFiltro = "";

        if (user && user.IdUser > 0) {
            dadosFiltro = user.IdUser;
        }
        else {

            var sessao = this.session.getSession();
            var CodUser = sessao["CodUser"];
            dadosFiltro = CodUser;

        }

        dadosFiltro = dadosFiltro + ";" + mes + ";" + ano + ";" + tabelas;

        const HttpUploadOptions = {
            headers: new HttpHeaders({
                contentType: "false",
                processData: "false",
            }),
        };
        return this.http.post<any>(
            `${this.endPoint}/UploadFile/UploadFileExcel/${dadosFiltro}`,
            request
        );
    }

    DeletaArquivoImportacaoPorId(IdFile: number) {
        return this.http.post<any>(
            `${this.endPoint}/UploadFile/DeletaArquivoImportacaoPorId/${IdFile}`, null);
    }



    ListarArquivos() {
        return this.http.post<any>(
            `${this.endPoint}/UploadFile/ListarArquivos/`,
            null
        );
    }



}