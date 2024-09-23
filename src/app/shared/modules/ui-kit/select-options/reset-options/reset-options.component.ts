import { Component } from '@angular/core';
import { SubscriberComponent } from '@app/shared/modules/cdk/cdk.module';
import { SelectOptionsService } from '@app/shared/modules/ui-kit/select-options/select-options.service';
import { take } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'rc-reset-options',
  templateUrl: './reset-options.component.html',
})
export class RcResetOptionsComponent<T> extends SubscriberComponent {
  constructor(
    private readonly selectOptionsService: SelectOptionsService<T>,
  ) {
    super();
  }

  public onResetClick(): void {
    this.subscribe(
      this.selectOptionsService.isResetDisabled.pipe(
        take(1),
        filter(resetDisabled => !resetDisabled),
      ),
      () => this.selectOptionsService.reset(),
    );
  }
}
