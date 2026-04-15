/**
 * UiTextLinkComponent – Angular 20 Standalone
 * ─────────────────────────────────────────────────────────────────
 * Reusable text link atom.
 * Supports external links, internal routing, and button fallback.
 * Includes visual variants and disabled state handling.
 * ─────────────────────────────────────────────────────────────────
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DEFAULT_CONST } from '../../../utils/global-strings';

/** Supported visual variants for the text link. */
type TextLinkVariant = 'danger' | 'primary' | 'neutral';

@Component({
  selector: 'ui-text-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './text-link.component.html',
  styleUrls: ['./text-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTextLinkComponent {
  // ── Inputs: content ──────────────────────────────────────────────────────

  /** Text displayed inside the link. */
  @Input() label: string = DEFAULT_CONST.EMPTY;

  // ── Inputs: navigation ───────────────────────────────────────────────────

  /** External navigation URL. */
  @Input() href: string = DEFAULT_CONST.EMPTY;

  /** Target attribute for external links. */
  @Input() target: '_self' | '_blank' | '_parent' | '_top' = '_self';

  /** Rel attribute for external links. */
  @Input() rel: string = 'noopener noreferrer';

  /** Internal navigation using Angular router. */
  @Input() routerLink: string | readonly string[] = DEFAULT_CONST.EMPTY;

  // ── Inputs: state ────────────────────────────────────────────────────────

  /** Visual variant controlling text color. */
  @Input() variant: TextLinkVariant = 'primary';

  /** Disables interaction when true. */
  @Input() disabled = false;

  // ── Outputs ─────────────────────────────────────────────────────────────

  /** Emits when the link is clicked. */
  @Output() readonly linkClick = new EventEmitter<void>();

  // ── Derived state ───────────────────────────────────────────────────────

  /**
   * Resolves the CSS class applied to the element.
   * Combines base class, variant, and disabled modifier.
   */
  get linkClass(): string {
    const classes = ['text-link', `text-link--${this.variant}`];

    if (this.disabled) {
      classes.push('text-link--disabled');
    }

    return classes.join(' ');
  }

  // ── Conditional helpers ──────────────────────────────────────────────────

  /** True when external link is defined. */
  get hasHref(): boolean {
    return this.href.trim().length > 0;
  }

  /** True when routerLink is defined. */
  get hasRouterLink(): boolean {
    if (Array.isArray(this.routerLink)) {
      return this.routerLink.length > 0;
    }

    return String(this.routerLink).trim().length > 0;
  }

  // ── User interaction ─────────────────────────────────────────────────────

  /**
   * Emits click event when not disabled.
   */
  onClick(): void {
    if (this.disabled) {
      return;
    }

    this.linkClick.emit();
  }
}
