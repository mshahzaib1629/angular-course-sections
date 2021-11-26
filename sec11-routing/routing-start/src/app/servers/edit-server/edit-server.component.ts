import { ActivatedRoute, Params, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { CanComponentDeactivate } from "./can-deactivate-guard.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  isEditable = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // for just getting snapshot value
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    // for listening to changes:
    this.route.queryParams.subscribe((params: Params) => {
      this.isEditable = params["allowEdit"] == "1" ? true : false;
    });
    this.route.fragment.subscribe();
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params["id"]);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  // this function defines our logic of canDeactivate guard. 
  // It is defined by implementing our own defined interface i.e. CanComponentDeactivate
  canDeactivateMethod(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.isEditable) {
      return true;
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm("Are you sure to leave without saving changes?");
    } else return true;
  }
}
