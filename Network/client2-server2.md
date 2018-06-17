# How to connect "client2" to "server2"  

## step 1
Open the terminal!

## step 2
Write the following code in the terminal and press enter  

    $sudo gedit /etc/hostname

Delete the existing name and write the following name instead:

    client2
## step 3
Write the following code in the terminal and press enter  

    $sudo gedit /etc/hosts

Change the existing information to match the following lines:  

    10.10.0.22      localhost  
    10.10.0.1       server1  
    10.10.0.2       server2  
    10.10.0.3       server3  
    10.10.0.11      client1  
    10.10.0.22      client2  
    10.10.0.33      client3  

## step 4
Write the following code in the terminal and press enter

    $sudo gedit ~/.bashrc

Add the following lines at the end of the file:

    export ROS_IP=10.10.0.22  
    export ROS_MASTER_URI=http://10.10.0.2:11311

## step 5
close the terminal!  
## step 6
Go to Network connections and add a ethernet network:  

    change the name to "client2"  
go to IPv4 Settings Tab and add the address below:  

    address:10.10.0.22
    netmask:16  
## step 7
Connect to server by Lan cable and connect to client2 on the network connections  
Enjoy!  






