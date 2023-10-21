export class WishItem {
	constructor(public wish: string, public isComplete?: boolean) {
		this.wish = wish;
		this.isComplete = isComplete;
	}
}