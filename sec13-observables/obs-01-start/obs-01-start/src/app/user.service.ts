import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor() {}

  activeEmmitter = new Subject<boolean>();
}
