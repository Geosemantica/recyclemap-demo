import { Component, Input } from '@angular/core';
import { User } from "@app/shared/api/base.models";

export type FullNameSize = 'md' | 'sm';

@Component({
  selector: 'rc-user-full-name',
  templateUrl: './user-full-name.component.html',
  styleUrls: ['./user-full-name.component.scss']
})
export class RcUserFullNameComponent {
  @Input()
  public user: User;

  @Input()
  public size: FullNameSize = 'md';

  public get getFullUserName(): string {
    return `${this.user.firstName} ${this.user.surname}`;
  }
}
