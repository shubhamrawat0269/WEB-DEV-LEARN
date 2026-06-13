# in this lecture, i study about IP Address

1. IP Address is a unique identifiers assigned to a system either by router or cell towers.
2. IPv4 consist of 32 bits divided into 4 Groups containing 8 bits.
3. For Example, 
   192.168.1.15
   11000000.10101000.00000000.00000001
4. Min : 0.0.0.0
   Max : 255.255.255.255

5. Subnet Mask - 
   Note: This is not ip address : 255.255.255.0 | 11111111 11111111 11111111 00000000
   Work : 
   Responsible for dividing IP Address into two parts 
   1st - Network Portion
   2nd - Host Portion

Note : it's not mandatory that subnet mask will be same like below: 

   255.255.255.0 | 11111111 11111111 11111111 00000000

   it can be 

   255.255.254.0 | 11111111 11111111 11111110 00000000

   but it's important that
   first occurence number of 1's should be contguous
   and then rest bit is of 0's

   But, ideally we see 255.255.255.0 when we type ipconfig in cmd terminal.
 
6. How many devices can be assigned with new IP address using IPv4 ?
  Solution : after doing calculation on programming calculator, we can provide 
  4294967295 (i.e. 4 billion) devices can be assignable to unique IP address

  But, world population is : 8.3 billion people
  Internet Devices : 30 to 35 billion

  But how is it possible to assign IP to 30 - 35 billion devices
  It's possible due to concept of private & public ip address

  private ip address can be same
  while, public are differ.


