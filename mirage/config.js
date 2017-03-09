export default function() {
  this.namespace = '/api';

  this.get('/evenements', (schema, request) => {
    return schema.evenements.where({date: request.queryParams.date});
    //return schema.evenements.all();
  });

  this.get('/evenements/creation', (schema, request) => {
    return schema.evenements.create({
      date: request.queryParams.date,
      titre: request.queryParams.titre,
      description: request.queryParams.description
    });
    //return schema.evenements.all();
  });
}
