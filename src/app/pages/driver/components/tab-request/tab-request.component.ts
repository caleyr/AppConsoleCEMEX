import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-request',
  templateUrl: './tab-request.component.html',
  styleUrls: ['./tab-request.component.css']
})
export class TabRequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  editarDriver() {
    console.log('aqui editamos el driver...')
  }

  rejectRequest() {
    console.log('aqui actulaizamos los documentos del driver...')
  }

  acceptRequest() {
    console.log('aqui asignamos una cita al driver...')
  }

}
