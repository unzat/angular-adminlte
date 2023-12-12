import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';

const routes: Routes = [
  {path: '', component: PagesComponent,
  children:[
    {path:'', component: DashboardComponent, data: {title: 'Dashboard'}},
    {path:'usuarios', component: UsuariosComponent, data: {title: 'Usuarios'}},
    {path:'productos', component: ProdutosComponent, data: {title: 'Productos'}},
    {path:'clientes', component: ClientesComponent, data: {title: 'Clientes'}},
  ]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
