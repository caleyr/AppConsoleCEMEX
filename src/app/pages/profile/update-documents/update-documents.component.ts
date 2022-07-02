import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-documents',
  templateUrl: './update-documents.component.html',
  styleUrls: ['./update-documents.component.css']
})
export class UpdateDocumentsComponent implements OnInit {

  showUpdateDoc: boolean = false;
  showNameFile: boolean = false;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  nextSelectDoc() {
    console.log('Mostrar el documento que se debe actualizar...');
    this.showUpdateDoc = true;
  }

  showCamera() {
    console.log('Mostrar la camara...');
    this.showNameFile = true;
  }

  uploadFile() {
    console.log('Cargar archivo...');
    this.showNameFile = true;
  }

  cancelFile() {
    console.log('Cancelar el archivo...');
    this.showNameFile = false;
  }

  updateNewDocSelect() {
    console.log('Actualizar documento...');
    document.getElementById('modal-1').setAttribute('open', 'true')
  }

  closeModal( event ) {
    console.log('cerrar modal... ', event)
    this.router.navigateByUrl('/dashboard/perfil');
  }

}
