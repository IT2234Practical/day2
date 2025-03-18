//Find sum
let arr = [1,2,3,4,5,6]

let target = 7

for(let i=0; i< arr.length; i++)
{
	for(let j=0; j<arr.length; j++)
	{
		if(target==arr[i]+arr[j])
		{
			console.log(arr[i],arr[j])
		}
	}
}


/*output*********************8

C:\Users\ASUS\Desktop\Git\web\Day2>node SumTarget.js
1 6
2 5
3 4
4 3
5 2
6 1

C:\Users\ASUS\Desktop\Git\web\Day2>
