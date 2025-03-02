import { Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Directive({
  selector: '[libSvgElement]',

})
export class SvgElementDirective implements OnInit ,OnChanges {
  @Input('appSvg') svgSource!: string;
  @Input('svgSize') svgSize!: string;
  @Input('x-position') xrelPos!: string;
  @Input('fill-color') fillColor!: string;
  previousSvgElement? : SVGElement;
  constructor(private renderer: Renderer2, private http: HttpClient, private elementRef: ElementRef ) {
    
   } 
  ngOnChanges(changes: SimpleChanges): void {
   if(changes['svgSource'] && !changes['svgSize'] && !changes['xrelPos'] && !changes['fillColor'] && this.previousSvgElement){
    const parentDiv = this.elementRef.nativeElement as HTMLElement;
   this.renderer.removeChild(parentDiv.querySelector('svg'),this.previousSvgElement)
    // this.loadSvgData();
   }
  }

  ngOnInit(): void {

    this.loadSvgData();

  }

  loadSvgData(): void {
    const svgData = this.http.get(this.svgSource, { observe: 'body', responseType: 'text' });
    svgData.subscribe({
      next: (data) => {
        this.handleSvgData(data);
      },
      error: (error) => {
        if (error.statusText == "Not Found") {
          this.svgSource = "assets/Solid/status.svg";
          this.loadSvgData();
        }
      }
    });
  }

  handleSvgData(data: string): void {
    const parentDiv = this.elementRef.nativeElement as HTMLElement;
    
    parentDiv.insertAdjacentHTML('beforeend', data);


    if (this.xrelPos == 'left') {
      this.renderer.setStyle(parentDiv, 'flex-direction', 'row-reverse');
    }

    if (this.svgSize) {
      const svgElement = parentDiv.querySelector('svg');
      if (svgElement) {
        svgElement.setAttribute('width', this.svgSize);
        svgElement.setAttribute('height', this.svgSize);
      }
    }
     
    if (this.fillColor) {
      const svgElement = parentDiv.querySelector('svg');
      if (svgElement) {
        svgElement.style.fill = this.fillColor;
      }
    }
  
    let svgElement = parentDiv.querySelector('svg');
    if(svgElement)
    this.previousSvgElement = svgElement
  }
}