import { Injectable } from '@angular/core';
import { uniq } from 'lodash-es';
import { mergeWith, Observable, ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map } from 'rxjs/operators';

// use this service to manage states of internal components of RcSelectOptionsComponent and emitting data to form control
@Injectable()
export class SelectOptionsService<T> {
  public readonly isResetDisabled: Observable<boolean>;

  public listItems: T[] = [];
  private checkedItems: T[] = [];
  private selectionChangeSubject = new ReplaySubject<T[]>(1);
  private valueChangeSubject = new BehaviorSubject<T[]>([]);

  constructor() {
    this.isResetDisabled = this.selectionChangeSubject.pipe(
      mergeWith(this.valueChangeSubject),
      map(selectedItems => selectedItems.length < 1),
    );
  }

  public get valueChange(): Observable<T[]> {
    return this.valueChangeSubject.asObservable();
  }

  public get selectionChange(): Observable<T[]> {
    return this.selectionChangeSubject.asObservable();
  }

  public get checked(): T[] {
    return [...this.checkedItems];
  }

  public writeValue(value: T[]): void {
    this.checkedItems = value;
    this.valueChangeSubject.next(this.checked);
  }

  public isChecked(value: T): boolean {
    return this.checkedItems.indexOf(value) !== -1;
  }

  public check(value: T): void {
    this.checkedItems = uniq([...this.checked, value]);
    this.selectionChangeSubject.next(this.checked);
  }

  public uncheck(value: T): void {
    this.checkedItems = this.checkedItems.filter(v => v !== value);
    this.selectionChangeSubject.next(this.checked);
  }

  public selectOne(value: T): void {
    this.checkedItems = [value];
    this.selectionChangeSubject.next(this.checked);
  }

  public reset(): void {
    this.checkedItems = [];
    this.valueChangeSubject.next(this.checked);
    this.selectionChangeSubject.next(this.checked);
  }

  public checkAll(): void {
    this.checkedItems = this.listItems;
    this.selectionChangeSubject.next(this.checked)
  }
}
