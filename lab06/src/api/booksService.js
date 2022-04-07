import { postData, patchData, deleteData } from "./apiMethods";
export class booksService {

  constructor(baseURL = "http://localhost:8080") {
    if (baseURL.endsWith("/")) {
      this.baseURL = baseURL + "books";
    } else {
      this.baseURL = baseURL + "/books";
    }
  }

  async  getAllBooks() {
    const response = await fetch(this.baseURL);
    return response.json();
  }
  
  async getBookById(id) {
    const response = await fetch(this.baseURL + "/" + id.toString())
    return response.json();
  }
  
  async deleteBookById(id) {
    return deleteData(this.baseURL + "/" + id.toString())
  }
  
  async addBook(book) {
    return postData(this.baseURL, book);
  }
  
  async updateBook(book) {
    return patchData(this.baseURL, book)
  }

}
