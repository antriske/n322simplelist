import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

    groceries = [
        {item: "milk"},
        {item: "bread"},
        {item: "cheese"}
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  addItem() {
    let prompt = this.alertCtrl.create({
      title: "Add Item",
        inputs: [
            {name: "item"}
        ],

        buttons: [
            {
                text: "Cancel"
            },
            {
                text: "Add Item",
                handler:data => {
                  console.log(data);
                  this.groceries.push(data);
                }
            },
      ]
    });

      prompt.present();
  }
  deleteItem(groceryItem){
    let index = this.groceries.indexOf(groceryItem);

    this.groceries.splice(index, 1)
  }

  editItem(groceryItem){
      let prompt = this.alertCtrl.create({
          title: "Edit Item",
          inputs: [
              {name: "item",
              placeholder: groceryItem.item}
          ],

          buttons: [
              {
                  text: "Cancel"
              },
              {
                  text: "Save Item",
                  handler:data => {
                    let index = this.groceries.indexOf(groceryItem);
                    if(index > -1){
                      this.groceries[index] = data;
                    }
                  }
              },
          ]
      });

      prompt.present();
  }
}
