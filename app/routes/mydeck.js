import Ember from 'ember';

var inflector = Ember.Inflector.inflector;
inflector.irregular('mycard', 'mydeck');

export default Ember.Route.extend({
	model: function() {
        return this.store.findAll('mycard');
	}
});
