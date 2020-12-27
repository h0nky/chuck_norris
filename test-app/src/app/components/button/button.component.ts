import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string;
  @Output() onPressButton = new EventEmitter<any>();

  onPress(): void {
    this.onPressButton.emit();
  }
}
