import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import {env} from 'src/environments/env';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient ({
    space: env.contentful.spaceID,
    accessToken: env.contentful.token,
    
  });


  getAllEntries() {
    const promise = this.client.getEntries()
    return from(promise);
    
}


}
