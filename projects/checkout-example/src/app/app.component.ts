import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<klump-checkout (btnClick)="pay()"></klump-checkout>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'checkout-example';

  publicKey = 'klp_pk_1234abdc5678'
  data = {
    amount: 4100,
    shipping_fee: 100,
    currency: 'NGN',
    redirect_url: 'https://verygoodmerchant.com/checkout/confirmation',
    merchant_reference: 'what-ever-you-want-this-to-be',
    meta_data: {
      customer: 'Elon Musk',
      email: 'musk@spacex.com'
    },
    items: [
      {
        image_url:
          'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        item_url: 'https://www.paypal.com/in/webapps/mpp/home',
        name: 'Awesome item',
        unit_price: '2000',
        quantity: 2,
      }
    ]
  }

  onSuccess(data: any){
    console.log('html onSuccess will be handled by the merchant');
    console.log(data);
    return data;
  }
  onError(data: { message: string, type: string }){
      console.log('html onError will be handled by the merchant');
      console.log(data);
  }
  onLoad(data: { status: boolean, type: string }){
    console.log('html onLoad will be handled by the merchant');
    console.log(data);
  }
  onOpen(data: { status: boolean, type: string }){
    console.log('html OnOpen will be handled by the merchant');
    console.log(data);
  }
  onClose(data: { status: boolean, type: string }){
    console.log('html onClose will be handled by the merchant');
    console.log(data);
  }

  pay(){
    // @ts-ignore
    new Klump(
      {
        publicKey: this.publicKey,
        data: this.data,
        onSuccess: this.onSuccess,
        onError: this.onError,
        onLoad: this.onLoad,
        onOpen: this.onOpen,
        onClose: this.onClose
      }
    )
  }
}
