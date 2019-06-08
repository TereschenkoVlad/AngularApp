import { Component } from '@angular/core';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularFirst';
  list = [];

  constructor (private api: ApiService) {}

  btnClick () {
    this.api.get().subscribe((res: any) => {
      this.list = res;
    });
  }

  btnDelete (id, index) {
    this.api.delete(id).subscribe((res: any) => {
      this.list.splice(index, 1);
    });
  }

  btnPost () {
    const post = {
      title: 'Салат мой брат',
      description: 'Мне мама так сказала'
    };
    this.api.post(post).subscribe(() => {
        this.list.push(post);
    });
  }
}

