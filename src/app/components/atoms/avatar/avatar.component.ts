/**
 * AvatarComponent – Angular 20 Standalone
 * ─────────────────────────────────────────────────────────────────
 * Avatar atom. Displays a user's profile image or initials,
 * a presence status indicator, and an expandable profile panel.
 * Design reference: Figma "BOC (Dev)" – Section Avatar / User Profile
 *
 * @author  : Cristian Quintana / Contact & Business IT
 * @version : 1.1 – 2026/04/15 
 * ─────────────────────────────────────────────────────────────────
 */
import { Component, input } from '@angular/core';


export type AvatarImageMode = 'none' | 'placeholder' | 'initials' | 'image';
export type AvatarStatus = 'none' | 'disponible' | 'ocupado' | 'no-disponible' | 'desconectado';

@Component({
  selector: 'bocc-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  host: {
    '[class.bocc-status-none]': 'status() === "none"',
    '[class.bocc-status-disponible]': 'status() === "disponible"',
    '[class.bocc-status-ocupado]': 'status() === "ocupado"',
    '[class.bocc-status-no-disponible]': 'status() === "no-disponible"',
    '[class.bocc-status-desconectado]': 'status() === "desconectado"'
  }
})
export class AvatarComponent {
  // Appearance properties — size is fixed at 32px
  imageMode = input<AvatarImageMode>('image');
  imageUrl = input<string | null>(null);
  initialsText = input<string | null>(null);
  status = input<AvatarStatus>('disponible');

  // Content properties
  titleText = input<string>('Short title');
  subtitleText = input<string>('Caption');

  // Visibility toggles
  showContent = input<boolean>(true);
  showTitle = input<boolean>(true);
  showSubtitle = input<boolean>(true);
}
