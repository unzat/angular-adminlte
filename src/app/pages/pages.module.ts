import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ClientesComponent } from './clientes/clientes.component';



@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    ProdutosComponent,
    PagesComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    UsuariosComponent,
    ProdutosComponent
  ]
})
export class PagesModule { }
