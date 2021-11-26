import {Component} from '@angular/core';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    p {
    padding: 20px;
    border: 1px solid red;
    background-color: pink
}
    `],
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'is up';
    isAllowed = false;
    isServerAdded = false;
    serverStatusString = 'No server is added';
    serverName = 'predefined name for two-way-binding test';
    constructor(){
        setTimeout(() => {
            this.isAllowed = true;
        }, 2000);
    }
    getServerStatus():string {
        return this.serverStatus;
    }

    onClickAddServerBtn() {
        this.serverStatusString = 'Server has been added with name ' + this.serverName;
        this.isServerAdded = true;
    }

    onUpdateServerName(event: any) {
        console.log(event);
        this.serverName = (<HTMLInputElement>event.target).value;
    }
    
}