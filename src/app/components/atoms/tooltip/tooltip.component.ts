/**
 * TooltipComponent – Angular 20 Standalone
 * ─────────────────────────────────────────────────────────────────
 * Independent tooltip atom. Displays a floating text balloon in
 * one of four orientations (top, bottom, left, right).
 * Controlled externally via show() / hide() public methods or
 * by setting the isVisible signal from a parent component.
 * Design reference: Figma "BOC (Dev)" – Section Tooltip
 *
 * @author  : Cristian Quintana / Contact & Business IT
 * @version : 1.0 – 2026/04/13 (Angular 20 rewrite with signals)
 * ─────────────────────────────────────────────────────────────────
 */
import { Component, input, signal, ChangeDetectionStrategy } from '@angular/core';

export type TooltipOrientation = 'top' | 'bottom' | 'left' | 'right';

@Component({
  selector: 'bocc-tooltip',
  standalone: true,
  imports: [],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
  host: {
    '[class]': '"orientation-" + orientation()',
    '[class.is-visible]': 'isVisible()',
    '[style.top.px]': 'y()',
    '[style.left.px]': 'x()',
    'style': 'position: absolute; z-index: 9999; pointer-events: none;'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {
  /** Text message to display */
  readonly message = input<string>('');

  /** Position of the tooltip relative to the trigger */
  readonly orientation = input<TooltipOrientation>('bottom');

  /** X Coordinate for fixed positioning */
  readonly x = signal<number>(0);

  /** Y Coordinate for fixed positioning */
  readonly y = signal<number>(0);

  /** Manual visibility control */
  readonly isVisible = signal(false);

  /** Toggle visibility */
  show() {
    this.isVisible.set(true);
  }

  hide() {
    this.isVisible.set(false);
  }
}
