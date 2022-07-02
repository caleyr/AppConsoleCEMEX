import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-request-user',
  templateUrl: './detail-request-user.component.html',
  styleUrls: ['./detail-request-user.component.css']
})
export class DetailRequestUserComponent implements OnInit {

  showModalReject: boolean = false;

  constructor( private router: Router ) { }

  ngOnInit(): void {  }

  goUsers() {
    this.router.navigateByUrl('/dashboard/usuarios');
  }

  callUser() {
    console.log('llamar al usuario...')
  }

  rejectRequest() {
    console.log('rechazar solicitud...')
    this.showModalReject = true;
    document.getElementById('modal-reject-request').setAttribute('open', 'true')
  }

  acceptRequest() {
    console.log('aceptar solicitud...')
  }

  modalBtnAccept() {
    console.log('aceptar el rechazo de la solicitud... ')  
    this.showModalReject = false;
    document.getElementById('modal-reject-request').setAttribute('open', 'false')
    document.getElementById('modal-confirm-reject-request').setAttribute('open', 'true')
  }

  closeModalRejectRequest( event ) {
    this.showModalReject = false;
    console.log('cerrar modal... ', event)  
  }
  
  closeModalConfirmReject( event ) {
    console.log('cerrar modal... ', event)
  }

}
