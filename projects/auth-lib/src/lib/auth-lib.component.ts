import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthLibService } from './auth-lib.service';

@Component({
  selector: 'lib-auth-lib',
  templateUrl: './auth-lib.component.html',
  styleUrls: ['./auth-lib.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLibComponent {

  private readonly service = inject(AuthLibService);
  readonly user = this.service.user;

}
