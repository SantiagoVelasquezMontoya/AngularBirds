import { ZoneUseCase } from './../../../domain/usecases/zone.usecase';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss'],
})
export class ZoneComponent implements OnInit {
  constructor(private zoneUseCase: ZoneUseCase) {}

  data: any = {
    id: 1,
    zoneName: 'Tropical',
  };

  ngOnInit(): void {
    this.zoneUseCase.createZone(this.data).subscribe((res) => {
      console.log(res);
    });
  }
}
