import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-documents-user',
  templateUrl: './update-documents-user.component.html',
  styleUrls: ['./update-documents-user.component.css']
})
export class UpdateDocumentsUserComponent implements OnInit {

  showUpdateDoc: boolean = false;

  constructor( private router: Router ) { }

  ngOnInit(): void {  }

  goInfoUser() {
    this.router.navigateByUrl('/dashboard/usuarios/detalles');
  }

  nextSelectDoc() {
    console.log('Mostrar el documento que se debe actualizar...');
    this.showUpdateDoc = true;
  }

  updateNewDocSelect() {
    console.log('Actualizar documento...');
    document.getElementById('modal-1').setAttribute('open', 'true')
  }

  closeModal( event ) {
    console.log('cerrar modal... ', event)
    this.router.navigateByUrl('/dashboard/usuarios/detalles');
  }

}
