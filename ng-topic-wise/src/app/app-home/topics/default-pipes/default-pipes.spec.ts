import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPipes } from './default-pipes';

describe('DefaultPipes', () => {
  let component: DefaultPipes;
  let fixture: ComponentFixture<DefaultPipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultPipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultPipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
