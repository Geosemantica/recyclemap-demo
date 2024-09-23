import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { filter } from 'rxjs/operators';

/**
 * use this class for control multiple interactive elements such as checkboxes or filter items which cannot be controlled by FormBuilder
 */
export class RcMultiSelectControl<I, K = string> {
  public readonly list = new ObservableSet<K>();
  public items = new BehaviorSubject<I[]>([]);
  private disabledListIds = new Set<K>();
  private skipEmit = false;

  constructor(
    private baseItems: I[],
    private baseIdPath: string,
  ) {
    this.items.next(this.baseItems);
  }

  /**
   * get ids of active elements
   */
  public get selectedIds(): K[] {
    return Array.from(this.list).filter(id => !this.disabledListIds.has(id));
  }

  /**
   * set element state by id
   * @param id - element id
   * @param checked - use to set element as active or inactive
   * @param skipEmit - use to avoid event emitting within selectValueChanges stream
   */
  public setItemState(id: K, checked: boolean, skipEmit?: boolean): void {
    if (skipEmit) {
      this.skipEmit = skipEmit;
    }
    if (checked) {
      this.list.add(id);
      this.skipEmit = false;
      return;
    }

    this.list.delete(id);
    this.skipEmit = false;
  }

  /**
   * get current element state by id
   * @param id - element id
   */
  public isSelected(id: K): boolean {
    return this.list.has(id);
  }

  /**
   * set stream to listen for any changes of elements state except ones with skipEmit flag
   */
  public selectValueChanges(): Observable<ObservableSet<K>> {
    return this.list.asObservable().pipe(
      filter(() => !this.skipEmit),
    );
  }

  /**
   * set every active elements as inactive
   * @param skipEmit - use to avoid event emitting within selectValueChanges stream
   */
  public resetActiveItems(skipEmit = false): void {
    for (let id of this.selectedIds) {
      this.setItemState(id, false, skipEmit);
    }
  }
}


export class ObservableSet<T> implements Set<T> {
  private readonly subject: BehaviorSubject<this>;
  private readonly internalSet: Set<T>;

  constructor(values?: ReadonlyArray<T>) {
    this.internalSet = new Set(values);
    this.subject = new BehaviorSubject(this);
  }

  public get size(): number {
    return this.internalSet.size;
  }

  public get [Symbol.toStringTag](): string {
    return this.internalSet[Symbol.toStringTag];
  }

  public add(value: T): this {
    this.internalSet.add(value);
    this.subject.next(this);
    return this;
  }

  public clear(): void {
    this.internalSet.clear();
    this.subject.next(this);
  }

  public delete(value: T): boolean {
    const retval = this.internalSet.delete(value);
    this.subject.next(this);
    return retval;
  }

  public asObservable(): Observable<this> {
    return this.subject;
  }

  public [Symbol.iterator](): IterableIterator<T> {
    return this.internalSet[Symbol.iterator]();
  }

  public entries(): IterableIterator<[T, T]> {
    return this.internalSet.entries();
  }

  public forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void {
    this.internalSet.forEach(callbackfn, thisArg);
  }

  public has(value: T): boolean {
    return this.internalSet.has(value);
  }

  public keys(): IterableIterator<T> {
    return this.internalSet.keys();
  }

  public values(): IterableIterator<T> {
    return this.internalSet.values();
  }
}
