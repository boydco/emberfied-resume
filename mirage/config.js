export default function() {
    this.namespace = '/api';


    this.get('/experiences', function() {
      return {
        data: [{
            type: 'job-listing',
            id: 'mcd-partners',
            attributes: {
              title: 'Associate Web Developer',
              company: 'MCD Partners',
              city: 'Chicago, IL',
              location: 'Chicago',
              start: 'June, 2016',
              end: 'Present',
              description1: 'aaaaa',
              description2: 'bbbbbb',
              description3: 'ccccccc',
              image: 'http://www.australia.com/content/australia/en_ca/places/melbourne/top-10-things-to-do/_jcr_content/image.adapt.761.medium.jpg'
            }
          },
          {
            type: 'job-listing',
            id: 'world-vision-australia',
            attributes: {
              title: 'Web Content Editor',
              company: 'World Vision Australia',
              city: 'Melbourne, AU',
              location: 'Melbourne',
              start: 'June, 2016',
              end: 'Present',
              description1: '',
              description2: '',
              description3: '',
              image: 'http://www.australia.com/content/australia/en_ca/places/melbourne/top-10-things-to-do/_jcr_content/image.adapt.761.medium.jpg'
            }
          },
          {
            type: 'job-listing',
            id: 'oxford-press',
            attributes: {
              title: 'Web Content Editor',
              company: 'Oxford University Press',
              city: 'Melbourne, AU',
              location: 'Melbourne',
              start: 'June, 2016',
              end: 'Present',
              description1: '',
              description2: '',
              description3: '',
              image: 'http://www.australia.com/content/australia/en_ca/places/melbourne/top-10-things-to-do/_jcr_content/image.adapt.761.medium.jpg'
            }
          },
          {
            type: 'job-listing',
            id: 'sendicate',
            attributes: {
              title: 'Digital Marketing Intern',
              company: 'Sendicate',
              city: 'Melbourne, AU',
              location: 'Melbourne',
              start: 'June, 2016',
              end: 'Present',
              description1: '',
              description2: '',
              description3: '',
              image: 'http://www.australia.com/content/australia/en_ca/places/melbourne/top-10-things-to-do/_jcr_content/image.adapt.761.medium.jpg'
            }
          },
          {
            type: 'job-listing',
            id: 'imi-vegas',
            attributes: {
              title: 'Digital Content Producer',
              company: 'Internet Marketing Inc',
              city: 'Las Vegas, NV',
              location: 'Las Vegas',
              start: 'June, 2016',
              end: 'Present',
              description1: '',
              description2: '',
              description3: '',
              image: 'http://www.australia.com/content/australia/en_ca/places/melbourne/top-10-things-to-do/_jcr_content/image.adapt.761.medium.jpg'
            }
          },
          {
            type: 'job-listing',
            id: 'solar-city',
            attributes: {
              title: 'Incentives Program Coordinator',
              company: 'Solary City',
              city: 'Las Vegas, NV',
              location: 'Las Vegas',
              start: 'June, 2016',
              end: 'Present',
              description1: '',
              description2: '',
              description3: '',
              image: 'http://www.australia.com/content/australia/en_ca/places/melbourne/top-10-things-to-do/_jcr_content/image.adapt.761.medium.jpg'
            }
          }
        ]
      };
    });
}
