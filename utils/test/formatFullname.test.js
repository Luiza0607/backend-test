const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullname', () => {

	it('should return an error if the argument is empty', () => {
		expect(formatFullname('')).to.equal('Error');
	});

	it('should return an error if the arg is not a string', () => {
		expect(formatFullname([])).to.equal('Error');
		expect(formatFullname({})).to.equal('Error');
		expect(formatFullname(123)).to.equal('Error');
		expect(formatFullname(() => {})).to.equal('Error');
		expect(formatFullname(undefined)).to.equal('Error');
	});

	it('should return an error if "fullName" arg has different format than <firstname> <lastname>', () => {
		expect(formatFullname('Jerry')).to.equal('Error');
		expect(formatFullname('Sax')).to.equal('Error');
		expect(formatFullname('Jerry Sax Test')).to.equal('Error');
	});

	it('should return formatted full name if proper argument', () => {
		expect(formatFullname('jerry sax')).to.equal('Jerry Sax');
		expect(formatFullname('JERRY SAX')).to.equal('Jerry Sax');
		expect(formatFullname('jErry sAx')).to.equal('Jerry Sax');
	});

});