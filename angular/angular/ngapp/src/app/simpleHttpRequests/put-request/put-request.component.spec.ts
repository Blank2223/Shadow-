import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutRequestComponent } from './put-request.component';

describe('PutRequestComponent', () => {
  let component: PutRequestComponent;
  let fixture: ComponentFixture<PutRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PutRequestComponent]
    });
    fixture = TestBed.createComponent(PutRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
