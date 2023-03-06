import { rest } from "msw";
import { books } from "../books";

const userBooks = books.filter(
  (book) =>
    book.status === "to-read" ||
    book.status === "reading" ||
    book.status === "completed"
);

export const handlers = [
  rest.get("http://localhost:3030/allbooks", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([...books]));
  }),

  rest.get("http://localhost:3030/user/books", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([...userBooks]));
  }),
];
