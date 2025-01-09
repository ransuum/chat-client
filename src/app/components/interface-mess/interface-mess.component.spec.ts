import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceMessComponent } from './interface-mess.component';

describe('InterfaceMessComponent', () => {
  let component: InterfaceMessComponent;
  let fixture: ComponentFixture<InterfaceMessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceMessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceMessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
