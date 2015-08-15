import Ember from 'ember';
import ajax from 'ic-ajax';
import layout from '../templates/components/slack-invite';
const { Component } = Ember;

export default Component.extend({
  layout: layout,

  ajaxError:   null,
  ajaxOptions: null,
  apiToken:    null,
  apiUrl:      null,
  email:       null,

  ajaxOptions(){
    return {
      url: 'https://' + this.get('apiUrl') + '/api/users.admin.invite',
      form: {
        email:      this.get('email'),
        token:      this.get('apiToken'),
        set_active: true
      }
    }
  },

  actions: {
    request(){
      ajax(this.ajaxOptions()).then(
        response => {
          this.sendAction('ajaxResponse', response);
        },
        error => {
          this.sendAction('ajaxError', error);
        }
      );
    }
  }
});
