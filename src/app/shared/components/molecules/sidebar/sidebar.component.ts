import { Component, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnDestroy {

  @Input() public isOpen: boolean;
  @Output() public readonly closed: EventEmitter<void>;
  @Input() public data;
  public idItemCategory;
  public idItemCategoryClick;

  public constructor() {
    this.closed = new EventEmitter();
  }

  public ngOnInit() {
    this.setInitial();
  }

  public ngOnDestroy(): void {
    this.setInitial();
  }

  public close() {
    this.closed.emit();
    if(!this.isOpen) {
      this.setInitial();
    }
  }

  private setInitial() {
    this.idItemCategoryClick = undefined;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if(window.innerWidth > 1023) {
      this.setInitial();
    }
  }
}
