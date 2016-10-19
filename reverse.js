var arr=['5',
7,6,8,6,9,53322,69,82,'p',2];
for (var i = 0;i<arr.length;i++)
{
	var a = arr[i];
	arr[i] = arr[arr.length-1-i];
	arr[arr.length-1-i]=a;
}
console.log(arr)
console.log(arr.reverse());