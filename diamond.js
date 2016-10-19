const space = function(spc){
	var str ='';
	   for(var i=0;i<spc;i++){
	   str +='';
	   }
	   return str;
}
const star = function(star){
	var str ='';
	for(var i=0;i<star;i++){
		str +='*'
	}
	return str;
}
const run = function(sps,str){
	console log(space(spc)
		+star(str));
}
const run2 = function(n){
	if(n%2===0)
	{
		n+=1;
	}
	var a=1
	for(var i=1;i<=n/2+1;i++)
	{
		run(n/2-i,a);
		a+=2;
	}
	var b = n-2;
	for(var i=1;1<=n/2+1;i++)
	{
		run(i,b);
		b-=2;
	}
}
run2(11);