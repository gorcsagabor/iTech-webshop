import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="https://us-central1-termekek-7be48.cloudfunctions.net/api"

  private isLogged = new BehaviorSubject<any>(null)

  constructor(private afAuth:AngularFireAuth) {
    this.afAuth.authState.subscribe(
      (user)=>{
        this.isLogged.next(user)
      }
    )
   }

   getLoggedUser(){
    return this.isLogged
   }


  signInEmailLink(email:any){
    return this.afAuth.signInWithEmailLink(email)
  }
}
