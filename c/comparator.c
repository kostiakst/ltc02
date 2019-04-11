#include "stdlib.h"
#include "stdio.h"

int reverse_sorter(const void *first_arg, const void *second_arg) {
    int first = *(int*) first_arg;
    int second = *(int*) second_arg;
	
    if (first < second) {
		return 1;
	}
	if (first > second) {
		return -1;
	}
	if (first == second) {
		return 0;
	}

}

int main() {
	int array[10] = {3, 5, 1, 7, 2, 7, 6, 0, 8, 4};

	int len = sizeof(array) / sizeof(array[0]);

	qsort(array, len, sizeof(int), reverse_sorter);

	int loop;
	for(loop = 0; loop < 10; loop++) {
		printf("%d ", array[loop]);
	}
}