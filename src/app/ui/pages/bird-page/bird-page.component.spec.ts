import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdPageComponent } from './bird-page.component';

describe('BirdPageComponent', () => {
  let component: BirdPageComponent;
  let fixture: ComponentFixture<BirdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
