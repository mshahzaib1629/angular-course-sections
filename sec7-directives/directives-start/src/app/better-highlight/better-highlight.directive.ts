import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() defaultHighlightColor: string = 'blue';
  // HostBinding(<propertyNameOfDomElement>) decorator can be used instead of Renderer2 in case we only need minor
  // styling manipulation
  @HostBinding('style.backgroundColor') backgroundColor: string;

  // here we need elementRef in constructor to get the access to element on which this directive is being called
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  // Renderer is essentially a "tool" provided by Angular that will manipulate DOM elements with both
  // the runtime environment and Angular in mind. So it will do that in a way that will not fail
  // in non-DOM environments (e.g. server-side rendering) and it will also "inform" Angular about the change.
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
  }

  // we can listen user interaction by using HostListener(<event to be listened>) and can update or render the ui accordingly
  @HostListener ('mouseenter') onCursorEnter(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    this.backgroundColor = this.defaultHighlightColor;
  }

  @HostListener ('mouseleave') onCursorLeave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    // using HostBinding here
    this.backgroundColor = this.defaultColor;
  }
}
