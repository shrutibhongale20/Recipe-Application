import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserService {

  url = "https://www.themealdb.com/api/json/v1/1/search.php?s="

  

  constructor(private http: HttpClient) {
   }


   getAll(){
    return this.http.get(this.url);
   }

   getRecipe(query:any){
 
    
    return this.http.get(`${this.url+query}`)
   }
}
