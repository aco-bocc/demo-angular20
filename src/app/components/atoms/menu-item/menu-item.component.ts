/**
 * UiMenuItemComponent – Angular 20 Standalone
 * ─────────────────────────────────────────────────────────────────
 * Reusable navigation item.
 * Supports external links, router navigation, and button interaction.
 * Includes optional icons, subtitle, and badge.
 * ─────────────────────────────────────────────────────────────────
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DEFAULT_CONST } from '../../../utils/global-strings';

@Component({
  selector: 'ui-menu-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMenuItemComponent {
  // ── Inputs: content ──────────────────────────────────────────────────────

  /** Main label displayed in the item. */
  @Input() label: string = DEFAULT_CONST.EMPTY;

  /** Optional subtitle displayed below the label. */
  @Input() subtitle: string = DEFAULT_CONST.EMPTY;

  // ── Inputs: icons ────────────────────────────────────────────────────────

  /** Icon displayed at the start of the item. */
  @Input() startIconPath: string = DEFAULT_CONST.EMPTY;

  /** Icon displayed at the end of the item. */
  @Input() endIconPath: string = DEFAULT_CONST.EMPTY;

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

  /** Disables interaction when true. */
  @Input() disabled = false;

  /** Marks the item as active. */
  @Input() active = false;

  /** Marks the item as selected. */
  @Input() selected = false;

  // ── Inputs: badge ────────────────────────────────────────────────────────

  /** Text displayed in the badge. */
  @Input() badgeText: string = DEFAULT_CONST.EMPTY;

  /** Badge variant controlling color. */
  @Input() badgeVariant: 'high' | 'medium' | 'low' = 'medium';

  // ── Outputs ─────────────────────────────────────────────────────────────

  /** Emits when the item is clicked. */
  @Output() readonly itemClick = new EventEmitter<void>();

  // ── Derived state ───────────────────────────────────────────────────────

  /**
   * Resolves the CSS class applied to the root element.
   */
  get containerClass(): string {
    const classes = ['menu-item'];

    if (this.active) {
      classes.push('menu-item--active');
    }

    if (this.selected) {
      classes.push('menu-item--selected');
    }

    if (this.disabled) {
      classes.push('menu-item--disabled');
    }

    return classes.join(' ');
  }

  /**
   * Resolves badge class based on variant.
   */
  get badgeClass(): string {
    return `menu-item__badge menu-item__badge--${this.badgeVariant}`;
  }

  // ── Conditional helpers ──────────────────────────────────────────────────

  /** True when subtitle is present. */
  get hasSubtitle(): boolean {
    return this.subtitle.trim().length > 0;
  }

  /** True when start icon is defined. */
  get hasStartIcon(): boolean {
    return this.startIconPath.trim().length > 0;
  }

  /** True when end icon is defined. */
  get hasEndIcon(): boolean {
    return this.endIconPath.trim().length > 0;
  }

  /** True when badge has content. */
  get hasBadge(): boolean {
    return this.badgeText.trim().length > 0;
  }

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

    this.itemClick.emit();
  }
}
