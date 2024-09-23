import { Injectable } from '@angular/core';
import { defer, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { tap } from 'rxjs/operators';

/**
 * use LoaderService to create and attach custom loader to Observable pipe
 * first you need to create loader instance as class property using createLoader() method of LoaderService class
 * then you need to call .attach() method within pipeline of observable
 */
@Injectable({ providedIn: 'root' })
export class LoaderService {
  public createLoader(): Loader<boolean>;
  public createLoader<E>(initialState: E, loadingState: E): Loader<E>;

  public createLoader<E>(initialState?: E, loadingState?: E): Loader<E> | Loader<boolean> {
    return initialState && loadingState ?
      new Loader<E>(initialState, loadingState) :
      new Loader<boolean>(false, true);
  }
}

export class Loader<E> {
  private readonly loadingSubject = new BehaviorSubject<E>(this.initialState);

  constructor(private initialState: E, private loadingState: E) {
  }

  public get loading(): Observable<E> {
    return this.loadingSubject.asObservable();
  }

  public attach = <T>(successStateFn?: (result: T) => E, errorStateFn?: (error: Error) => E) => (source: Observable<T>) =>
    defer(() => {
      this.loadingSubject.next(this.loadingState);
      return source.pipe(
        tap(
          result => this.loadingSubject.next(successStateFn ? successStateFn(result) : this.initialState),
          error => this.loadingSubject.next(errorStateFn ? errorStateFn(error) : this.initialState),
        ),
      );
    })
}
