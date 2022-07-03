import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetail } from '../../../interfaces/UserDetail';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-detail-request-user',
  templateUrl: './detail-request-user.component.html',
  styleUrls: ['./detail-request-user.component.css']
})
export class DetailRequestUserComponent implements OnInit {

  user : UserDetail;  
  id : string;

  showModalReject: boolean = false;

  constructor( 
    private router: Router,
    private userService : UserService
  ) { }

  ngOnInit(): void {  
    this.getData();
  }

  getData(){
    if(this.userService.id !== null){
      this.id = this.userService.id;
      this.userService.getUserDetail(this.id).subscribe(data=>{
        this.user = data;
        this.userService.id = null;
      });
    }    
  }

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
    var data : FormData = new FormData();
    data.append('Email', this.user.email);
    data.append('Status', '2');
    this.userService.activateUser(this.user.email, data).subscribe(()=>{
      document.getElementById('modal-ok').setAttribute('open', 'true')
    });
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

  buttonBack(){
    this.router.navigateByUrl('dashboard/usuarios');
  }

}
