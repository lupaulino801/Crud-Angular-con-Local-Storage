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
        next: (resp) => {
        this.id = resp['i'];
        this.pers = JSON.parse(localStorage.getItem('personas') || '[]');
        var mi = this.pers[this.id];

        const forValue = { nombre: mi.nombre, ciudad: mi.ciudad, profesion: mi.profesion  };
        this.myForm.patchValue(forValue);

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
    this.pers = JSON.parse(localStorage.getItem('personas') || '[]');
    const persona: Personas = this.myForm.value;

    this.pers.splice(idx, 1, persona);
    localStorage.setItem('personas', JSON.stringify(this.pers));
    this._nv.navigate(['']);


  }

}

export interface Personas {
  nombre: string,
  ciudad: string,
  profesion: string

}
