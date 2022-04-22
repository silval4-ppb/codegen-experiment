const flowers = [
    {
        id: 1,
        name: "Rose",
        color: 1,
        smell: 1,
    },
    {
        id: 2,
        name: "Tulip",
        color: 2,
        smell: 2,
    },
];

const resolver = {
    Query: {
        flowers: () =>
            flowers.map((flower) => {
                console.log(flower);
                return { id: flower.id };
            }),
    },
};

export default resolver;
