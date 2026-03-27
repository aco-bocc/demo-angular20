import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsUserComponent } from './options-user.component';

describe('OptionsUserComponent', () => {
  let component: OptionsUserComponent;
  let fixture: ComponentFixture<OptionsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
