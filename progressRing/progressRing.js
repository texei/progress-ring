import { LightningElement, api, track } from 'lwc';

export default class ProgressRing extends LightningElement {
    @api min;
    @api max;
    @api large = false;

    @track progress; // Value of the 'd' attribute of the progress-ring
    @track isComplete = false; // Use to render complete svg span
    @track _state;

    @api 
    get value() {
        return this._value;
    }

    // Set the corresponding value to the progress ring
    set value(currentValue) {
        this._value = currentValue;
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
     * @param currentState : get the current state of the component (warning, complete, active ....)
     * CSS Styling is done in ringClass getter to handle both state and large properties
     */
    set state(currentState) {
        if (currentState.toUpperCase() === 'COMPLETE') {
            this.isComplete = true;     
        }
        this._state = currentState;
     }

    get ringClass() {
        let ringClass = (this.large === true) ? 'slds-progress-ring slds-progress-ring_large' : 'slds-progress-ring';
        switch (this._state.toUpperCase()) {
            case 'WARNING':
                return ringClass + ' slds-progress-ring_warning';
            case 'EXPIRED':
                return ringClass + ' slds-progress-ring_expired';
            case 'ACTIVE':
                return ringClass + ' slds-progress-ring_active-step';
            case 'COMPLETE':
                return ringClass + ' slds-progress-ring_complete';
            case 'NORMAL':
                return ringClass;
            default:
                return ringClass;
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