const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const faker = require('faker');
chai.use(chaiHttp);
const mongoose = require('mongoose');

const {app, runServer, closeServer} = require('../server');

const {Driver} = require('../models');






//Tests static endpoints begin
describe('test for static page', function() {


  before(function() {
    return runServer();
  });


  after(function() {
    return closeServer();
  });



  	it('should return index.html page', function() {
  	let res;
	return chai.request(app)
		.get('/')
		.then(function(_res) {
			res = _res;
			res.should.have.status(200);
			res.should.be.html;
  	});
		});	
  
 
   
    it('should return add driver page', function() {
    let res;
  return chai.request(app)
    .get('/add-driver')
    .then(function(_res) {
      res = _res;
      res.should.have.status(200);
      res.should.be.html;
    });
    }); 


    it('should return review driver page', function() {

    });


    it('should return driver info page', function() {

    });
	

});
//Test static endpoints end





