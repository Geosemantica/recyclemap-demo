import { Directive, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

/**
 * base component for auto unsubscribing for each subscription within component
 */
@Directive()
export abstract class SubscriberComponent implements OnDestroy {
  private subscription = new Subscription();

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  protected subscribe(toSubscription: Subscription): this;

  protected subscribe<T>(
    toObservable: Observable<T>,
    withFn?: (value: T) => void,
    onError?: (err: any) => void,
    onComplete?: () => void): this;

  protected subscribe<T>(
    toObservableOrSubscription: Observable<T> | Subscription,
    withFn?: (value: T) => void,
    onError?: (err: any) => void,
    onComplete?: () => void): this {
    if (toObservableOrSubscription instanceof Subscription) {
      this.subscription.add(toObservableOrSubscription);
      return this;
    }

    this.subscription.add(toObservableOrSubscription.subscribe(
      withFn && withFn.bind(this),
      onError && onError.bind(this),
      onComplete && onComplete.bind(this)));
    return this;
  }
}
