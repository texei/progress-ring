# Progress Ring lightning web component

*Description*  
An easy to use lightning web component that integrate SLDS "progress ring"  

[SLDS Progress Ring documentation](https://www.lightningdesignsystem.com/components/progress-ring/)

## How to use  
Exemple:  
`<c-progress-ring min="0" max="100" value="80" state="normal"></c-progress-ring>`  

States:  
Normal : ![Normal](https://github.com/texei/progress-ring/blob/master/assets/img1.png)  
Warning : ![Warning](https://github.com/texei/progress-ring/blob/master/assets/img2.png)    
Expired : ![Expired](https://github.com/texei/progress-ring/blob/master/assets/img3.png)    
Complete : ![Complete](https://github.com/texei/progress-ring/blob/master/assets/img4.png)    

_min_: value min (ex: 0)  
_max_: value max (ex: 100)  
_value_: current value (ex: 80)  
_state_: state of the progress ring (ex: warning, expired, active, complete, normal)  
  
## v1  
  
* Basics functionnalities for progress ring  
- Set values (min, max, current)  
- Set standards styles (warning, expired, active, complete, normal)  
  
  
## TODO  
* Add an option to have a setInterval effect  
* Add an option to customize line weight and style  
