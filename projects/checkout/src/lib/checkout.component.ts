import { Component, OnInit, Output, EventEmitter } from '@angular/core';

const SCRIPT_URL = 'https://js.useklump.com/klump.js';

@Component({
  selector: 'klump-checkout',
  template: `
    <div id="klump__checkout" (click)="handleClick()"></div>
  `,
  styles: [
  ]
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  ngOnInit(): void {
    this.loadScript(SCRIPT_URL);
  }

  @Output() clickEvent = new EventEmitter<string>();

  handleClick(){
    this.clickEvent.emit('clicked')
  }

}
