import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";

export interface CanComponentDeactivate {
  canDeactivateMethod: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({
  providedIn: "root",
})
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate>
{
  // this function is called whenever we want to leave the respected route
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // this function should be defined in the respected route component, it contains the logic for leaving the route
    return component.canDeactivateMethod();
  }
}
