import { Directive, TemplateRef, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]'
})
export class StructuralDirectiveDirective {

  // here 'unless' is a property. We are defining a method with the keyword 'set' 
  // which will execute everytime 'unless' value is changed 
  // We are using same name for the property as the Directive's selector name so that we can access it from DOM
  @Input() set appStructuralDirective (condition: boolean){
    if (condition == false) {
      // console.log('condition satisfied. Building the respective component');
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // console.log('condition not satisfied. Not building the respective component');
      this.vcRef.clear();
    }
  }
  // here we need templateReference & viewContainerReference
  // templateRef: as we experimented, ng-template is used to build elements having structural 
  // directives when condition is satisfied
  // viewContainerRef: it is used to identify the position of template where it will be displayed
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
