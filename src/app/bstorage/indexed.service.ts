import { Injectable } from '@angular/core';
import { ImmortalStorage, IndexedDbStore, LocalStorageStore } from 'immortal-db';

@Injectable({
  providedIn: 'root'
})
export class IndexedService {
  public indexedDbStore = [new IndexedDbStore()];
  //public localstoragestore = [new ImmortalStorage()];
  public indexedStore = new ImmortalStorage(this.indexedDbStore);
  //public localStore = new ImmortalStorage(LocalStorageStore);

  constructor() { }

  public async saveToIndexed(key: string, data: any): Promise<any> {
    return await this.indexedStore.set(key, data);
  }
  public async getFromIndexed(key: string): Promise<any> {
    return await this.indexedStore.get(key);
  }
  public async saveToLocal(key: string, data: any): Promise<any> {
   //  return await this.localStore.set(key, data);
  }
  public async getFromLocall(key: string): Promise<any> {
  //  return await this.localStore.get(key);
  }
}
