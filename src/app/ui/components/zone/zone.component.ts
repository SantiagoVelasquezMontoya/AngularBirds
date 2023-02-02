import { IZoneModel } from './../../../domain/models/zone/zone.model';
import { ZoneUseCase } from './../../../domain/usecases/zone.usecase';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss'],
})
export class ZoneComponent implements OnInit {
  constructor(private zoneUseCase: ZoneUseCase) {}
  zoneName: string;
  currentZones: IZoneModel[] | any = [];
  //Update
  updateZoneName: string;

  data: any = {
    id: 1,
    zoneName: 'Tropical',
  };

  ngOnInit(): void {
    this.zoneUseCase.getZones().subscribe((res) => {
      this.currentZones = res;
    });
  }

  onSubmit() {
    const data: IZoneModel = {
      zoneName: this.zoneName,
    };
    this.zoneUseCase.createZone(data).subscribe((res) => {
      console.log(res);
      this.zoneName = '';
    });
  }

  onDelete(id: number) {
    console.log('Deleting', id);
    this.zoneUseCase.deleteZone(id).subscribe((res) => {
      console.log(res);
    });
  }

  onUpdate(zone: IZoneModel) {}
}
