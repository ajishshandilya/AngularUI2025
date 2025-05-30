import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorComponent } from './decorator.component';

describe('DecoratorComponent', () => {
  let component: DecoratorComponent;
  let fixture: ComponentFixture<DecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecoratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
