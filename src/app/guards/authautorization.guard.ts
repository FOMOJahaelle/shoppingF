import { CanActivateFn } from '@angular/router';

export const authautorizationGuard: CanActivateFn = (route, state) => {
  return true;
};
