import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuraldirectiveComponent } from './structuraldirective.component';
import { FormsModule } from '@angular/forms';
import { ItemdetailComponent } from './itemdetail.component';
import { AttributedirectiveComponent } from './attributedirective.component';
import { HighlightDirective } from './highlight.directive';
import { TemplateReferenceComponent } from './template-reference.component';



@NgModule({
  declarations: [
    StructuraldirectiveComponent,
    ItemdetailComponent,
    AttributedirectiveComponent,
    HighlightDirective,
    TemplateReferenceComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [
    StructuraldirectiveComponent,
    ItemdetailComponent,
    AttributedirectiveComponent,
    TemplateReferenceComponent
  ]
})
export class DirectivesModule { }
