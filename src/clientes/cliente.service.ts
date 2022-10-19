import { Injectable } from "@angular/core";
import { Cliente } from "./cliente";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable()
export class ClienteService {
    constructor(private http: HttpClient) { }

    private urlEndPoint: string = 'http://localhost:8080/api/clientes';


    getClientes(): Observable<Cliente[]> {
        //quitar error de cross origin
       return this.http.get<Cliente[]>(this.urlEndPoint);
    }
}
