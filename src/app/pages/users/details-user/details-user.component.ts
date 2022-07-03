import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { UserDetail } from '../../../interfaces/UserDetail';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {

  user : UserDetail;

  id : string;

  showModalTrip: boolean = false;

  constructor( 
    private router: Router,
    private userService : UserService
     ) { }

  ngOnInit(): void { 
    this.getData();
   }

  goUsers() {
    this.router.navigateByUrl('/dashboard/usuarios');
  }

  getData(){
    if(this.userService.id !== null){
      this.id = this.userService.id;
      this.userService.getUserDetail(this.id).subscribe(data=>{
        this.user = data;
      });
    }    
  }

  assignTrip() {
    console.log('asignar viaje...')
    this.showModalTrip = true;
    document.getElementById('modal-assign-trip').setAttribute('open', 'true')
  }

  callUser() {
    console.log('llamar al usuario...')
  }

  editDataUser() {
    console.log('editar datos del usuario...')
    this.router.navigateByUrl('/dashboard/usuarios/actualizar');
  }

  updateDocumentsUser() {
    console.log('Actualizar documentos del usuario...') 
    this.router.navigateByUrl('/dashboard/usuarios/actualizar-documentos');
  }

  assignTripUser() {
    console.log('Asignar viaje... ')  
    this.showModalTrip = false;
    document.getElementById('modal-assign-trip').setAttribute('open', 'false')
    document.getElementById('modal-confirm').setAttribute('open', 'true')
  }

  closeModalAssignTrip( event ) {
    this.showModalTrip = false;
    console.log('cerrar modal... ', event)  
  }
  
  closeModalConfirm( event ) {
    console.log('cerrar modal... ', event)
  }

}
