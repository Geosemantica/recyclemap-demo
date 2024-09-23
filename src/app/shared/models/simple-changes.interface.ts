export type SimpleChange<T, P extends keyof T> = {
  previousValue: T[P];
  currentValue: T[P];
  firstChange: boolean;
};
/**
 * Use this type instead of Angular's SimpleChanges
 *
 * Example:
 * // select-button.component.ts
 *
 * ...
 * public ngOnChanges(changes: SimpleChanges<RcSelectButtonComponent>) {
 *    if (changes.value) {
 *       this.setIconColor();
 *    }
 * }
 * ...
 */
export type SimpleChanges<T> = {
  [P in keyof T]?: SimpleChange<T, P>;
};
