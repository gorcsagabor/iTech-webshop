import { Component } from '@angular/core';
import { map } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { KosarService } from 'src/app/services/kosar.service';

@Component({
  selector: 'app-termekek',
  templateUrl: './termekek.component.html',
  styleUrls: ['./termekek.component.css']
})
export class TermekekComponent {
  termekek:any;
  keresendo:any;

  constructor(private base:BaseService, private kosar:KosarService){
    this.base.getProduct().snapshotChanges()
    .pipe(
      map(
        (ch)=>ch.map(
          (c)=>({key:c.payload.key, ...c.payload.val()})
        )))
    .subscribe((res)=>this.termekek=res)
  }

  hozzaad(product:any, db:any){
    this.kosar.addTetel(product,db)
  }
}
