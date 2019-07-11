import { LightningElement, api, track } from 'lwc';

export default class ProgressRing extends LightningElement {
    @api min;
    @api max;

    @track progress; // Value of the 'd' attribute of the progress-ring
    @track ringClass; // Use to save the current progress-ring class
    @track isComplete = false; // Use to render complete svg span

    @api 
    get value() {
        return this._value;
    }

    // Set the corresponding value to the progress ring
    set value(currentValue) {
       this.progress = "M 1 0 A 1 1 0 " + this.getQuotient(currentValue, this.max) + " 1 " +
                        Math.cos(2 * Math.PI * currentValue / this.max) + " " +
                        Math.sin(2 * Math.PI * currentValue / this.max) + " L 0 0";
        this.setAttribute('d', this.progress);
    }

    @api 
    get state() {
        return this._state;
    }

    /**
     * @param currentState : get the current state of the component (warning, complete, active ....) and apply the css style to the component
     */
    set state(currentState) {
        switch (currentState.toUpperCase()) {
            case 'WARNING':
                this.ringClass = 'slds-progress-ring slds-progress-ring_warning';
                break;
            case 'EXPIRED':
                this.ringClass = 'slds-progress-ring slds-progress-ring_expired';
                break;
            case 'ACTIVE':
                this.ringClass = 'slds-progress-ring slds-progress-ring_active-step';
                break;
            case 'COMPLETE':
                this.ringClass = 'slds-progress-ring slds-progress-ring_complete';
                this.isComplete = true;
                break;
            case 'NORMAL':
                this.ringClass = 'slds-progress-ring';
                break;
            default:
            this.ringClass = 'slds-progress-ring';
        }
     }

    /**
     * Method: GetQuotient
     * @param value : current value of the progress ring
     * @param max  : get the max value, set up by the component
     * Description : Get the quotient of the value / max to have the {isLong} value (a binary flag if the arc should 'take the long path' (used for > 50% fill)) 
     */
    getQuotient(value, max) {
        if (value / max >= 0.5) {
            return "1";
        }
        return "0";
    }
}