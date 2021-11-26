import { AccountsService } from './../services/accounts.service';
import { LoggingService } from './../services/logging.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  @Input() account: {name: string, status: string};
  @Input() id: number;
 
  constructor(private accountsService: AccountsService) {}
 
  onSetTo(status: string) {
    this.accountsService.onStatusChanged({id: this.id, newStatus: status});
    // emiting an event (which is present in service class) from this component
    this.accountsService.statusUpdated.emit(status);
  }
}
