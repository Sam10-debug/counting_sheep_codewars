
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

//my solution

function countSheeps(arrayOfSheep) {
	let arr=[]
	arrayOfSheep.forEach(x=>{
	  if(x===true){
		  arr.push(x)
	  }
	})
	// TODO May the force be with you
	  return arr.length
  }