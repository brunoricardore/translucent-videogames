import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() placeholder: string = '';
  @Input() options!: unknown[];

  @Input() id!: string;

  constructor() { }

  ngOnInit(): void {
    this.id = this.id ? this.id : uuid();
  }

  get isRequired(): boolean {
    return this.control.hasValidator(Validators.required);
  }

  get errorMessage(): string | null {
    if (this.control.hasError('required')) {
      return 'This field is required';
    }
    return null;
  }
}
