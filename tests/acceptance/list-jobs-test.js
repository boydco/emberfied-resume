import { test } from 'qunit';
import moduleForAcceptance from 'emberfied-resume/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list jobs');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
