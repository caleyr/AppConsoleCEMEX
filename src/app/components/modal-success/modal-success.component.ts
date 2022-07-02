import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html',
  styleUrls: ['./modal-success.component.css']
})
export class ModalSuccessComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() urlButton: string;
  @Input() textButton: string;
  @Input() alertShow: false;
  
  constructor(
    private router : Router) { }

  ngOnInit(): void {
  }

  go(){
    this.alertShow = false;
    this.router.navigateByUrl(this.urlButton);
  }

}
