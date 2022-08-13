import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Output() loadingEvent = new EventEmitter();
  loading = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
      this.loadingEvent.emit();
    }, 2000);
  }

}
