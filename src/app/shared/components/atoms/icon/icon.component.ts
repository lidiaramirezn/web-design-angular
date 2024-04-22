import { Component, Input, OnInit } from '@angular/core';
import { ICON_LIST } from './icon-list';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() public name: string;
  @Input() public viewbox: string;
  @Input() public height: string;
  @Input() public width: string;
  @Input() public fill: string;
  public icon;

  constructor() { }

  ngOnInit(): void {
    this.icon = this.getIcon(this.name);
  }

  private getIcon(name: string) {
    const icons = ICON_LIST.filter(x => x.name == name);

    if (icons.length > 0) {
      return icons[0];
    }
    else {
      return ICON_LIST.filter(x => x.name == 'DEFAULT')[0];
    }
  }
}
