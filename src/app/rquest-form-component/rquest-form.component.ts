import { Component, OnInit } from '@angular/core';

import { ServiceRequest } from '../service-request';

@Component({
  moduleId: module.id,
  selector: 'app-request-form',
  templateUrl: './rquest-form.component.html',
  styleUrls: ['./rquest-form.component.css']
})
export class RquestFormComponent implements OnInit {

  requestTypes = [
    { id: 1, text: 'Type 1' },
    { id: 2, text: 'Type 2' },
    { id: 3, text: 'Type 3' },
    { id: 4, text: 'Type 4' }];

  model = new ServiceRequest('Jhon Doe', 'jd@doe.com', '(212) 555-5555', 'MR 1320', 'Test Request');
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  ngOnInit() {
  }

}
