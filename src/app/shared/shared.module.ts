import { NgModule } from '@angular/core';
import { IsBrowserDirective } from './directives/is-browser.directive';
import { IsDesktopDirective } from './directives/is-desktop.directive';
import { ShowMenuEntryDirective } from './directives/show-menu-entry.directive';
import { ShowOnDirective } from './directives/show-on.directive';
import { JoinPipe } from './pipes/join.pipe';
import { MatchGroupPipe } from './pipes/match-group.pipe';
import { PrPipe } from './pipes/pr.pipe';
import { RegionPipe } from './pipes/region.pipe';
import { RomanPipe } from './pipes/roman.pipe';
import { SanitizeCssPipe } from './pipes/sanitize-css.pipe';
import { WowsNumbersPipe } from './pipes/wows-numbers.pipe';

@NgModule({
  declarations: [
    IsDesktopDirective,
    IsBrowserDirective,
    ShowMenuEntryDirective,
    ShowOnDirective,
    JoinPipe,
    MatchGroupPipe,
    SanitizeCssPipe,
    RegionPipe,
    RomanPipe,
    PrPipe,
    WowsNumbersPipe
  ],
  exports: [
    IsDesktopDirective,
    IsBrowserDirective,
    ShowMenuEntryDirective,
    ShowOnDirective,
    JoinPipe,
    MatchGroupPipe,
    SanitizeCssPipe,
    RegionPipe,
    RomanPipe,
    PrPipe,
    WowsNumbersPipe
  ],
  imports: [],
  providers: []
})
export class SharedModule { }
