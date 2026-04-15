/**
 * UiButtonComponent – Angular 20 Standalone
 * ─────────────────────────────────────────────────────────────────
 * Reusable button atom.
 * Supports primary and secondary variants, optional icon rendering,
 * disabled state handling, and hover-based icon replacement.
 * ─────────────────────────────────────────────────────────────────
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DEFAULT_CONST } from '../../../utils/global-strings';

/** Supported visual variants for the button. */
type ButtonVariant = 'btn-primary' | 'btn-secondary';

/** Final CSS class applied to the root button depending on current state. */
type ButtonResolvedClass = ButtonVariant | 'btn-inactive' | 'btn-inactive-primary';

@Component({
  selector: 'ui-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButtonComponent {
  // ── Internal state ───────────────────────────────────────────────────────

  /** Tracks whether the button is currently hovered. */
  private isHovered = false;

  // ── Inputs ───────────────────────────────────────────────────────────────

  /** Visual variant of the button. */
  @Input() variant: ButtonVariant = 'btn-primary';

  /** Text displayed inside the button. */
  @Input() label: string = DEFAULT_CONST.EMPTY;

  /** Disables user interaction when true. */
  @Input() disabled = false;

  /** Controls whether the icon element should be rendered. */
  @Input() showIcon = false;

  /** Enables icon replacement while the button is hovered. */
  @Input() enableHoverIcon = false;

  /** Default icon path shown in the normal state. */
  @Input() iconDefault: string = DEFAULT_CONST.EMPTY;

  /** Icon path shown while hovered when hover icon support is enabled. */
  @Input() iconOnHover: string = DEFAULT_CONST.EMPTY;

  /** Icon path shown when the button is disabled. */
  @Input() iconOnDisabled: string = DEFAULT_CONST.EMPTY;

  // ── Outputs ──────────────────────────────────────────────────────────────

  /** Emits when the button is clicked and the component is not disabled. */
  @Output() readonly buttonClick = new EventEmitter<void>();

  // ── Derived state ────────────────────────────────────────────────────────

  /**
   * Resolves the CSS class applied to the root button element.
   * Returns the disabled variant when the button is not interactive.
   */
  get resolvedClass(): ButtonResolvedClass {
    if (!this.disabled) {
      return this.variant;
    }

    return this.variant === 'btn-primary' ? 'btn-inactive-primary' : 'btn-inactive';
  }

  /**
   * Resolves the icon path for the current visual state.
   * Priority:
   * 1. Disabled icon
   * 2. Hover icon
   * 3. Default icon
   */
  get resolvedIcon(): string {
    if (this.disabled) {
      return this.iconOnDisabled || this.iconDefault;
    }

    if (this.enableHoverIcon && this.isHovered && this.iconOnHover) {
      return this.iconOnHover;
    }

    return this.iconDefault;
  }

  /** True when the label contains visible text. */
  get hasLabel(): boolean {
    return this.label.trim().length > 0;
  }

  /**
   * Returns the CSS-compatible background-image value for the icon element.
   * Falls back to `none` when no icon is available.
   */
  get iconBackgroundImage(): string {
    return this.resolvedIcon ? `url(${this.resolvedIcon})` : 'none';
  }

  // ── User interactions ────────────────────────────────────────────────────

  /**
   * Emits the click event when the button is enabled.
   * Disabled buttons do not emit output events.
   */
  onClick(): void {
    if (this.disabled) {
      return;
    }

    this.buttonClick.emit();
  }

  /**
   * Activates the hover state when hover icon support is enabled.
   */
  onMouseEnter(): void {
    if (this.enableHoverIcon) {
      this.isHovered = true;
    }
  }

  /**
   * Clears the hover state when hover icon support is enabled.
   */
  onMouseLeave(): void {
    if (this.enableHoverIcon) {
      this.isHovered = false;
    }
  }
}
