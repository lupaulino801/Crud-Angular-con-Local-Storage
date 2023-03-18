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
    const persona: Personas = this.myForm.value;    // igualamos persona al valor de lo que viene del formulario
    this.pers.push(persona);  /// agregamos array con push lo que venga en persona
    this.guardarProductos();   /// guardamos los datos con esta funcion

  }
}

getLocalStor():Personas [] {   // ojo ver [] ya que con esto decimos que retornamos un arreglo de Personas

  this.pers = JSON.parse(localStorage.getItem('personas') || '[]');    /// leemos y convertimos en objeto con JSON.parse
   return this.pers   // retornarmos a la persona

}

private guardarProductos(): void {

  localStorage.setItem('personas', JSON.stringify(this.pers));   ///  setItem para guardar en el local storage  lo que este dentro de SON.stringify donde esto sierve para
                                                                 // guardar convertir un objeto en una cadena de texto, ya que el local storage solo guarda texto

}

update(i:number){

  this._navig.navigate(['update', i]); // aqui navegamos

}

detele(ix:any){

  this.pers = JSON.parse(localStorage.getItem('personas') || '[]');  /// leemos el local storage y lo convertimos en array
  this.pers.splice(ix, 1);   /// le pasamos el splice borrar el ix, si le pongo ix,3 borraria 3 elemento pero como quiero solo el elemnto ix pongo ix,1
  this.guardarProductos();  // guardamos

}






}

export interface Personas {
  nombre: string,
  ciudad: string,
  profesion: string

}


