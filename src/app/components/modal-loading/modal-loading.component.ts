import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-loading',
  templateUrl: './modal-loading.component.html',
  styleUrls: ['./modal-loading.component.css']
})
export class ModalLoadingComponent{

  @Input() title: '';
  @Input() message: '';
  @Input() loadingShow: true;

  constructor() { }

}
