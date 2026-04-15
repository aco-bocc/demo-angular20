import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'bocc-master-icon',
  standalone: true,
  imports: [],
  templateUrl: './master-icon.component.html',
  styleUrl: './master-icon.component.scss',
})
export class MasterIconComponent {
  /** Name of the icon file in assets/icoins/ (without .svg extension) */
  public name = input.required<string>();

  /** Size of the icon (e.g., '24px', '1rem') */
  public size = input<string>('24px');

  /** Color theme of the icon */
  public color = input<'default' | 'brand' | 'disable'>('default');

  /** Computed path to the SVG asset */
  public iconPath = computed(() => `assets/icoins/${this.name()}.svg`);
}
