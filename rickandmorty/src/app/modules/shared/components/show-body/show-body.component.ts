import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-body',
  //standalone: true,
  //imports: [],
  templateUrl: './show-body.component.html',
  styleUrl: './show-body.component.css'
})
export class ShowBodyComponent implements OnInit {
  @Input() tittle: string = '';
  @Input() listRMChars: Array<any> = [];

  customOptions: Array<any> = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    /*this.customOptions = [
      {
        name: "",
        router: ['/', 'detail']
      }
    ]*/
  }

  goTo($event: any, id: number): void{
    console.log($event);
    this.router.navigate(['main', 'detail'], {
      queryParams: {
        id_char: id
      }
    })
    
  }

}
