import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Termek } from '../model/termek';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  refTermekek: AngularFireList<Termek>
  refMegrendeles: AngularFireList<any>


  constructor(private db:AngularFireDatabase) {
    this.refTermekek= this.db.list("/termekek")
    this.refMegrendeles= this.db.list("/megrendelesek")

   }

   getProduct(){
    return this.refTermekek
   }

   megrendel(body:any){
    return this.refMegrendeles.push(body)
   }

}
