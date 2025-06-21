import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletDrivenForm } from './templet-driven-form';

describe('TempletDrivenForm', () => {
  let component: TempletDrivenForm;
  let fixture: ComponentFixture<TempletDrivenForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempletDrivenForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempletDrivenForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
