import { Injectable } from '@angular/core';

@Injectable()
export class Icontact {
  id: number;
  nom: String;
  mail: String;

  constructor(pId, pNom, pMail) {
    this.id = pId;
    this.nom = pNom;
    this.mail = pMail;
  }
}
