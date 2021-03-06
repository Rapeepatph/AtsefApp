import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit,OnDestroy {
  status: boolean;
  subscription:Subscription;
  constructor(private userService:UserService) { }

  
  logout() {
    this.userService.logout();       
  }
  ngOnInit() {
  this.subscription = this.userService.authNavStatus$.subscribe(status => this.status = status);
  }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}
