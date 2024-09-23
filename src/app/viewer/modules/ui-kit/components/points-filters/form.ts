import { Injectable } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { OpenState } from '@app/shared/api/points/models';
import { RestrictedState } from '@app/app.models';

interface PointsFiltersForm {
  open: FormControl<OpenState>;
  restricted: FormControl<RestrictedState>;
}

@Injectable()
export class RcPointsFiltersForm {
  public readonly needModInMyAorControl = this.fb.control(null);

  public readonly formGroup = this.fb.group<PointsFiltersForm>({
    open: this.fb.control(null),
    restricted: this.fb.control(null),
  });

  constructor(private fb: FormBuilder) {}
}
