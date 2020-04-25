import { AbstractControl, ValidationErrors } from '@angular/forms'

export class UsernameValidator {
    static cannotContainSpace(c: AbstractControl) : ValidationErrors | null {
        if ((c.value as string).indexOf(' ') != -1) {
            return { 'cannotContainSpace': true}
        }
        return null;
    }

    static isNotUniquee(c: AbstractControl) : Promise<ValidationErrors | null> {
        return  new Promise((resolve, reject)=> {
            setTimeout(()=> {
                if ((c.value as string) === 'devendra') {
                    resolve({isNotUnique: true})
                }
                else {
                    resolve(null)
                }
            }, 2000)
        })

    }
}