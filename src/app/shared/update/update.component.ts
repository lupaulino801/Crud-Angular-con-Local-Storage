import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  pers: Personas []  = [];
  id:any;

  constructor(private formbul: FormBuilder, private _param: ActivatedRoute, private _nv: Router){
  }
  ngOnInit(): void {

      this._param.params.subscribe({
        next: (resp) => {   /// recibimos el paramtro de la ruta
        this.id = resp['i'];
        this.pers = JSON.parse(localStorage.getItem('personas') || '[]');   /// leemos
        var mi = this.pers[this.id];   // igualamos el objeto a la varible mi

        const forValue = { nombre: mi.nombre, ciudad: mi.ciudad, profesion: mi.profesion  };   /// objero de valor por defecto del form
        this.myForm.patchValue(forValue);  // aqui pondemos el valor por defecto al form

        }
      }

      )
  }


  myForm: FormGroup = this.formbul.group({
    nombre: ['', ],
    ciudad: ['', ],
    profesion: ['',]

  });


  updtForm(idx:number){
    this.pers = JSON.parse(localStorage.getItem('personas') || '[]');  // leeems
    const persona: Personas = this.myForm.value;  // igualamos en Persona el valor del formulario

    this.pers.splice(idx, 1, persona);  // actuliamos el registro del id que llego por la url, con esta
    localStorage.setItem('personas', JSON.stringify(this.pers));   // guardamos con setItem en el local storage
    this._nv.navigate(['']);   // navegamos a home


  }

}

export interface Personas {
  nombre: string,
  ciudad: string,
  profesion: string

}
