import { postData, patchData, deleteData } from "./apiMethods";

export class authorsService {

    constructor(baseURL = "http://localhost:8080") {
      if (baseURL.endsWith("/")) {
        this.baseURL = baseURL + "authors";
      } else {
        this.baseURL = baseURL + "/authors";
      }
    }
  
    async  getAllAuthors() {
      const response = await fetch(this.baseURL);
      return response.json();
    }
    
    async getAuthorById(id) {
      const response = await fetch(this.baseURL + "/" + id.toString())
      return response.json();
    }
    
    async deleteAuthorById(id) {
      return deleteData(this.baseURL + "/" + id.toString())
    }
    
    async addAuthor(author) {
      return postData(this.baseURL, book);
    }
    
    async updateAuthor(author) {
      return patchData(this.baseURL, book)
    }
  
  }
  