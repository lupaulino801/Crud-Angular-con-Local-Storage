import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

pers: Personas []  = []
updte:boolean = false;
constructor(private formbul: FormBuilder, private _navig: Router){
  this.getLocalStor();

}
myForm: FormGroup = this.formbul.group({
  nombre: ['', [Validators.required, Validators.minLength(2) ]],
  ciudad: ['', [Validators.required, Validators.minLength(5) ]],
  profesion: ['', [Validators.required, Validators.minLength(3) ]]

});

showerror(fields:string):any{
  var field = this.myForm.get(fields);

  if(field?.hasError('required')){
    return "Este cambpo es requerido";
  }
  if(field?.hasError('minlength')){
    return "Este nombre es muy corto";
  }

}

sendForm():void{
  if(this.myForm.valid){
    const persona: Personas = this.myForm.value;
    this.pers.push(persona);
    this.guardarProductos();

  }
}

getLocalStor():Personas [] {
  this.pers = JSON.parse(localStorage.getItem('personas') || '[]');
   return this.pers

}

private guardarProductos(): void {
  localStorage.setItem('personas', JSON.stringify(this.pers));
}

update(i:number){
  this._navig.navigate(['update', i]);

}






}

export interface Personas {
  nombre: string,
  ciudad: string,
  profesion: string

}


