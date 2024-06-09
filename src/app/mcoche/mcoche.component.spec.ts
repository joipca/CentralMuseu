import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCocheComponent } from './mcoche.component';

describe('MCocheComponent', () => {
  let component: MCocheComponent;
  let fixture: ComponentFixture<MCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MCocheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
