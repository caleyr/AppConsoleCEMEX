import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  showNameFile: boolean = false;

  constructor() { }

  ngOnInit(): void {
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
}
