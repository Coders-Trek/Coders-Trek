
def mail_sender_function(receiver_email , message):
    #!/usr/bin/python
    print(receiver_email , message , 'xxxxxxxxxx')
    import smtplib
    import os
    from decouple import config

    email = config("EMAIL")
    password = config("PASSWORD")

    server = smtplib.SMTP("smtp.gmail.com",587)
    server.starttls()
    server.login(config("EMAIL") , config("PASSWORD"))
    server.sendmail(config("EMAIL"),receiver_email, message)

def OTP_generator():
    # for nuemeric OTP
    import math
    import random
    corpus= "0123456789"
    generate_OTP = ""
    size = 6 # length of generated OTP
    length = len(corpus)
    for i in range(size) :
        generate_OTP += corpus[math.floor(random.random() * length)] 
    print("Generated OTP is :" , generate_OTP)
    return str(generate_OTP)