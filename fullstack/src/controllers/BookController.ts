import type { Request, Response } from 'express';
import { books } from '../data/Books.js';
import { Book } from '../models/Book.js';

export class BookController {
  static index(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Books";
    viewData["books"] = books;

    res.render('books/index', {viewData: viewData});
  }

  static show(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Book Details";
    viewData["book"] = Book.findById(books, parseInt(req.params.id));

    res.render('books/show', {viewData: viewData});
  }
}