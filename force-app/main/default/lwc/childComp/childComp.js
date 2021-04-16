import { LightningElement, api } from 'lwc';

export default class ChildComp extends LightningElement {
    @api message;
    nextHandler(){
        this.dispatchEvent(new CustomEvent('next'));
    }
}