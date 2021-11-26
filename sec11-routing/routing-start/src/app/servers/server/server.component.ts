import { ActivatedRoute, Data, Params, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // getting params value via snapshot
    // var serverId: number = +this.route.snapshot.params.id;
    // this.server = this.serversService.getServer(serverId);

    // getting params value via observable / subscription (for listening updates)
    // this.route.params.subscribe((params: Params) => {
    //   var serverId: number = +params.id;
    //   this.server = this.serversService.getServer(serverId);
    // });

    
    // getting direct server via Resolver. 
    // By this approach, we will have server data even before loading this component.
    // This approach is benificial incase of asyncrouneous responses

    // i) via snapshot
    // this.server = this.route.snapshot.data['server'];
    
    // ii) via observable / subscription
    this.route.data.subscribe((data: Data) => {
      console.log(data);
      this.server = data['server'];
    });
  }

  onEditClick() {
    // queryParamsHandling: 'preserve' is used to pass the queryParams of current active route to this one
    this.router.navigate(["edit"], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }
}
