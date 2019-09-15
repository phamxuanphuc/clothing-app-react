export const addItem = (item, bag) => {
  const itemExist = bag.find(bagItem => bagItem.id === item.id);
  if (itemExist) {
    return bag.map(item => item.id === itemExist.id ? {...item, quantity : item.quantity + 1} : {...item})

    // var stt=0;
    // for (let i=0; i<bag.length; i++){
    //   if(bag[i].id=== ItemExist.id){
    //     stt = i
    //   }
    // }
    // bag[stt].quantity++;
    // return [...bag]

  } else {
    return [...bag, {...item, quantity: 1}]
  }
};