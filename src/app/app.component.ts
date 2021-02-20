import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ServiceService } from './components/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  constructor(private service: ServiceService) {}
  ngOnInit() {

    // subscribing to getName
    this.service.getName()
    .pipe(
      map(item=> item[0].toUpperCase() + item.slice(1,item.length)
      ),
      filter(item=>item.length > 4)
    )
    .subscribe((name) => console.log(name));
  }


}
