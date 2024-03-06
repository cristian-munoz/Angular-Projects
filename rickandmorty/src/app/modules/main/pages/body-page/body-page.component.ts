import { Component, OnDestroy, OnInit } from '@angular/core';
import { RMCharsService } from '../../services/rmchars.service';

@Component({
  selector: 'app-body-page',
  //standalone: true,
  //imports: [],
  templateUrl: './body-page.component.html',
  styleUrl: './body-page.component.css'
})
export class BodyPageComponent implements OnInit, OnDestroy {
  listRMChars: Array<any> = [];
  constructor(private rmCharsService: RMCharsService) { }
  
  ngOnInit(): void {
    this.loadRMCharsData();
  }

  loadRMCharsData(): void{
    this.rmCharsService.getRMCharactersByPage$(1).subscribe(
      (response: any) => {
        console.log('getting RM characters --->', response);
        this.listRMChars = response;
      }, err => {
        console.log('Connection Error --->', err);
      }
    )
  }

  ngOnDestroy(): void {
    
  }
}
