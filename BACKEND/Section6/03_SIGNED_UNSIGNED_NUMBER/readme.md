## In this lecture, we try to understand how we can represent negative numbers in binary. 

1. Computers represent numbers in binary. But binary alone doesn't indicate whether a number is positive or negative
2. For that we have signed and unsigned values concept
3. It is the responsibility of s/w to recognize that it's a signed value or unsigned? 

4. Unsigned only store positive values
5. 8-bit Unsigned Range:
0 to 255 (2⁸ = 256 possible values)

6. Signed & Unsigned value remain same till 127 You can check using tool.

7. Signed Binary used to represent both positive and negative numbers.
8. The most significant bit (MSB) is reserved as the sign bit:
0 → positive number
1 → negative number

9. 8-bit Signed Range:
-128 to +127
(Still 256 values, but split between negative and positive)

10. If MSB is 1, it is assumed to be negative, and system uses 2’s complement to get the actual value.
11. Take an example of how we can represent 15 in Signed Value 

+15 =  0000 1111
2's complement -> 1111 0000 + 1 = 241 (Signed)