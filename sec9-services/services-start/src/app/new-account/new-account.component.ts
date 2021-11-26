import { AccountsService } from "./../services/accounts.service";
import { LoggingService } from "./../services/logging.service";
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
})
export class NewAccountComponent {
  constructor(private accountsService: AccountsService) {
    // this status is being triggered by account component and is being listen in new-account component via Service
    this.accountsService.statusUpdated.subscribe((updatedStatus) =>
      alert("New Status: " + updatedStatus)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.onAccountAdded({
      name: accountName,
      status: accountStatus,
    });
  }
}
