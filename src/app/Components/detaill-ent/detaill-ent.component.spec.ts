import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillEntComponent } from './detaill-ent.component';

describe('DetaillEntComponent', () => {
  let component: DetaillEntComponent;
  let fixture: ComponentFixture<DetaillEntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillEntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaillEntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
