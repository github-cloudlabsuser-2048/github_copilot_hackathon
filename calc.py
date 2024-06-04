# Create a basic calculator app which can do operations like addition, subtraction, multiplication, division, square, square root, cube, cube root, power, factorial, etc.
# The app should take the input from the user and perform the operation.

import math
def calculator():
    print("Welcome to the Calculator App!")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")
    print("5. Square")
    print("6. Square Root")
    print("7. Cube")
    print("8. Cube Root")
    print("9. Power")
    print("10. Factorial")
    print("0. Exit")

    while True:
        choice = int(input("Enter your choice: "))

        if choice == 0:
            print("Thank you for using the Calculator App!")
            break

        elif choice == 1:
            num1 = float(input("Enter the first number: "))
            num2 = float(input("Enter the second number: "))
            result = num1 + num2
            print("Result: ", result)

        elif choice == 2:
            num1 = float(input("Enter the first number: "))
            num2 = float(input("Enter the second number: "))
            result = num1 - num2
            print("Result: ", result)

        elif choice == 3:
            num1 = float(input("Enter the first number: "))
            num2 = float(input("Enter the second number: "))
            result = num1 * num2
            print("Result: ", result)

        elif choice == 4:
            num1 = float(input("Enter the first number: "))
            num2 = float(input("Enter the second number: "))
            result = num1 / num2
            print("Result: ", result)

        elif choice == 5:
            num = float(input("Enter the number: "))
            result = num ** 2
            print("Result: ", result)

        elif choice == 6:
            num = float(input("Enter the number: "))
            result = math.sqrt(num)
            print("Result: ", result)

        elif choice == 7:
            num = float(input("Enter the number: "))
            result = num ** 3
            print("Result: ", result)

        elif choice == 8:
            num = float(input("Enter the number: "))
            result = math.pow(num, 1/3)
            print("Result: ", result)

        elif choice == 9:
            num1 = float(input("Enter the base number: "))
            num2 = float(input("Enter the exponent: "))
            result = num1 ** num2
            print("Result: ", result)

        elif choice == 10:
            num = int(input("Enter the number: "))
            result = math.factorial(num)
            print("Result: ", result)

        else:
            print("Invalid choice. Please try again.")

calculator()