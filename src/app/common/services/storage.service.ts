import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from '@core/enums/storage-keys.enum';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  setItem(key: STORAGE_KEYS, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: STORAGE_KEYS): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: STORAGE_KEYS): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
