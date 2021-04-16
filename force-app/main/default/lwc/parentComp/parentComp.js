import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {
    message = "display the message";
    clickHandler(){
        this.message = "Message Changed";
    }

    nextHandler(){
        this.page = this.page + 1;
    }
}