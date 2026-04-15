/**
 * AvatarComponent – Angular 20 Standalone
 * ─────────────────────────────────────────────────────────────────
 * Avatar atom. Displays a user's profile image or a placeholder,
 * and an expandable profile panel with role and name.
 *
 * @author  : Cristian Quintana / Contact & Business IT
 * @version : 1.2
 * ─────────────────────────────────────────────────────────────────
 */
import { Component, input } from '@angular/core';

@Component({
  selector: 'bocc-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  imageUrl = input<string | null>(null);

  // Content properties
  titleText = input<string>('Nombre');
  subtitleText = input<string>('Cargo');

  // Visibility toggle
  isExpanded = input<boolean>(true);
}
