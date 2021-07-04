import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  appHighlight=''

  constructor(private element:ElementRef) { 
    console.log(element)
    console.log(this.element.nativeElement)
   // this.element.nativeElement.style.backgroundColor='yellow'
  }
  //attach events
  @HostListener('mouseenter')
  public onMouseEnter(){
      this.highlight(this.appHighlight)
  }
  @HostListener('mouseleave')
  public onMouseLeave(){
    this.highlight('')

  }
  private highlight(color:string){
    this.element.nativeElement.style.backgroundColor=color;

  }

}
