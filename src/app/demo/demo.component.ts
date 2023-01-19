import { Component, Input,OnInit,OnChanges, SimpleChanges, DoCheck,AfterContentInit ,AfterContentChecked,AfterViewInit,AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit , OnChanges,DoCheck, AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked{
 @Input() value:string = 'procademy';
 constructor()
 {
  console.log('constructor called');
  // console.log(this.value);
 }
 ngOnChanges(change:SimpleChanges)
 {
  console.log('ngOnChanges called');
  console.log(change);

 }
 ngOnInit()
 {
  console.log('ngOnInit called');
  // console.log(this.value);
 }
  ngDoCheck()
  {
    console.log('ngDoCheck called');
    // console.log(this.value);

  }
  ngAfterContentInit()
  {
    console.log('ngAfterContentInit called');
    // console.log(this.value);


  }
  ngAfterContentChecked()
  {
    console.log('ngAfterContentChecked called');
    // console.log(this.value);


  }
  ngAfterViewInit()
  {
    console.log('ngAfterViewInit called');
    // console.log(this.value);


  }
  ngAfterViewChecked()
  {
    console.log('ngAfterViewChecked called');
    // console.log(this.value);


  }
}
