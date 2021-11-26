import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload () {
    // these three navigations mean localHost:4200/servers
    this.router.navigate(['servers']);
    // this.router.navigate(['/servers']);
    // this.router.navigate(['/servers'], {relativeTo: this.route});
    // ------
    // But following navigation means localHost:4200/servers/servers (as localHost:4200/servers is already an activePath)
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }
}
