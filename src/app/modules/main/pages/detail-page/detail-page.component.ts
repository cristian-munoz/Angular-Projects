import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RMCharsService } from '../../services/rmchars.service';
import { CharDataModel } from '../../../../core/models/charData.model';

@Component({
  selector: 'app-detail-page',
  //standalone: true,
  //imports: [],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css'
})
export class DetailPageComponent implements OnInit {

  id_char: string | null = '';
  detailCharData: CharDataModel[] = [];

  constructor(private route: ActivatedRoute, private rmCharService: RMCharsService){
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      console.log('Parameters taken -->', params);
      this.id_char = params.get('id_char');
      console.log('Id = ', this.id_char);
    })

    this.rmCharService.getSelectedCharDetail$(this.id_char)
    .subscribe( (response: any) => {
      this.detailCharData[0] = response;
    } )

    //console.log('Char Detail Data ---->', this.detailCharData);
  }

}
