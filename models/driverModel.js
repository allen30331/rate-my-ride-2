const mongoose = require('mongoose');

const driverSchema = mongoose.Schema({
  driverName: {type: String, required: true},
  company: {type: String, required: true},
  tagNumber: {type: String, required: true},
  city: {type: String, required: true}
  });

driverSchema.set('toObject', {
  virtuals: true,
  getters: true
})


driverSchema.set('toJSON', {
  virtuals: true
})



driverSchema.methods.apiRepr = function() {
  return {
      id: this._id,
      driverName: this.driverName,
      company: this.company,
      tagNumber: this.tagNumber,
      city: this.city
      // averageDriverRating: this.averageDriverRating,
      // driverVibeSummary: this.driverVibeSummary,
      }
}



const Driver = mongoose.model('Driver', driverSchema);

module.exports = {Driver};