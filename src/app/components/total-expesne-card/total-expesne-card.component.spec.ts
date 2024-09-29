import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalExpesneCardComponent } from './total-expesne-card.component';

describe('TotalExpesneCardComponent', () => {
  let component: TotalExpesneCardComponent;
  let fixture: ComponentFixture<TotalExpesneCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalExpesneCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalExpesneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
