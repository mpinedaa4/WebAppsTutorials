export class Book {
  constructor(
    public id: number,
    public title: string,
    public category: string,
    public price: number,
    public stock: number
  ) { }

  public static findById(books: Book[], id: number): Book {
    const book = books.find(book => book.getId() === id);
    if (!book) {
      throw new Error(`Book with id ${id} not found`);
    }
    return book;
  }

  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getCategory(): string {
    return this.category;
  }

  public setCategory(category: string): void {
    this.category = category;
  }

  public getPrice(): number {
    return this.price/100;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public getStock(): number {
    return this.stock;
  }

  public setStock(stock: number): void {
    this.stock = stock;
  }
}
