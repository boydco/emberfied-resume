import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('should transition to experiences route', function(assert) {
  let route = this.subject({
    replaceWith(routeName) {
      asser.equal(routeName, 'experiences', 'replace with route name experiences');
    }
  });
  route.beforeModel();
});
