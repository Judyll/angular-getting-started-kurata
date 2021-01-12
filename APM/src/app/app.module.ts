import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

/**
 * We identify a class as an Angular module using the NgModule
 * decorator and passing in the below metadata defining the details
 * of this Angular module.
 */
@NgModule({
  /**
   * When an Angular compiler sees a directive in the template
   * it looks into the Angular module for the definition.
   * 
   * Our local directives, components, and pipes are declared
   * here.
   */
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  /**
   * We want our component to work correctly in the browser that
   * is why we need to add the BrowserModule. Also, in this imports
   * array, we define the external modules that we want to be available
   * to all components that we define in this module. This would mean
   * if we have another custom module, then we can import it here
   * so that it can be used by the components owned by this 
   * AppModule.
   * 
   * BrowserModule exposes *ngIf and *ngFor structural directives.
   * FormsModule exposes [(ngModel)] two-way binding directives and any of 
   * the other forms directives.
   * 
   * Third-party components, directives, and pipes are declared
   * here.
   */
  imports: [
    BrowserModule,
    FormsModule
  ],
  /**
   * We use the module to bootstrap our startup component
   */
  bootstrap: [AppComponent]
})
/**
 * We define an Angular module using a class
 */
export class AppModule { }
