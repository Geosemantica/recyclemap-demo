import { Component, Input } from '@angular/core';
import { UserRole } from "@app/shared/api/points/models";

@Component({
  selector: 'rc-comments',
  templateUrl: './comments.component.html',
})
export class RcCommentsComponent {
  @Input()
  commentsModeratorMode: boolean;

  public readonly UserRole = UserRole;

  constructor(
  ) {
  }
}
