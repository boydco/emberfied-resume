import Ember from 'ember';

export default Ember.Controller.extend({
  numberData: Ember.computed('model', function(){
    return {
      labels: this.get('model').mapBy('name'),
      datasets: [{
        label: 'Skill',
        data: this.get('model').mapBy('taggings.length');

      }]
    }
  })
});
