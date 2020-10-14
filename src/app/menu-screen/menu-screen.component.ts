import {Component} from '@angular/core';

export class MenuModel {
    icon: string;
    description: string;
    counter?: number;
}

@Component({
    selector: 'app-menu-screen',
    templateUrl: './menu-screen.component.html',
    styleUrls: ['./menu-screen.component.css']
})

export class MenuScreenComponent {

    menu: MenuModel[] = [
        {icon: '../../assets/images/screen2_menu_menu_mail.png', description: 'Mail inbox', counter: 5},
        {icon: '../../assets/images/screen2_menu_menu_friends.png', description: 'Friends', counter: 25},
        {icon: '../../assets/images/screen2_menu_menu_invites.png', description: 'Invites', counter: 1},
        {icon: '../../assets/images/screen2_menu_menu_bookmarks.png', description: 'Bookmarks'},
        {icon: '../../assets/images/screen2_menu_menu_settings.png', description: 'Account settings'}
    ];

}
