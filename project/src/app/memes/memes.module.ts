import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemesComponentComponent } from './memes-component/memes-component.component';
import { MemesRoutingModule } from './memes-routing-module';
import { SharedModule } from "../shared/shared.module";
import { MemeDetailsComponent } from './meme-details/meme-details.component';



@NgModule({
    declarations: [
        MemesComponentComponent,
        MemeDetailsComponent
    ],
    imports: [
        CommonModule,
        MemesRoutingModule,
        SharedModule
    ]
})
export class MemesModule { }
