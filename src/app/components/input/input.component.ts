import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ValidationErrors, Validators } from '@angular/forms';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() placeholder: string = '';
  @Input() type!: 'text' | 'number';

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
