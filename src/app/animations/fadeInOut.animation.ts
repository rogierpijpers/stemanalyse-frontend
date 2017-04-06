import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

export const fadeInOutAnimation: AnimationEntryMetadata =
trigger('routeAnimation', [
    state('*', 
        style({opcaity: 1})
    ),
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate('0.5s ease')
    ]),
    transition(':leave', [
        style({
            opacity: 0
        }),
        animate('0.5s ease')
    ])
])