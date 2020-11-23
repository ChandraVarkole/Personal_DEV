import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import Solvvy from '@salesforce/resourceUrl/V1_SolvvyJS'

export default class externalJSHolder extends LightningElement {
    renderedCallback() {
        Promise.all([
            loadScript(this, Solvvy)                       
        ]).then(() => { 
            //$(this.template.querySelector('Solvvy')).text("JQuery Loaded");            
         }).catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error loading Jquery',
                    message: error,
                    variant: 'error'
                })
            );
        });
    }
}