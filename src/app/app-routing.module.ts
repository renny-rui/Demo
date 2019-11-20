
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ParkingComponent } from './parking/parking.component';
import { FormfieldComponent } from './formfield/formfield.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutComponent } from './layout/layout.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'parking',
  component: ParkingComponent
  },
  { path: 'formfield',
  component: FormfieldComponent
  },
  { path: 'navigation',
  component: NavigationComponent
  },
  { path: 'layout',
  component: LayoutComponent
  },
  { path: 'role',
  component: RoleComponent
  },
  { path: '**',
  component: LoginComponent
  },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
