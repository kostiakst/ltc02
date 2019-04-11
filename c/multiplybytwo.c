#include "stdio.h"

void bytwo(int *arg) {
	int temp = *arg;
	*arg = temp * 2;
}

int main() {
	int myvar = 42;
	bytwo(&myvar);
	printf("value of my var is: %d", myvar);
}