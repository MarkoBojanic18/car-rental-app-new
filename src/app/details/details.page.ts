import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { pickerController, PickerOptions } from '@ionic/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
   currentNumber = 0;
colors='';
   constructor(private pickerCtrl:PickerController) { }

  ngOnInit() {
  }

   increment() {
    this.currentNumber++;
    this.currentNumber += 1;
  console.log(this.currentNumber + 1);
  }
  
   decrement() {

    if(this.currentNumber-1 < 1){
      this.currentNumber = 1;
      console.log('item_1->' + this.currentNumber)
    }
    else{
      this.currentNumber -= 1;
      console.log('item_2->' + this.currentNumber);
    }
  }

 async showBasicPicker(){
    let opts:PickerOptions={
buttons:[
  {
text: 'Cancel',
role:'cancel'
},
{
  text: 'Done'
}
],
columns:[
  {
name: 'colors',
options:[
  {text: 'Red', value: 'red'},
  {text: 'White', value: 'white'},
  {text: 'Black', value: 'black'},
  {text: 'Blue', value: 'blue'},
  {text: 'Brown', value: 'brown'}
]
}
]
    };
    let picker=await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data=>{
      let col=await picker.getColumn('colors');
      console.log('col: ', col);
      this.colors=col.options[col.selectedIndex].text;
    });
  }
}








