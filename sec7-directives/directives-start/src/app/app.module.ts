import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { CustomHighlightDirective } from './custom-highlight/custom-highlight.directive';
import { StructuralDirectiveDirective } from './structual-directive/structural-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    CustomHighlightDirective,
    StructuralDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
