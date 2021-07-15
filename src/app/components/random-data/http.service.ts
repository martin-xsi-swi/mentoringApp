import {HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Meta} from "@angular/platform-browser";

@Injectable({
    providedIn: "root"
})
export abstract class HttpService {
    protected constructor(private meta: Meta) {
    }

    public getCsrfHeaders() {
        return {
            headers: new HttpHeaders({
                "X-CSRF-TOKEN": this.getCsrf()
            })
        };
    }

    public getHeaders(contentType: string = "application/json") {
        return {
            headers: this.getCsrfHeaders().headers.append("Content-Type", contentType)
        };
    }

    // token needs to be included in post/put/delete headers to work, it's in page content in <meta name="_csrf" content="X-CSRF-TOKEN" />
    private getCsrf(): string {
        return this.meta.getTag("name='_csrf'").content;
    }
}
