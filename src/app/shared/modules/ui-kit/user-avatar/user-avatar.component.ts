import { Component, Input } from '@angular/core';
import { User } from "@app/shared/api/base.models";
import { UserRole } from "@app/shared/api/points/models";

export namespace RcUserAvatarComponentScope {
  export type Size = 'xs' | 'sm' | 'md' | 'lg';
}

@Component({
  selector: 'rc-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class RcUserAvatarComponent {
  @Input()
  public user: User;

  @Input()
  public size: RcUserAvatarComponentScope.Size = 'sm';

  public get classList(): string {
    return `${this.size}`
  }

  public get isModerator(): boolean {
    return this.user.role === UserRole.MODERATOR;
  }

  public get getInitials(): string {
    // to prevent errors if user doesn't have a name or surname
    const firstName = this.user.firstName ? this.user.firstName[0] : '';
    const lastName = this.user.surname ? this.user.surname[0] : '';

    return firstName.toUpperCase() + lastName.toUpperCase();
  }
}
