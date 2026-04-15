import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'lib-other',
  template: '<p>User: {{user}}</p>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtherComponent {

  private readonly service = inject(AuthLibService);
  readonly user = this.service.user;

}
