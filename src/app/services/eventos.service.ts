import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class EventosService {

    private path: string;

    constructor(private http: HttpClient) {
        this.path = "http://localhost:3000/eventos";
    }

    getEventos() {
        return this.http.get(this.path);
    }

    getEvento(id: number) {
        return this.http.get(this.path);
    }
}
