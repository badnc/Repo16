class Book {
    constructor(title){
        this._title = title;
    }
    //getter
    get title () {
        return this._title;
    }
    //setter
    set title(newTitle) {
        this._title = newTitle;
    }
}
const LePetitPrince = new Book("Le Petit Prince ");
console.log(LePetitPrince .title);
LePetitPrince.title = LePetitPrince.title;
console.log(LePetitPrince .title);
module.exports = Book;