import Ember from 'ember';


let education = [
  {
    id: 'msu',
    school: 'Michigan State University',
    location: 'East Lansing, MI',
    degree: 'Bachelor of Arts - English',
    graduated: 'December 2011',
    image: 'http://media.mlive.com/lansing-news/photo/msu-beaumont-tower-lansingjpg-00dbd411c7471584.jpg'
  },
  {
    id: 'dev-academy',
    school: 'Enspiral Dev Academy',
    location: 'Wellington, New Zealand',
    degree: 'Full Stack Javascript Course',
    graduated: 'February 2016',
    image: 'http://www.planetware.com/photos-large/NZ/new-zealand-wellington-cable-car.jpg'
  }
];

export default Ember.Route.extend({
  model() {
    return education;
  }
});
