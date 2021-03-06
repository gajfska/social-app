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
        {
            icon: '../../assets/images/screen1_content_post1_phone.png',
            time: '1 minute ago ',
            author: 'by Mike | Creative Minst',
            description: 'Mechanical Grasshopper'
        },
        {
            icon: '../../assets/images/screen1_content_post2_cloud.png',
            time: '21 minute ago ',
            author: 'by Dash',
            description: 'Assistant App- Weather Module'
        },
        {
            icon: '../../assets/images/screen1_content_post3_picture.png',
            time: '1 hour ago ',
            author: 'by Zeki Ghulam',
            description: 'Flat & Filthy- My upcoming web agency'
        },
        {
            icon: '../../assets/images/screen1_content_post4_logo.png',
            time: '2 hours ago ',
            author: 'by Bill & Kennedy',
            description: 'Bamboo Branding Wall Peace- not flat'
        },
    ];

    badgeCounter = 2;

    addLike(): void {
        this.badgeCounter++;
    }

    onDelete(index: number): void {
        this.socialMenu.splice(index, 1);
    }

}
