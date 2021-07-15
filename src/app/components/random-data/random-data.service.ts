import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class RandomDataService {

    private baseUrl = "https://random-data-api.com/api";

    constructor(private http: HttpClient) {
    }

    public getRandomData(source: string, size: number = 2): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/${source}/random_${source}`, {
            params: {
                size: String(size)
            }
        });
    }
}
