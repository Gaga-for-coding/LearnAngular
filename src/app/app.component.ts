import { Component, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  items: WishItem[] = [
          new WishItem("Buy a Nissan Almera"),
          new WishItem("Buy a High end Machine", false)
  ]
  title = 'wishList';

    ngOnInit(): void {
    }
}
