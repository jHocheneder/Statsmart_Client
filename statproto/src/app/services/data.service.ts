import { Injectable } from '@angular/core';
import { Link } from '../models/link';
import { Statistic } from '../models/statistic';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  selected: Link[] = []

  loadedStatistic: Statistic = new Statistic();

  constructor() { }
}
