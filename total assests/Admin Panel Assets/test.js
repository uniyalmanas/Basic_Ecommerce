
// const obj =    {  id: 32,
// name: "Boys Orange Colourblocked Hooded Sweatshirt",
// category: "kid",
// image: "/static/media/product_32.25cb9f190076ae6e5f82.png",
// new_price: 85,
// old_price: 120.5
// }

const { all_product } = {
    all_product: [
        {
            id: 1,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            category: "women",
            image: "/static/media/product_1.5a757396ee7ff5dd91c1.png",
            new_price: 50,
            old_price: 80.5
        },
        {
            id: 2,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            category: "women",
            image: "/static/media/product_2.d4e74f367160ec10fb34.png",
            new_price: 85,
            old_price: 120.5
        },
        {
            id: 3,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            category: "women",
            image: "/static/media/product_3.be48863df18b272b8f59.png",
            new_price: 60,
            old_price: 100.5
        },
        {
            id: 4,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            category: "women",
            image: "/static/media/product_4.ea0420ca9cec08d6df05.png",
            new_price: 100,
            old_price: 150
        },
        {
            id: 5,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            category: "women",
            image: "/static/media/product_5.437deb074cfe97900c5e.png",
            new_price: 85,
            old_price: 120.5
        }
        ,
        {
            id: 6,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            category: "men",
            image: "/static/media/product_5.437deb074cfe97900c5e.png",
            new_price: 85,
            old_price: 120.5
        },
        {
            id: 7,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            category: "men",
            image: "/static/media/product_5.437deb074cfe97900c5e.png",
            new_price: 85,
            old_price: 120.5
        }
    ]
};

all_product.map((item) => {
    if ('men' === item.category) {
        console.log(item);
    }
});

