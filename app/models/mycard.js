import DS from 'ember-data';

export default DS.Model.extend({

	//Changes text with {*} tokens and characters into HTML tags
	//Images from http://tappedout.net/s//img/mana-symbols/mana-symbol-{imagename}.png
	//notepad for fiddling without compiler https://jsfiddle.net/33nxfvoh/
	reformatHTML: function(intext) {
		var outHTML = document.createElement("article");
		if (intext != null) {
			//Split by { and keep delimeter
			var a = intext.split(/({.*?})/);

			// Loop through array of formatters and nonformatted text
		    a.forEach(function (b) {
		    	//If it has a '}', then it's a formatter
		        if (b.indexOf("}") > 0) {

		        	//Remove { and }
		            var imagename = b.substring(1, (b.length - 1));

		            //Image details to add:
		            var DOM_img = document.createElement("img");
		            DOM_img.src = "/img/mana/" + imagename + ".png";
		            DOM_img.className = "inlineicon";
		            outHTML.appendChild(DOM_img);

		        } else {
		            //No formatters?  It's plain text and we can split by line return
		         	var c = b.split(/\n/);

		         	//...oldschool iteration so we know the element number
					for (var i=0; i<c.length; ++i) {
					    outHTML.appendChild(document.createTextNode(c[i]));

						// if not the last element, add <p>
					    if (i < c.length - 1) {outHTML.appendChild(document.createElement("br"));}
					}
		        }
		    });

			return outHTML;
		}
	},

	//From JSON (no modifications)
	name: DS.attr('string'),
	cost:  DS.attr('string'), 
	toughness: DS.attr('string'),
	power: DS.attr('string'),
	text:  DS.attr('string'), 
	primarycolor: DS.attr('string'),
	typedesc: DS.attr('string'),
	
	// HTML Formatted...
	visualcost: function() {
		return this.reformatHTML(this.get('cost'));
	}.property('cost'),

	visualtext: function() {
		return this.reformatHTML(this.get('text'));
	}.property('text')
});
