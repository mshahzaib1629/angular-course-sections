import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };

    // params.subscribe is used to listen updates to this route e.g. if 
    // we are at /users/8/Shahzaib and we set '/users/10/Max on same page
    // params.subscrtibe will help to listen the changes and update the DOM
    this.route.params.subscribe((params: Params) => {
      this.user = {
        id: this.route.snapshot.params['id'],
        name: this.route.snapshot.params['name'],
      };
    });
  }

  onLoadMaxClicked() {
    this.router.navigate(['/users', '10', 'Max']);
  }

}
