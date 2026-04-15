import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DEFAULT_CONST } from '../../../utils/global-strings';

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
  @Input() label: string = DEFAULT_CONST.EMPTY;

  @Input() href: string = DEFAULT_CONST.EMPTY;
  @Input() target: '_self' | '_blank' | '_parent' | '_top' = '_self';
  @Input() rel: string = 'noopener noreferrer';

  @Input() routerLink: string | readonly string[] = DEFAULT_CONST.EMPTY;

  @Input() variant: TextLinkVariant = 'primary';
  @Input() disabled = false;

  @Output() readonly linkClick = new EventEmitter<void>();

  get linkClass(): string {
    const classes = ['text-link', `text-link--${this.variant}`];

    if (this.disabled) {
      classes.push('text-link--disabled');
    }

    return classes.join(' ');
  }

  get hasHref(): boolean {
    return this.href.trim().length > 0;
  }

  get hasRouterLink(): boolean {
    if (Array.isArray(this.routerLink)) {
      return this.routerLink.length > 0;
    }

    return String(this.routerLink).trim().length > 0;
  }

  onClick(): void {
    if (this.disabled) {
      return;
    }

    this.linkClick.emit();
  }
}