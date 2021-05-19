
#!/usr/bin/python

import smtplib
import os
from decouple import config

email = config("EMAIL")
password = config("PASSWORD")
print(email , type(email))
print(password , type(password))

receiver_email = 'abhaysdhimans@gmail.com'


message = """From: From Person <from@fromdomain.com>
To: To Person <to@todomain.com>
Subject: SMTP e-mail test

# This is a test e-mail message.
"""

server = smtplib.SMTP("smtp.gmail.com",587)
server.starttls()
server.login(config("EMAIL") , config("PASSWORD"))
server.sendmail(config("EMAIL"),receiver_email,"teri aisi ki taisiiiiii")