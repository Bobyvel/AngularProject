import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class ResHadlerInterseptorService implements HttpInterceptor {
  constructor(public toastr: ToastrService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(success => {
        
        if (success instanceof HttpResponse) {
          if (
            success.url.endsWith("create") ||
            success.url.endsWith("signup") ||
            success.url.endsWith("sugnin") ||
            success.url.includes("delete") ||
            success.url.includes("edit") 
          )
            this.toastr.success(success.body.message);
        }
      }),
      catchError(err => {
        this.toastr.error(err.error.message, "Error");
        throw err;
      })
    );
  }
}
