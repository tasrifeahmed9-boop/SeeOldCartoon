import { db } from "./firebase.js";

import {
collection,
getDocs,
query,
orderBy
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const cartoonCollection = collection(db, "cartoons");

async function loadCartoons() {

try {

const q = query(cartoonCollection, orderBy("createdAt", "desc"));

const snapshot = await getDocs(q);

console.log("Cartoons Loaded:", snapshot.size);

snapshot.forEach((doc) => {

console.log(doc.id, doc.data());

});

} catch (err) {

console.error(err);

}

}

loadCartoons();

