import { LightningElement, track } from 'lwc';

export default class BikeComponent extends LightningElement {
    @track
    name = 'Sonu Kashyap';
    description = 'This is sonu kashyap';
    category = 'Computer Application';
    material = 'Monitor';
    price = '$2,700';
    priceUrl = 'https://www.lg.com/in/images/monitors/MD05994921/gallery/Global_20MK400A_2018_Gallery_Large_01.jpg'
    ready = false;
    connectedCallback() {
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        setTimeout(() => {
            this.ready = true;
        }, 3000);
    }
}