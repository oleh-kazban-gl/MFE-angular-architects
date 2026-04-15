import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthLibService {

  private readonly _user = signal<string>('');
  readonly user = this._user.asReadonly();

  public login(userName: string, password: string | null): void {
    // Authentication for **honest** users TM. (c) Manfred Steyer
    this._user.set(userName);
  }

}
