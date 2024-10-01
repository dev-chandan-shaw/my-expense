import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const loggedInUser = localStorage.getItem("user")
  if (loggedInUser) {
    return true;
  } 
  else {
    router.navigateByUrl("/login")
    return false;
  }
};
