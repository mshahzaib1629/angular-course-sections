import { ServersService } from './../servers.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// this inteface can also be an JS object OR model alternatively
interface Server{
  id: number;
  name: string;
  status: string;
}
@Injectable({
  providedIn: 'root'
})
export class ServerResolverService implements Resolve<Server>{

  constructor(private serversService: ServersService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
    return this.serversService.getServer(+route.params['id']);
  }
}
