import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngx-span-of-strings',
  template: `
    <div class="typing-paragraph" id="typing-paragraph">
      <span
        *ngFor="let text of stringArr; let i = index"
        [class.shaded]="i < currentWordIndex"
        [class.active]="i === currentWordIndex"
        >{{ text }}</span
      >
    </div>
  `,
  styles: [
    `
      .typing-paragraph {
        max-width: min(700px, 90vw);
        width: 100%;
        overflow-y: scroll;
        height: 100px;
        background-color: white;
        color: #000;
        padding: 15px;
        border-radius: 15px;
        margin: 10px 0;
      }

      span.active {
        color: #69f0ae;
      }
      span.shaded {
        color: #d8d8d8;
      }
    `,
  ],
})
export class NgxSpanOfStringsComponent implements OnInit {
  @Input() stringArr: string[] = [];
  @Input() currentWordIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
