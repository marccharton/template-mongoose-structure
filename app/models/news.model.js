module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const News = mongoose.model("news", schema);
  return News;
};
