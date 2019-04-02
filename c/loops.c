#include "stdio.h"

int main() {
	int ourarray[] = {1,1,2,3,5,8,13,21};
	int len = sizeof(ourarray) / sizeof(ourarray[0]);
	int sum = 0;
	int i;
	for (i = 0; i < len; i++) {
		sum = sum + ourarray[i];
	}
	int prod = ourarray[0];
	i = 0;
	while (i < len) {
		if (i%2 == 0) {
			prod = prod * ourarray[i];
		}
		i++;
	}
	printf("sum is: %d\n", sum);
	printf("product is: %d\n", prod);
}