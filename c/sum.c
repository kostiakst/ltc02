#include "stdio.h"

int sum(int num1, int num2) {
    int res = num1 + num2;
    return res;
}

int main() {
    int result = sum(1, 2);
    printf("1 + 2 = %d", result);
}
