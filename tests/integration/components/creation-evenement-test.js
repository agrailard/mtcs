import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('creation-evenement', 'Integration | Component | creation evenement', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{creation-evenement}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#creation-evenement}}
      template block text
    {{/creation-evenement}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
