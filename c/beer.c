#include "stdio.h"

int beer(int beers) {
	if (beers == 0) {
		printf("No more bottles of beer on the wall, no more bottles of beer.\nWe've taken them down and passed them around; now we're drunk and passed out!");
		return 0;
	}
	else if (beers == 1){
		printf("One bottle of beer on the wall, one bottle of beer.\n");
		printf("Take one down, pass it around, no more bottles of beer on the wall...\n");
		--beers;
	}
	else if (beers == 2) {
		printf("%d bottles of beer on the wall, %d bottles of beer.\n", beers, beers);
		printf("Take one down, pass it around, one bottle of beer on the wall...\n");
		--beers;
	}
	else {
		printf("%d bottles of beer on the wall, %d bottles of beer.\n", beers, beers);
		--beers;
		printf("Take one down, pass it around, %d bottles of beer on the wall...\n", beers);
	}
	beer(beers);
}

int main() {
	beer(99);
}