## In lecture 1,

1. We have client who makes request to the server and server is a machine with a pub_ip : 104.0.2.9 runs 24/7.
2. User can only access to our server using IP . But ip is hard to remember because of combination of digits.
3. That's why DNS Server come into play, it provide user a domain which is associated with the ip such that user 
don't have to remember ip. User request DNS with Domain and DNS respond with the corresponding IP Address.
4. This process is called to be **DNS resolution**.
5. DNS server is a global directory which works like a Telephone directory. 

----------------------

6. Server is a physical machine which has CPU's and RAM and size varies. 
7. When the traffic (i.e. no. of user requests) goes up, less resource wala server (i.e. A machine which has minimum RAM size & 
CPU's) can't handle it and become bottleneck to the user.
8. Increasing RAM size and CPU's if cost was no concern will eventually help in handling multiple user requests. This is known as **Vertical Scaling** But still,
if we are increasing resources, it could cost heavy even when they are not needed.
9. Vertical Scaling has a limitation that it cause **downtime** because we can't increase the resources of machine on a running 
server.
10. That's where **Horizontal Scaling** come into play, which means creating a Raplica of your machine which can leads to running the 
machine 24/7 even when you need to update the resources.
11. You add more servers to get rid from downtime. If one machine gets load, add another server which can eliminate downtime as 
it must be 0. 
12. Now comes a question, how will we distribute different server machine to user's requesting on our sever bcuz, when user search for our application, it recieves a ip address, that's where Load Balancer comes.
13. Load Balancer is a server itself which decides on which machine user needs to redirect if request is coming.
It has it's own IP address. The user when request , it routes to our load balancer's ip.

-------------------------

14. As we know we have different different kind of microservices like auth, api, orders, payments.
15. We create differennt servers along with a loadbalancer for each service. 
16. We should have a route routing server which is responsible to route for a particular route 
for example /auth -> auth service ,  /orders -> order service which has their own servers plus loadbalancer.

17. This is known to be **API gateway**. 