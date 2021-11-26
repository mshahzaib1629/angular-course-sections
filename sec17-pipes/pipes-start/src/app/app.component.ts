import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  filteredStatus: string = "";

  futureValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello from future");
    }, 2000);
  });
  servers = [
    {
      instanceType: "medium",
      name: "Production",
      status: "stable",
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: "large",
      name: "User Database",
      status: "stable",
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: "small",
      name: "Development Server",
      status: "offline",
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: "small",
      name: "Testing Environment Server",
      status: "stable",
      started: new Date(15, 1, 2017),
    },
  ];
  getStatusClasses(server: {
    instanceType: string;
    name: string;
    status: string;
    started: Date;
  }) {
    return {
      "list-group-item-success": server.status === "stable",
      "list-group-item-warning": server.status === "offline",
      "list-group-item-danger": server.status === "critical",
    };
  }

  addNewServer() {
    const newServer = {
      instanceType: "large",
      name: "New Testing Server",
      status: "critical",
      started: new Date(15, 1, 2017),
    };
    this.servers.push(newServer);
  }
}
