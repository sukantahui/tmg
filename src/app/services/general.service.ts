import { Injectable } from '@angular/core';




// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  isSideBarOpen = false;
  toggledSideBar(){
    this.isSideBarOpen = !this.isSideBarOpen;
  }
  getSideBarOpen(){
    // when no data it will return null;
    return this.isSideBarOpen;
  }

  setSideBarOpen(sidebarValue: boolean){
    // when no data it will return null;
    this.isSideBarOpen = sidebarValue;
  }
}
