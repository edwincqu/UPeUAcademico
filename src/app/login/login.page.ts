import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(
        private router: Router,
        private barcodeScanner: BarcodeScanner,
        public alertController: AlertController
    ) { }

    ngOnInit() {
    }

    public home(): void {
        this.router.navigateByUrl('/home');

    }

    public scan(): void {
        this.barcodeScanner.scan().then(async barcodeData => {
            const alert = await this.alertController.create({
                header: 'Alert',
                subHeader: 'Subtitle',
                message: 'This is an alert message.' + barcodeData.text,
                buttons: ['OK']
            });
            await alert.present();
            console.log('Barcode data', barcodeData);
        }).catch(err => {
            console.log('Error', err);
        });
    }




}
