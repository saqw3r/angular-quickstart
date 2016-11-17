import {Input, Component, Output, EventEmitter} from '@angular/core';

import { Hero } from './hero';

@Component({
    moduleId: module.id,
    selector: 'my-herolist',
    templateUrl: 'herolist.template.html',
    inputs: ['heroList'],
    outputs: ['notify']
})

export class HeroListComponent {
	heroList: Hero[];
    @Input() selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.notify.emit(hero);
    }

    notify: EventEmitter<Hero> = new EventEmitter<Hero>();
}