import Ember from 'ember';

// COMMENTING OUT EXPERIENCES HARD CODE FOR MIRAGE API CALL VERSION

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
    description3: '',
    image: '/images/chicago-theatre-exp.jpg'
  },
  {
    id: 'world-vision-australia',
    title: 'Web Content Editor',
    company: 'World Vision Australia',
    city: 'Melbourne, AU',
    location: 'Melbourne, Australia',
    start: 'June, 2015',
    end: 'Oct, 2015',
    description1: '',
    description2: '',
    description3: '',
    image: '/images/melbourne-flinders-exp.jpg'
  },
  {
    id: 'oxford-press',
    title: 'Web Content Editor',
    company: 'Oxford University Press',
    city: 'Melbourne, AU',
    location: 'Melbourne, Australia',
    start: 'March, 2015',
    end: 'June, 2015',
    description1: '',
    description2: '',
    description3: '',
    image: '/images/ox-press-exp.jpg'
  },
  {
    id: 'sendicate',
    title: 'Digital Marketing Intern',
    company: 'Sendicate',
    city: 'Melbourne, AU',
    location: 'Melbourne, Australia',
    start: 'Jan, 2015',
    end: 'March, 2015',
    description1: '',
    description2: '',
    description3: '',
    image: '/images/sendicate-exp.jpg'

  },
  {
    id: 'imi-vegas',
    title: 'Digital Content Producer',
    company: 'Internet Marketing Inc',
    city: 'Las Vegas, NV',
    location: 'Las Vegas',
    start: 'Jan, 2014',
    end: 'Sept, 2014',
    description1: '',
    description2: '',
    description3: '',
    image: '/images/vegas-exp.jpg'
  },
  {
    id: 'freelance',
    title: 'Freelance Web Dev and Design',
    company: 'Freelance',
    city: 'Planet Earth',
    location: 'All Over',
    start: 'Sept, 2014',
    end: 'Present',
    description1: '',
    description2: '',
    description3: '',
    image: '/images/nz-exp.jpg'
  }
];

export default Ember.Route.extend({
  model() {
    // return this.get('store').findAll('job');

    // REMOVING HARD CODE EXPERIENCES CALL
    return experiences;
  }
});
