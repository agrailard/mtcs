export default function() {
  this.namespace = '/api';

  let evenements = [{
      type: 'evenement',
      id: 1,
      attributes: {
        date: '20170310',
        titre: 'Un Evenement',
        description: 'description de l\'évènement'
      }
    }, {
      type: 'evenement',
      id: 2,
      attributes: {
        date: '20170310',
        titre: 'Un autre Evenement',
        description: 'description de l\'autre évènement'
      }
    }, {
      type: 'evenement',
      id: 2,
      attributes: {
        date: '20170308',
        titre: 'Evenement',
        description: 'super description de l\'évènement'
      }
    }
  ];

  this.get('/evenements', function(db, request) {
    let filtre = [];
    filtre = evenements.filter(function(i) {
      return i.attributes.date.indexOf(request.queryParams.date) !== -1;
    });
    return {data: filtre};
  });
}
