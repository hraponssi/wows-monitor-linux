import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { TranslateModule } from '@ngx-translate/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { DialogService } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnalyticsInfoComponent } from './analytics-info/analytics-info.component';
import { ChangelogModule } from './changelogs/changelog/changelog.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { ConnectionComponent } from './topbar/connection/connection.component';
import { QrScanComponent } from './topbar/connection/qr-scan/qr-scan.component';
import { QrComponent } from './topbar/connection/qr/qr.component';
import { MenuComponent } from './topbar/menu/menu.component';
import { PathPickerDialogComponent } from './topbar/path-picker/path-picker-dialog/path-picker-dialog.component';
import { PathPickerComponent } from './topbar/path-picker/path-picker.component';
import { StatusComponent } from './topbar/status/status.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    MainComponent,
    TopbarComponent,
    MenuComponent,
    PathPickerComponent,
    ConnectionComponent,
    StatusComponent,
    TitlebarComponent,
    QrComponent,
    QrScanComponent,
    PathPickerDialogComponent,
    AnalyticsInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    SharedModule,
    TranslateModule,
    FontAwesomeModule,
    ChangelogModule,
    SidebarModule,
    TooltipModule,
    InputTextModule,
    OverlayPanelModule,
    ButtonModule,
    DropdownModule,
    DynamicDialogModule,
    DialogModule,
    ScrollPanelModule,
    ZXingScannerModule,
    ScrollPanelModule,
    ToastModule,
    LoadingBarModule,
    LoadingBarRouterModule
  ],
  providers: [
    DialogService
  ],
  entryComponents: [
    QrComponent,
    QrScanComponent,
    PathPickerDialogComponent,
    AnalyticsInfoComponent
  ]
})
export class MainModule { }
