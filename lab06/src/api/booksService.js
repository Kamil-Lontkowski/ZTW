import { postData, patchData, urlSearchParams, deleteData } from "./apiMethods";
export class booksService {

  constructor(baseURL = "http://localhost:8080") {
    if (baseURL.endsWith("/")) {
      this.baseURL = baseURL + "books";
    } else {
      this.baseURL = baseURL + "/books";
    }
  }

  async function getAllBooks() {
    const response = await fetch(this.baseURL);
    return response.json();
  }
  
  async function getBookById(id) {
    const response = await fetch(this.baseURL + "/" + id.toString())
    return response.json();
  }
  
  async function deleteBookById(id) {
    return deleteData(this.baseURL + "/" + id.toString())
  }
  
  async function addBook(book) {
    return postData(this.baseURL, book);
  }
  
  async function updateBook(book) {
    return patchData(this.baseURL, book)
  }

}
