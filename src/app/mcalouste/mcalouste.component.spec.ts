import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McalousteComponent } from './mcalouste.component';

describe('McalousteComponent', () => {
  let component: McalousteComponent;
  let fixture: ComponentFixture<McalousteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [McalousteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McalousteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
