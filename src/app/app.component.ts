import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyserService } from './myser.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor,NgIf, NgClass, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recipe-application';

dataList:any = []

description:any;

isView= true;

Ingredents:any = []

search:any="";

  constructor(private servive: MyserService){

    this.servive.getAll().subscribe(
      {
        next: (data:any) =>{
         

          this.dataList = data.meals;
          
        }
      }
    );

  }


  showRecipe(Recipe:any){

    this.isView = !this.isView;
    console.log(Recipe);
    let res = this.fetchIngredients(Recipe)


    this.description = Recipe.strInstructions;

    this.title = Recipe.strMeal;

   

    
    

  }

  hideRecipe(){
    this.isView = true;
  }

fetchIngredients(meal:any){
    let ingredientsList = "";
    for(let i=1; i<=20; i++){
        const ingredient = meal[`strIngredient${i}`];
        if(ingredient){
            const measure = meal[`strMeasure${i}`];
            // ingredientsList += `${measure} ${ingredient} \n`
            this.Ingredents.push(ingredient);
        }
        else{
            break;
        }
    }
    return ingredientsList;
}

submitBtn(){



  this.servive.getRecipe(this.search).subscribe(
    {
      next: (data:any) =>{


        this.dataList = data.meals;
        
      }
    }
  );


}
}

