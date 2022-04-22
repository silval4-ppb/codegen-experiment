const smells = [
    {
        id: 1,
        name: "Strong",
    },
    {
        id: 2,
        name: "Weak",
    },
];

const resolver = {
    Smell: {
        id: ({ id }) => id,
        name: ({ id }) => smells.find((smell) => smell.id === id).name,
    },
};

export default resolver;
