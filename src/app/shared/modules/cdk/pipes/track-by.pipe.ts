import { Pipe, PipeTransform } from '@angular/core';

type TrackByFunctionType = <T>(index: number, item?: T) => T;

interface TrackByFunctionCache {
  [propertyName: string]: TrackByFunctionType;
}

@Pipe({ name: 'rcCdkTrackByProperty' })
export class TrackByPropertyPipe implements PipeTransform {

  private static readonly CACHE: TrackByFunctionCache = {};

  public transform(propertyName: string): TrackByFunctionType {
    if (!TrackByPropertyPipe.CACHE[propertyName]) {
      TrackByPropertyPipe.CACHE[propertyName] = (index: number, item: any): any  => item[propertyName];
    }

    return TrackByPropertyPipe.CACHE[propertyName];
  }
}

type ZeroType = 0;

type TrackByIndexType = (index: number, item?: any) => number;
const trackByIndex: TrackByIndexType = (index: number) => index;

@Pipe({ name: 'rcCdkTrackByIndex' })
export class TrackByIndexPipe implements PipeTransform {
  public transform(value: ZeroType): TrackByIndexType {
    return trackByIndex;
  }
}

const trackByReference: TrackByFunctionType = (index: number, item: any) => item;

@Pipe({ name: 'rcCdkTrackByReference' })
export class TrackByReferencePipe implements PipeTransform {
  public transform(value: ZeroType): TrackByFunctionType {
    return trackByReference;
  }
}
