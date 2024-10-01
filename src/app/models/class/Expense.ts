export class Expense {
    userId : string;
    category : string;
    amount : number;
    note : string;

    constructor(userId : string) {
        this.userId = userId;
        this.category = '';
        this.amount = 0;
        this.note = '';
    }
}