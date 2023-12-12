import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  menuItems?: any[];

  constructor(private service: SidebarService,
              private router: Router){
    this.menuItems = this.service.menu;
  }

  logout() {
    this.router.navigateByUrl('/login')
  }
}
