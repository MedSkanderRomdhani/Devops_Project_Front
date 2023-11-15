import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

  @Injectable({
  providedIn: 'root'
})
export class SecteurActiviteService {
  readonly API_URL = environment.API_Base;

  constructor(private httpClient: HttpClient) { }

  getAllSecteurActivites() {
    return this.httpClient.get(`${this.API_URL}/secteur-activite/retrieve-all-secteurActivite`)
  }
  addSecteurActivite(secteurActivite : any) {
    return this.httpClient.post(`${this.API_URL}/secteur-activite/add-secteurActivite`, secteurActivite)
  }
  editSecteurActivite(secteurActivite : any){
    return this.httpClient.put(`${this.API_URL}/secteur-activite/modify-secteurActivite`, secteurActivite)
  }
  deleteSecteurActivite(idSecteurActivite : any){
    return  this.httpClient.delete(`${this.API_URL}/secteur-activite/remove-secteurActivite/${idSecteurActivite}`)
  }
}
