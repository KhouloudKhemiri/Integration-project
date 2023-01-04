import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerePublComponent } from './gere-publ.component';

describe('GerePublComponent', () => {
  let component: GerePublComponent;
  let fixture: ComponentFixture<GerePublComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerePublComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerePublComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
