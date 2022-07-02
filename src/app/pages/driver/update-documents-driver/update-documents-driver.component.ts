import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-documents-driver',
  templateUrl: './update-documents-driver.component.html',
  styleUrls: ['./update-documents-driver.component.css']
})
export class UpdateDocumentsDriverComponent implements OnInit {

  showUpdateDoc: boolean = false;
  showNameFile: boolean = false;

  constructor( private router: Router ) { }

  ngOnInit(): void {
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
    this.router.navigateByUrl('/dashboard/driver');
  }
  
}
