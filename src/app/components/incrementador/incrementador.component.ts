import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  //Decorador @ViewChild se usa para referenciar elementos del HTML el cual recibe como parámetro el nombre identificador del elemento (#nombreDeLaVariable)
  @ViewChild('txtProgress') txtProgress: ElementRef;
  // Elementos que se heredan del padre y se setean en el HTML del padre através de los valores definidios acontinuación
  @Input() leyenda: string = '';
  @Input() porcentaje: number = 0;
  // Elementos que se le pasan al padre con el decorador @Output. Estos los recibirá en el HTML através del valor "cambioValor"
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChange(newValue: number){
  
    if (newValue >= 100) {
      this.porcentaje = 100;
    }else if(newValue <= 0){
      this.porcentaje = 0;
    }else{
      this.porcentaje = newValue;
    }
    this.txtProgress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
  }

  cambiarValor(valor) {
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje += valor;
    this.cambioValor.emit(this.porcentaje);
  }
}
