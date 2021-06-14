import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseComponent } from '@components/base.component';
import { ClanWarsHistoryService } from '@services/clanwars-history.service';
import { LivefeedService } from '@services/livefeed.service';
import { ClanwarsComponent } from '../clanwars.component';

@Component({
  selector: 'app-livefeed-filter',
  templateUrl: './livefeed-filter.component.html'
})
export class LivefeedFilterComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(
    public clanwars: ClanwarsComponent,
    public service: LivefeedService,
    public cwService: ClanWarsHistoryService
  ) {
    super();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
