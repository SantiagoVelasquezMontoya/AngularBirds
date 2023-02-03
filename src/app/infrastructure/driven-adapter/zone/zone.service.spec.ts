import { IZoneModel } from './../../../domain/models/zone/zone.model';
import { TestBed } from '@angular/core/testing';

import { ZoneService } from './zone.service';
import { ZoneUseCase } from 'src/app/domain/usecases/zone.usecase';
import { ZoneGateway } from 'src/app/domain/models/zone/gateway/zone.gateway';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('ZoneService', () => {
  let service: ZoneService;
  let useCase: ZoneUseCase;
  let gateWay: ZoneGateway;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ZoneUseCase, ZoneGateway, ZoneService],
    });
    service = TestBed.inject(ZoneService);
    useCase = TestBed.inject(ZoneUseCase);
    gateWay = TestBed.inject(ZoneGateway);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('SHould return an Array of type IZoneModel', () => {
    const expectedResult = new Array<IZoneModel>();
    service.getZones().subscribe((res) => {
      let result = res;
      expect(result).toEqual(expectedResult);
    });
  });
});
