require("open-uri")

ip = open("http://api.ipify.org").read
puts "My IP is: " + ip