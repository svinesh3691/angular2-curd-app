import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }   		from '../components/home/home.component';
import { AboutComponent }   	from '../components/about/about.component';
import { ListComponent }   		from '../components/curd/list.component';
import { EditComponent }   		from '../components/curd/edit.component';
import { AddComponent }   		from '../components/curd/add.component';


const routes: Routes = [
	  { path: '', redirectTo: '/home', pathMatch: 'full' },
	  { path: 'home',  component: HomeComponent },
	  { path: 'about',  component: AboutComponent },
	  { path: 'curd',  	component: ListComponent },
	  { path: 'curd-add', component: AddComponent },
	  { path: 'curd-edit/:id', component: EditComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class RoutingModule {}