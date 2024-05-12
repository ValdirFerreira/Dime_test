import { Injectable } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario/UsuarioModel';


@Injectable()

export class Session {

    constructor() { }

     createSession(user: UsuarioModel) {
        localStorage.setItem('userVolumetria', JSON.stringify(user));
    }

    getSession() {
        let user = JSON.parse(localStorage.getItem('userVolumetria'));
        return user;
    }

    removeSession() {
        localStorage.removeItem('userVolumetria');
    }

    updateSession(user: UsuarioModel) {

        localStorage.removeItem('userVolumetria');

        localStorage.setItem('userVolumetria', JSON.stringify(user));

        let userSession = JSON.parse(localStorage.getItem('userVolumetria'));

        return userSession;
    }

    getCodUserSession() {
        let user = JSON.parse(localStorage.getItem('userVolumetria')) as UsuarioModel;
        return user.CodUser;
    }

    getUserSession() {
        let user = JSON.parse(localStorage.getItem('userVolumetria')) as UsuarioModel;
        return user
    }

    createSessionIPLogado(IP: string) {
        localStorage.removeItem('ipuserVolumetriaLogado');
        localStorage.setItem('ipuserVolumetriaLogado', IP);
    }

    getSessionIPLogado() {
        let IP = localStorage.getItem('ipuserVolumetriaLogado');
        return IP;
    }



}