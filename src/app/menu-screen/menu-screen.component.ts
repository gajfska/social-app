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
        {icon: '', description: 'Mail inbox', counter: 5},
        {icon: '', description: 'Friends', counter: 25},
        {icon: '', description: 'Invites', counter: 1},
        {icon: '', description: 'Bookmarks'},
        {icon: '', description: 'Account settings'}
    ];

}
