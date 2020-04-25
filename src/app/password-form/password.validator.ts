import { AbstractControl, ValidationErrors, FormGroup, FormControl } from '@angular/forms'

export class PasswordValidator {
    static passwordsDoNotMatch(c: AbstractControl) : ValidationErrors | null {
        let f = (c as FormGroup)
        let newpassword = f.get('newpassword') as FormControl
        let repeatpassword = f.get('repeatpassword') as FormControl
        if (newpassword.value != repeatpassword.value) {
            console.log(f)
            return { 'notmatch': true}
        }
        return null;
    }

    static wrongPassword(c: AbstractControl) : Promise<ValidationErrors | null> {
        return  new Promise((resolve, reject)=> {
            setTimeout(()=> {
                if ((c.value as string) != '123456') {
                    resolve({'wrongPassword': true})
                }
                else {
                    resolve(null)
                }
            }, 2000)
        })

    }
}