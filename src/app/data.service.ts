import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private progressSource = new BehaviorSubject(false);
  private profileAccessStatus = new BehaviorSubject(false);
  private contentIndexSource = new BehaviorSubject(0);
  private currentRouteSource = new BehaviorSubject('/');
  currentProgress = this.progressSource.asObservable();
  profileAccess = this.profileAccessStatus.asObservable();
  contentIndex = this.contentIndexSource.asObservable(); 
  currentRoute = this.currentRouteSource.asObservable();

  constructor() { }

  changeProgress(progress: boolean) {
    this.progressSource.next(progress);
  }
  
  changeProfileAccess(accessStatus: boolean){
    console.log('in dataservice, accessStatus', accessStatus);
    this.profileAccessStatus.next(accessStatus);
  }

  changeContentIndex(index: number){
    this.contentIndexSource.next(index);
  }

  changeCurrentRoute(url: string){
    this.currentRouteSource.next(url);
  }


}