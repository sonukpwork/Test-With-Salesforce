import { LightningElement } from 'lwc';

export default class AccountSearch extends LightningElement {
    numberOfEmployee = null;
    handleChange(event){
        this.numberOfEmployee = event.detail.value;
    }

    reset(){
        this.numberOfEmployee = null;
    }
}