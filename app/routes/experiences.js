import Ember from 'ember';

let experiences = [
  {
    id: 'mcd-partners',
    title: 'Associate Web Developer',
    company: 'MCD Partners',
    city: 'Chicago, IL',
    location: 'Chicago',
    start: 'June, 2016',
    end: 'Present',
    description1: '',
    description2: '',
    description3: ''
  },
  {
    id: 'world-vision-australia',
    title: 'Web Content Editor',
    company: 'World Vision Australia',
    city: 'Melbourne, AU',
    location: 'Melbourne',
    start: 'June, 2016',
    end: 'Present',
    description1: '',
    description2: '',
    description3: ''
  },
  {
    id: 'oxford-press',
    title: 'Web Content Editor',
    company: 'Oxford University Press',
    city: 'Melbourne, AU',
    location: 'Melbourne',
    start: 'June, 2016',
    end: 'Present',
    description1: '',
    description2: '',
    description3: ''
  },
  {
    id: 'sendicate',
    title: 'Digital Marketing Intern',
    company: 'Sendicate',
    city: 'Melbourne, AU',
    location: 'Melbourne',
    start: 'June, 2016',
    end: 'Present',
    description1: '',
    description2: '',
    description3: ''
  },
  {
    id: 'imi-vegas',
    title: 'Digital Content Producer',
    company: 'Internet Marketing Inc',
    city: 'Las Vegas, NV',
    location: 'Las Vegas',
    start: 'June, 2016',
    end: 'Present',
    description1: '',
    description2: '',
    description3: ''
  },
  {
    id: 'solar-city',
    title: 'Incentives Program Coordinator',
    company: 'Solary City',
    city: 'Las Vegas, NV',
    location: 'Las Vegas',
    start: 'June, 2016',
    end: 'Present',
    description1: '',
    description2: '',
    description3: ''
  }
];

export default Ember.Route.extend({
  model() {
    return experiences;
  }
});
