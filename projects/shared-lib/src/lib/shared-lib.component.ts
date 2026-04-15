import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthLibComponent } from 'auth-lib';

@Component({
  selector: 'lib-shared-lib',
  imports: [AuthLibComponent],
  template: `
    <h1>Shared</h1>
    <lib-auth-lib></lib-auth-lib>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedLibComponent { }
