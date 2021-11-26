import { ServerResolverService } from "./servers/server/server-resolver.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth-guard.service";

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "users",
    component: UsersComponent,
    children: [
      {
        path: ":id/:name",
        component: UserComponent,
      },
    ],
  },

  {
    path: "servers",
    component: ServersComponent,
    // we can use canActivate to set guards on this and its child routes
    // OR we can use canActivateChild to set guards on its child routes only
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ":id",
        // passing dynamic data to this route. Resolve's data can be accessed by 'data' property of active route
        resolve: { 'server': ServerResolverService },
        component: ServerComponent,
      },
      {
        path: ":id/edit",
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },

  {
    path: "not-found",
    // passing a static data to this route
    data: { message: "route not found!" },
    component: ErrorPageComponent,
  },
  {
    path: "**",
    redirectTo: "/not-found",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
