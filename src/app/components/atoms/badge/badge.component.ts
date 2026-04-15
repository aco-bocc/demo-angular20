/**
 * UiBadgeComponent – Angular 20 Standalone
 * ─────────────────────────────────────────────────────────────────
 * Reusable badge atom.
 * Used to display short status labels with semantic color variants.
 * ─────────────────────────────────────────────────────────────────
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DEFAULT_CONST } from '../../../utils/global-strings';

/** Supported badge variants representing semantic states. */
type BadgeVariant = 'high' | 'medium' | 'low';

@Component({
  selector: 'ui-badge',
  standalone: true,
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiBadgeComponent {

  // ── Inputs ───────────────────────────────────────────────────────────────

  /** Text displayed inside the badge. */
  @Input() label: string = DEFAULT_CONST.EMPTY;

  /** Visual variant controlling background and text color. */
  @Input() variant: BadgeVariant = 'medium';

  // ── Derived state ────────────────────────────────────────────────────────

  /**
   * Resolves the CSS class applied to the badge element.
   * Combines base class with variant modifier.
   */
  get badgeClass(): string {
    return `badge badge--${this.variant}`;
  }
}