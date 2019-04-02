let ourarray = [1,1,2,3,5,8,13,21];
let len = ourarray.length;

let i = 0;
let sum = 0;
for (i = 0; i < len; i++) {
	sum = sum + ourarray[i];
}

i = 0;
let prod = ourarray[0];
while (i < len) {
	if (i%2 == 0) {
		prod = prod * ourarray[i];
	}
	i++;
}

console.log("sum is: " + sum);
console.log("product is: " + prod);