import { Component, input, output } from '@angular/core';

export interface TabItem {
  id: string | number;
  label: string;
  icon?: string;
}

@Component({
  selector: 'bocc-tabs',
  standalone: true,
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  /** Array of tab items to display */
  public tabs = input.required<TabItem[]>();

  /** The ID of the currently active tab */
  public activeTabId = input.required<string | number>();

  /** Event emitted when a tab is clicked */
  public tabChange = output<string | number>();

  /** Handles the tab click event */
  public onTabClick(id: string | number): void {
    if (id !== this.activeTabId()) {
      this.tabChange.emit(id);
    }
  }
}
