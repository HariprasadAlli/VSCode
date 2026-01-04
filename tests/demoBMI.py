#BMI = weight in kgs / (height in m)^2

weight = float(input("Enter weight of yours in kgs: "))
height = float(input("Enter height of yours in m: "))

print(f"your BMI: {weight/(height**2)}")

principle = int(input("Enter the amoount borrowed: "))
years = float(input("Enter the period in years: "))
rate = float(input("Enter rate of interest: "))

interest = principle*years*rate / 100
print("principle amount is $" + str(principle)  + " total years are " + str(years) + " rate of interest " + str(rate) + "% then total interest is "+ str(interest))
print(f"principle amount is ${principle} total years are {years} rate of interest {rate}% then total interest is {interest}")
