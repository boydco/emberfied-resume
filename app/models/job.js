import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  company: DS.attr(),
  city: DS.attr(),
  location: DS.attr(),
  start: DS.attr(),
  end: DS.attr(),
  description1: DS.attr(),
  description2: DS.attr(),
  description3: DS.attr(),
  image: DS.attr()
});
