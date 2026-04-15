import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type SpinnerSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-spinner',
  standalone: true,
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSpinnerComponent {
  @Input() visible = true;
  @Input() fullScreen = true;
  @Input() size: SpinnerSize = 'md';
  @Input() ariaLabel = 'Cargando contenido';

  get containerClass(): string {
    return this.fullScreen ? 'spinner spinner--fullscreen' : 'spinner';
  }

  get indicatorClass(): string {
    return `spinner__indicator spinner__indicator--${this.size}`;
  }
}
