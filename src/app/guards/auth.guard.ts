import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // تحقق بسيط: هل يوجد user في localStorage؟
  const isLoggedIn = !!localStorage.getItem('user');

  if (!isLoggedIn) {
    router.navigateByUrl('/login');
    return false;
  }

  return true;
};
