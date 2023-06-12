import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducDetailsComponent } from './produc-details.component';

describe('ProducDetailsComponent', () => {
  let component: ProducDetailsComponent;
  let fixture: ComponentFixture<ProducDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProducDetailsComponent]
    });
    fixture = TestBed.createComponent(ProducDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
