import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursmentComponent } from './reimbursment.component';

describe('ReimbursmentComponent', () => {
  let component: ReimbursmentComponent;
  let fixture: ComponentFixture<ReimbursmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReimbursmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReimbursmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
