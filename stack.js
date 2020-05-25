//栈 先进后出
function Stack(argument) {
	let items = []
	this.push=function(ele){
		items.push(ele)
	}
	this.pop=function(){
		return items.pop()
	}
	this.peek=function(){
		return items[items.length-1]
	}
	this.isEmpty=function(){
		return items.length === 0
	}
	this.clear=function(){
		return items.length = 0
	}
	this.size=function(){
		return items.length
	}
}

//10进制转2进制
function dec2b(dec,base=2){
	let stack = new Stack(),
	rem,
	binaryString = '',
	digits = '0123456789ABCDEF';

	while(dec>0){
		rem = Math.floor(dec % base)
		stack.push(rem)
		dec = Math.floor(dec/base)
	}

	while(!stack.isEmpty()){
		binaryString+=digits[stack.pop()]
	}

	return binaryString
}
console.log(dec2b(10))
console.log(dec2b(100))
console.log(dec2b(255,8))
