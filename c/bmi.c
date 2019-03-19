#include "stdio.h"

float bmi(float height, float weight) {
	float bmindex;
	bmindex = weight/(height*height);
	return bmindex;
}

int main() {
	int hgt;
	int wgt;
	
	printf("Let's assume you're adult of 20 years or above.\n");
	printf("Enter height in cm: \n");
	scanf("%d", &hgt);
	printf("Enter weight in kg: \n");
	scanf("%d", &wgt);
	
	float fhgt;
	float fwgt;
	
	fhgt = (float)hgt/100;
	fwgt = (float)wgt;
	
	float bmndx;
	bmndx = bmi(fhgt, fwgt);
	
	if (bmndx < 18.5) {
		printf("Your BMI is %f. You're underweight.", bmndx);
	}
	else if (bmndx > 18.5 && bmndx < 24.9) {
		printf("Your BMI is %f. You're normal.", bmndx);
	}
	else if (bmndx > 25.0 && bmndx < 29.9) {
		printf("Your BMI is %f. You're overweight.", bmndx);
	}
	else
		printf("Your BMI is %f. You're obese.", bmndx);
}
	