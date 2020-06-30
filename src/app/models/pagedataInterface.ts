import { Injectable } from '@angular/core';

export interface PageData {
    pagedata: string;
    description: string;
    done: boolean;
}

@Injectable()
export abstract class PageDataListService {
  /**
   * Returns a list of current pagedata.
   */
  abstract getPageData(): PageData[];
}