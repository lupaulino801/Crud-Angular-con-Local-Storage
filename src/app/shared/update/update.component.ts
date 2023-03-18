import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  pers: Personas []  = [];

  constructor(private formbul: FormBuilder, private _param: ActivatedRoute){
  }
  ngOnInit(): void {
      this._param.params.subscribe({
        next: (resp) => {
        let ix = resp['i'];
        this.pers = JSON.parse(localStorage.getItem('personas') || '[]');
        var mi = this.pers[ix];
        const forValue = {
          nombre: mi.nombre,
          ciudad: mi.ciudad,
          profesion: mi.profesion
        };

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


  updtForm(){}

}

export interface Personas {
  nombre: string,
  ciudad: string,
  profesion: string

}
