import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let h2: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h2 = fixture.nativeElement.querySelector('h2');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an h2 tag with a title', () => {
    expect(h2.textContent).toContain('Header');
  });

  it('should add  a + b', () => {
    //Arrange
    let a: number = 5;
    let b: number = 10;
    //Action
    let result: number = component.add(a, b);
    //Assert
    expect(result).toEqual(15);
  });

  it('should throw an error if', () => {
    expect(component).toThrowError('NO');
  });
});
