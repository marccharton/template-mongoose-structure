module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      nom: String,
      type: String,
      mdp: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Users = mongoose.model("users", schema);
  return Users;
};
