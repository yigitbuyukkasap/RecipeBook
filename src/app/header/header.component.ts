import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent {
  @Output() headerSelected = new EventEmitter<string>();


  onSelect(header: string) {
    this.headerSelected.emit(header);
  }
}
