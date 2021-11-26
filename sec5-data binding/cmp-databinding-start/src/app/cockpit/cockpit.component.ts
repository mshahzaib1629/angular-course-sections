import { ElementRef, ViewChild } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // here we are using bpCreated as an alias of bluePrintCreated. Thus bluePrintCreated property 
  // is not exposed outside in template
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // instead of two-way binding and passing values as function's parameters, we can use @ViewChild(templates-localReference) 
  // to get html element in typescript code, and thus can access the input's value though. But never use ViewChild approach to
  // set values in DOM e.g. serverContentInputVc.nativeElement.value = 'xyz'
  @ViewChild('serverContentInputRef', {static: true}) serverContentInputVc: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  // newServerName = ''; // as local reference for serverName is used in the template
  newServerContent = '';


  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInputVc.nativeElement.value,
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    console.log(serverNameInput);
    this.bluePrintCreated.emit({
  serverName: serverNameInput.value,
  serverContent: this.serverContentInputVc.nativeElement.value,
    });
  }

}
