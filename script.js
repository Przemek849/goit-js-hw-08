

//Zad. 2
const json = '{"name":"Mango","age":3,"isHappy":true}'

const jsonToJsObject = JSON.parse(json);

console.log(jsonToJsObject);

console.log(jsonToJsObject.name, jsonToJsObject.age, jsonToJsObject.isHappy);


//Zad. 3
const wrongJson = '{"name":"Mango","age":3,"isHappy":true]]}'
try {
    const wrongJsonToJsObject = JSON.parse(wrongJson);
    console.log(wrongJsonToJsObject);
}
catch (error) {
    console.log(error.name);
    console.log(error.message);
}