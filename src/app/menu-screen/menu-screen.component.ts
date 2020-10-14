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
        {icon: '../../assets/images/screen2_menu_menu_mail.png', description: 'Mail Inbox', counter: 5},
        {icon: '../../assets/images/screen2_menu_menu_friends_w.png', description: 'Friends', counter: 4},
        {icon: '../../assets/images/screen2_menu_menu_invites.png', description: 'Invites', counter: 2},
        {icon: '../../assets/images/screen2_menu_menu_bookmarks.png', description: 'Bookmarks'},
        {icon: '../../assets/images/screen2_menu_menu_settings.png', description: 'Account settings'}
    ];

    settings = ['Edit', 'Applications', 'Other'];
    friends = ['Mark', 'Anna', 'John'];
    mails = ['Invite', 'Goodluck today!', 'Where are you?'];

    currentlySelectedSectionOptions = [];
    currentlyOpenedDetailsIndex?: number;

    showList = false;

    showDetails(index: number): void {
        if (index === this.currentlyOpenedDetailsIndex) {
            this.currentlyOpenedDetailsIndex = null;
            this.currentlySelectedSectionOptions = [];
            return;
        }

        this.currentlySelectedSectionOptions = this.detailsForIndex(index);
        this.currentlyOpenedDetailsIndex = index;
    }

    detailsForIndex(index: number): string[] {
        switch (index) {
            case 0:
                return this.mails;
            case 1:
                return this.friends;
            case 4:
                return this.settings;
            default:
                return [];
        }
    }

}
