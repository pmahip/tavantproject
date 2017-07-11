import { Component,Input,OnChanges,Output,EventEmitter } from '@angular/core';


@Component({
    moduleId:module.id,
    selector :'ai-star',
    templateUrl: 'star.component.html',
    styleUrls:['star.component.css']
})


export class StarComponent implements OnChanges{

    @Input() rating : number;
    starWidth:number;
    @Output() ratingClicked : EventEmitter<string>=new EventEmitter<string>()

    ngOnChanges():void{
        this.starWidth=80/5 * this.rating;
    }

    onClick():void{
        this.ratingClicked.emit(`The rating ${this.rating} was Clicked`)
    }
}