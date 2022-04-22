const colors = [
    {
        id: 1,
        name: "Red",
    },
    {
        id: 2,
        name: "Yellow",
    },
];

const resolver = {
    Color: {
        id: ({ id }) => id,
        name: ({ id }) => colors.find((smell) => smell.id === id).name,
    },
};

export default resolver;
