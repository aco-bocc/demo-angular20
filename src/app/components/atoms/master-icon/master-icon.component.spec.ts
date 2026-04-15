import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterIconComponent } from './master-icon.component';
import { By } from '@angular/platform-browser';

describe('MasterIconComponent', () => {
  let component: MasterIconComponent;
  let fixture: ComponentFixture<MasterIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterIconComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MasterIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct Font Awesome icon', () => {
    fixture.componentRef.setInput('icon', 'star');
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.css('.bocc-master-icon')).nativeElement;
    expect(iconElement.classList).toContain('fa-solid');
    expect(iconElement.classList).toContain('fa-star');
  });

  it('should apply the correct font-size', () => {
    fixture.componentRef.setInput('icon', 'home');
    fixture.componentRef.setInput('size', '32px');
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.css('.bocc-master-icon')).nativeElement;
    expect(iconElement.style.fontSize).toBe('32px');
  });

  it('should apply the correct color', () => {
    fixture.componentRef.setInput('icon', 'bell');
    fixture.componentRef.setInput('color', 'red');
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.css('.bocc-master-icon')).nativeElement;
    expect(iconElement.style.color).toBe('red');
  });

  it('should use default size if not provided', () => {
    fixture.componentRef.setInput('icon', 'info');
    // size is not set, so it should default to '16px' as per component definition
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.css('.bocc-master-icon')).nativeElement;
    expect(iconElement.style.fontSize).toBe('16px');
  });
});
