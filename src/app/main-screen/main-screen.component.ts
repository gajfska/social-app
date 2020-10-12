import {Component} from '@angular/core';

export interface SocialModel {
    icon: string;
    time: string;
    author: string;
    description: string;
}

@Component({
    selector: 'app-main-screen',
    templateUrl: './main-screen.component.html',
    styleUrls: ['./main-screen.component.css']
})

export class MainScreenComponent {

    socialMenu: SocialModel[] = [
        {icon: '', time: '1 minute ago', author: 'by Mike | Creative Misto', description: 'Mechanical Grasshopper'},
        {icon: '', time: '21 minute ago', author: 'by Dash', description: 'Assistant App- Weather Hodule'},
        {icon: '', time: '1 hour ago', author: 'by Graham', description: 'Upcoming web agency'},
        {icon: '', time: '2 hours ago', author: 'by Bill & Kennedy', description: 'Bamboo Branding Wall Peace- not flat'},
    ];

}
