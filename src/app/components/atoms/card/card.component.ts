/**
 * UiCardComponent – Angular 20 Standalone
 * ─────────────────────────────────────────────────────────────────
 * Reusable card/container atom.
 * Provides configurable padding, border radius, and height behavior.
 * Designed to wrap arbitrary content using content projection.
 * ─────────────────────────────────────────────────────────────────
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/** Supported padding sizes. */
type CardPadding = 'none' | 'sm' | 'md' | 'lg';

/** Supported border radius sizes. */
type CardRadius = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardComponent {
  // ── Inputs ───────────────────────────────────────────────────────────────

  /** Controls internal spacing of the card. */
  @Input() padding: CardPadding = 'md';

  /** Controls border radius of the card. */
  @Input() radius: CardRadius = 'md';

  /**
   * When true, the card stretches to fill the available height
   * of its parent container.
   */
  @Input() fullHeight = false;

  // ── Derived state ────────────────────────────────────────────────────────

  /**
   * Resolves the CSS class applied to the card container.
   * Combines base class with padding, radius, and optional height modifiers.
   */
  get cardClass(): string {
    const classes = ['card', `card--padding-${this.padding}`, `card--radius-${this.radius}`];

    if (this.fullHeight) {
      classes.push('card--full-height');
    }

    return classes.join(' ');
  }
}
