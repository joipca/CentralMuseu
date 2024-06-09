import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAzulejoComponent } from './mazulejo.component';

describe('MAzulejoComponent', () => {
  let component: MAzulejoComponent;
  let fixture: ComponentFixture<MAzulejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MAzulejoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MAzulejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
