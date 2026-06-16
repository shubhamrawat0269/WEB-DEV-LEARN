# in this lecture, I am going to learn about IP Address type: 1. Public IP and , 2. Private IP Address.

1. Go to what's my ip address --> you'll see **public** ip address
2. Go to cmd ,you'll see **private/local** ip address
3. Private IP Address can only be access within a LAN connection. It's not globally available.
4. Before 1996, All Devices are provided with public ip's 
5. After 1996, Internet Manage Org. reserved some Ip address range which is called
**Private Ip Address**.

-------

6. Before 2010, Router which is setup in a home assigned with a public ip address. Now, our devices which are connected to the router doesn't directly communicate to the servers or network. So, devices commune with the router and router send req to the dedicated server and respond to the device by maintaining a table consist of MAC Address and private ip.
This architecture is known to be **Network Address Translation** (NAT)

--------

7. After 2010, to get Router a public ip address, we need to purchase a public ip. Now, Router has private IP address which communicate with the service provider Router which has public ip which then, ultimately communicated to the public servers like google, youtube.
This architecture is known to be **Carier Grade NAT** (CGNAT)



