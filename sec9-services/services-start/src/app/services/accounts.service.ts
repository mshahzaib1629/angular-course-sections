import { LoggingService } from "./logging.service";
import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AccountsService {
  constructor(private logginService: LoggingService) {}

  accounts = [
    {
      name: "Master Account",
      status: "active",
    },
    // {
    //   name: "Testaccount",
    //   status: "inactive",
    // },
    // {
    //   name: "Hidden Account",
    //   status: "unknown",
    // },
  ];

  // this event is called from account component & subscribed for being listen in new-account component
  statusUpdated = new EventEmitter<string>();

  onAccountAdded(newAccount: { name: string; status: string }) {
    this.accounts.push(newAccount);
    // here calling a function of another service from a service
    this.logginService.logInfo(newAccount.status);
  }
  onStatusChanged(updateInfo: { id: number; newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    // here calling a function of another service from a service
    this.logginService.logInfo(updateInfo.newStatus);
  }
}
