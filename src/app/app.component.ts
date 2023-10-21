import { Component, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	items: WishItem[] = [
		new WishItem('Buy a Nissan Almera'),
		new WishItem('Buy a High end Machine', true)
	];
	title = 'wishList';
    newWish: any

	ngOnInit(): void {
	}

	addWish() {
      this.items.push(new WishItem(this.newWish))
      this.newWish = ''
	}

	toggleItem(item: any) {
		item.isComplete = !item.isComplete;
		console.log(item);
	}
}
