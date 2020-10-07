const Jinhee = {
  name: "Jinhee",
  age: 26,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => Jinhee,
  },
};

export default resolvers;
