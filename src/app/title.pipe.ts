import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'title'
}) 
export class TitlePipe implements PipeTransform {
    tofirstCap(str:string) {
        return str.substring(0,1).toUpperCase() + str.substring(1)
    }
    transform(str: string, other?:any) {
        if (str.length == 0) {
            return ""
        }

        str = str.toLowerCase()
        str = this.tofirstCap(str)
        let parts = str.split(' ')
        let newStr = ""
        let notToChange = ['the', 'of', 'in', 'on', 'for', 'a', 'an'] // Add more
        parts.forEach(element => {
            if (newStr == "" ) {
                newStr += element
            }
            else{
                newStr += " "
                if (notToChange.indexOf(element) != -1) {
                    newStr += element
                }
                else {
                    newStr += this.tofirstCap(element)
                }
            }
        });

        return newStr;
    }
}