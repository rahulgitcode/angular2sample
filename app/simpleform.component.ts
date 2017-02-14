import {Component} from 'angular2/core'

@Component({
    selector: 'simple-form',
    templateUrl: 'app/simpleform.component.html'
})

export class SimpleFormComponent{
    log(x){
        console.log(x);
    }

    submitForm(f){
        console.log(f);
    }
}