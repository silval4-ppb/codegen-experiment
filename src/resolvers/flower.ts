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
    Flower: {
        id: ({ id }) => id,
        name: ({ id }) => flowers.find((flower) => flower.id === id).name,
        color: ({ id }) => {
            const colorId = flowers.find((flower) => flower.id === id).color;
            return { id: colorId };
        },
        smell: ({ id }) => {
            const smellId = flowers.find((flower) => flower.id === id).smell;
            return { id: smellId };
        },
    },
};

export default resolver;
