const reviewSchema = mongoose.Schema({
  userId: {type: String},
  rating: {type: Number, required: true},
  driverVibe: {type: String, required: true},
  comment: {type: String, required: true},
  driverId: {type: String, required:true}
  });



reviewSchema.methods.apiRepr = function() {
  return {
      id: this._id,
      userId: this.userId,
      rating: this.rating,
      driverVibe: this.driverVibe,
      comment: this.comment,
      driverId: this.driverId
      }
}





const Review = mongoose.model('Review', reviewSchema);

module.exports = {Review};