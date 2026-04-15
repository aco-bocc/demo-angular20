/**
 * UiSpinnerComponent – Angular 20 Standalone
 * ─────────────────────────────────────────────────────────────────
 * Reusable spinner/loading atom.
 * Provides both fullscreen overlay and inline loading modes.
 * Uses a radial segmented animation for visual feedback.
 * ─────────────────────────────────────────────────────────────────
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/** Supported spinner sizes. */
type SpinnerSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-spinner',
  standalone: true,
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSpinnerComponent {
  // ── Inputs ───────────────────────────────────────────────────────────────

  /** Controls whether the spinner is visible. */
  @Input() visible = true;

  /**
   * When true, renders the spinner as a fullscreen overlay.
   * When false, behaves as an inline loader inside its container.
   */
  @Input() fullScreen = true;

  /** Visual size of the spinner. */
  @Input() size: SpinnerSize = 'md';

  /** Accessible label for screen readers. */
  @Input() ariaLabel = 'Cargando contenido';

  // ── Derived state ────────────────────────────────────────────────────────

  /**
   * Resolves the container class.
   * Adds fullscreen modifier when required.
   */
  get containerClass(): string {
    return this.fullScreen ? 'spinner spinner--fullscreen' : 'spinner';
  }

  /**
   * Resolves the indicator class based on selected size.
   */
  get indicatorClass(): string {
    return `spinner__indicator spinner__indicator--${this.size}`;
  }
}
