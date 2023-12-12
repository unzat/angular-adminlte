import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
  {
    title: 'Mantenimientos',
    icon: 'fas fa-folder-open',
    submenu: [
      {title: 'Usuarios', url: 'usuarios', icon: 'fas fa-users'},
      {title: 'Productos', url: 'productos', icon: 'fas fa-cubes'},
      {title: 'Clientes', url: 'clientes', icon: 'fas fa-user-circle'},
    ]
  }];

  constructor() { }
}
