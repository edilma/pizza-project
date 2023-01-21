import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const client = new MongoClient(process.env.URI);
const db = client.db(process.env.DB_NAME);
const collection = db.collection(process.env.COLLECTION_NAME)

const pizza1 = {
    pizzaType : 1,
    name: "Peperoni",
    crust: "Traditional",
    cheese: "Mozzarella",
    toppin1: "pepperoni",
    toppin2: null,
    toppin3: null,
    size: "Medium",
    medium: 15
}
const pizza2 = {
    pizzaType:2,
    name: "Hawaian",
    crust: "Thin",
    cheese: "Mozzarella",
    toppin1: "Ham",
    toppin2: "Pineapple",
    toppin3: null,
    size: "Small",
    medium: 12
}
const pizza3 = {
    pizzaType: 3,
    name: "Vegetarian",
    crust: "Traditional",
    cheese: "Mozzarella",
    toppin1: "Green Peppers",
    toppin2: "Olives",
    toppin3: "Onions",
    size: "Large",
    medium: 18
}

const pizza4 = {
    pizzaType: 3,
    name: "All Meats",
    crust: "Traditional",
    cheese: "Mozzarella",
    toppin1: "Canadian Ham",
    toppin2: "Chicken",
    toppin3: "Meat Balls",
    size: "Extra Large",
    medium: 20
}

const customer1 ={
    customerType:1,
    name: "Daniel Silva",
    addres: "23 Main Street, Boca Raton, Fl 33433",
    phone: "5619087777",
    email: "DanielS@gmail.com",
    loyalty_point: "ds123"
}

const customer2 = {
    customerType:2,
    name: "Marcel Tairone",
    addres: "356 Weston Street, Boca Raton, Fl 33486",
    phone: "5615670877",
    email: "marcel345@gmail.com",
    loyalty_point: "mt123"
}
/*
const updateItem = async(thisId,fieldName, fieldValue) => {
    const itemId    = { _id: new ObjectId(thisId)};
    const itemQuery = { $set: {[fieldName] : fieldValue} };
    const result    = await collection.findOneAndUpdate (itemId,itemQuery);
    console.log ("Item Updated: ", result);
}
*/

const insertItem = async (item) => {
    const result = await collection.insertOne(item);
    console.log("The item is inserted ", item.name)

}

const getItems = async (thisId) => {
    const itemId = {id_: new ObjectId(thisId)};
    const result = await collection.find(itemId).limit(0).toArray();
    console.table(result);

}

const order1 = {
    order_items:{"63cae9c840130c21b3332389": 1},
    customer_id: "63caeb50acd91c1925bb606d",
    delivery: true
    };
const order2 = {
        order_items:[{"63cae9c840130c21b3332389": 1}, {"63cae9d659faa1a1f27f988e":1},{"63cae9d659faa1a1f27f988f":1}],
        customer_id: "63caeb51acd91c1925bb606e",
        delivery: true
    }
const order3 = {
        order_items:[{"63cae9c840130c21b3332389": 2}, {"63cae9d659faa1a1f27f988e":1}],
        customer_id: "63caeb51acd91c1925bb606e",
        delivery: true
    }




//await insertItem(pizza4)
//await insertItem(order2);
// await insertItem(pizza3);

// await insertItem(customer1);
// await insertItem(customer2);
 await getItems("63caeb50acd91c1925bb606d")



client.close();
