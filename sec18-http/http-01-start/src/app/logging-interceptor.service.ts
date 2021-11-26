import { tap } from 'rxjs/operators';
import { Observable } from "rxjs";
import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";

export class LoggingInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Outgoing request');
    console.log(req.url);
    console.log(req.headers);
    return next.handle(req).pipe(tap(
      event => {
        if (event.type === HttpEventType.Response){
          console.log('Incomming response');
          console.log(event.body);
        }
      }
    ));
  }
}
