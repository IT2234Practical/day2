let array = ['a','b','c','d']
let newArray = []
console.log(array)

	for(let i=0; i< array.length; i++)
	{
		newArray.push(array.pop())
	}
	
	console.log(newArray)


/*output***************

C:\Users\ASUS\Desktop\Git\web\Day2>node ReversePushPop.js
[ 'a', 'b', 'c', 'd' ]
[ 'd', 'c', 'b', 'a' ]
