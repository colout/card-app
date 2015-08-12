import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	shouldReloadAll: function() {
    	return true;
    },
	host: 'http://app.colout.co/c'
});