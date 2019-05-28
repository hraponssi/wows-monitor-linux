import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const UpdateServiceToken = new InjectionToken('update-service');

export interface UpdateService {

  $updateAvailable: Observable<boolean>;

  checkForUpdate(): Promise<boolean>;
  quitAndInstall(): void;
}
